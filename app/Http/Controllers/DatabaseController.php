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
        $database = Database::findOrFail($id);
        return view(self::VIEW_PATH.'.edit')->with(compact('database'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
