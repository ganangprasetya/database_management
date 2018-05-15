<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;
use Validator;
use Alert;
use Library;
use Excel;
use Auth;
use App\Database;
use App\UserDatabase;
use App\TemporaryDatabase;
use App\User;

class DatabaseController extends Controller
{
    const VIEW_PATH = "administration.databases";
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $paginate_limit = env('PAGINATE_LIMIT', 10);

        // search roles
        $databases = Database::latest()->paginate($paginate_limit);
        if(count($request->query()) > 0){
            $filter = $request->query('filter');
            $keyword = $request->query('keyword');

            switch($filter){
                case "name":
                    $databases = Database::where('name', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    break;
                case "host":
                    $databases = Database::where('host', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    break;
                case "port":
                    $databases = Database::where('port', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    break;
                case "username":
                    $databases = Database::where('username', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    break;
                default:
                    $databases = Database::where('name', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
            }
        }

        $offset = $databases->perPage() * ($databases->currentPage() - 1);

        return view(self::VIEW_PATH.'.index')->with(compact('databases', 'offset'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view(self::VIEW_PATH.'.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'host' => 'required|string|max:255',
            'port' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'password' => 'string|nullable',
            'note' => 'string|nullable'
        ]);
        $database = Database::create([
            'name' => $request->name,
            'host' => $request->host,
            'port' => $request->port,
            'username' => $request->username,
            'password' => $request->password,
            'note' => $request->note
        ]);
        alert()->success('Database '.$request->name.' has been added!', 'Success');
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $database = Database::findOrFail($id);
        return view(self::VIEW_PATH.'.edit')->with(compact('database'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $database = Database::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'host' => 'required|string|max:255',
            'port' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'password' => 'string|nullable',
            'note' => 'string|nullable'
        ])->validate();
        $database->name = $request->name;
        $database->host = $request->host;
        $database->port = $request->port;
        $database->username = $request->username;
        $database->password = $request->password;
        $database->note = $request->note;
        $database->save();
        alert()->success('Database '.$request->name.' has been edited!', 'Success');
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(UserDatabase::where('database_id', $id)->first() != NULL){
            alert()->error('Still used by users', 'Error');
        }else{
            $database = Database::destroy($id);
        }

        return redirect()->route('databases.index');
    }

    public function userDB(Request $request)
    {
        $paginate_limit = env('PAGINATE_LIMIT', 10);

        // search roles
        $users = User::whereHas('database')->latest()->paginate($paginate_limit);
        if(count($request->query()) > 0){
            $filter = $request->query('filter');
            $keyword = $request->query('keyword');

            switch($filter){
                case "name":
                    $users = User::where('fullname', 'like', '%'.$keyword.'%')->whereHas('database')->latest()->paginate($paginate_limit);
                    break;
                default:
                    $users = User::where('fullname', 'like', '%'.$keyword.'%')->whereHas('database')->latest()->paginate($paginate_limit);
            }
        }

        $offset = $users->perPage() * ($users->currentPage() - 1);

        return view(self::VIEW_PATH.'.userdb')->with(compact('users', 'offset'));
    }

    public function EditAssign($id)
    {
        $user = User::findOrFail($id);
        $old_databases = implode(', ', UserDatabase::with('database')->where('user_id', $id)->get()->pluck('database.id')->toArray());
        $old_databases_name = implode(', ', UserDatabase::with('database')->where('user_id', $id)->get()->pluck('database.name')->toArray());
        $databases = Database::all();
        return view(self::VIEW_PATH.'.editassign')->with(compact('databases','user','old_databases','old_databases_name'));
    }
    
    public function UpdateAssign(Request $request, $id)
    {
        $database_id = $request->user_database;
        if($database_id  != NULL){
            UserDatabase::where('user_id', $id)->delete();
            foreach($database_id as $userdatabase)
            {
                UserDatabase::create([
                    'user_id' => $id,
                    'database_id' => $userdatabase
                ]);

            }

        }else{
            $old_database_id = explode(',', $request->user_database1);
            UserDatabase::where('user_id', $id)->delete();
            foreach($old_database_id as $userdatabase)
            {
                UserDatabase::create([
                    'user_id' => $id,
                    'database_id' => $userdatabase
                ]);

            }
        }
        alert()->success('User Databases has been updated!', 'Success');
        return redirect()->route('databases.userdb');
    }

    public function DeleteAssign($id)
    {
        UserDatabase::where('user_id', $id)->delete();
        TemporaryDatabase::where('user_id', $id)->delete();
        return redirect()->route('databases.userdb');
    }

    public function AssignUser(Request $request)
    {
        $paginate_limit = env('PAGINATE_LIMIT', 10);

        // search roles
        $users = User::doesntHave('database')->latest()->paginate($paginate_limit);
        if(count($request->query()) > 0){
            $filter = $request->query('filter');
            $keyword = $request->query('keyword');

            switch($filter){
                case "name":
                    $users = User::where('fullname', 'like', '%'.$keyword.'%')->whereHas('database')->latest()->paginate($paginate_limit);
                    break;
                default:
                    $users = User::where('fullname', 'like', '%'.$keyword.'%')->whereHas('database')->latest()->paginate($paginate_limit);
            }
        }

        $offset = $users->perPage() * ($users->currentPage() - 1);
        return view(self::VIEW_PATH.'.assignuser')->with(compact('users', 'offset'));
    }

    public function AssignForm(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $databases = Database::all();
        return view(self::VIEW_PATH.'.addassign')->with(compact('databases','user'));
    }

    public function AddAssign(Request $request,$id)
    {
        $database_id = $request->user_database;
        foreach($database_id as $userdatabase)
        {
            UserDatabase::create([
                'user_id' => $id,
                'database_id' => $userdatabase
            ]);
        }
        alert()->success('User Databases has been Added!', 'Success');
        return redirect()->route('databases.assignuser');
    }

}
