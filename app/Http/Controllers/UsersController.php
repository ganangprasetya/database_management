<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Validator;

use App\User;
use App\Role;
use App\Rules\CheckCurrentPassword;

use Alert;
use Library;
use Excel;
use Auth;

class UsersController extends Controller
{
    const VIEW_PATH = "administration.users";

    public function index(Request $request)
    {
        $paginate_limit = env('PAGINATE_LIMIT', 10);

        // search roles
        $users = User::with('roles')->latest()->paginate($paginate_limit);
        if(count($request->query()) > 0){
            $filter = $request->query('filter');
            $keyword = $request->query('keyword');

            switch($filter){
                case "fullname":
                    $users = User::with('roles')->where('fullname', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    break;
                case "email":
                    $users = User::with('roles')->where('email', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    break;
                default:
                    $users = User::with('roles')->where('fullname', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
            }
        }
        $offset = $users->perPage() * ($users->currentPage() - 1);
        $roles = Role::all();

        return view(self::VIEW_PATH.'.index')->with(compact('users', 'offset', 'roles'));
    }

    public function lists(Request $request){
        $paginate_limit = env('PAGINATE_LIMIT', 10);

        // search roles
        $users = User::with('roles')->latest()->paginate($paginate_limit);
        if(count($request->query()) > 0){
            $filter = $request->query('filter');
            $keyword = $request->query('keyword');

            switch($filter){
                case "fullname":
                    $users = User::with('roles')->where('fullname', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    break;
                case "email":
                    $users = User::with('roles')->where('email', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    break;
                case "role":
                    $users = User::with('roles')->whereHas('roles', function($query) use ($keyword){
                        $query->where('display_name', 'like', '%'.$keyword.'%');
                    })->latest()->paginate($paginate_limit);
                    break;
                default:
                    $users = User::with('roles')->where('fullname', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
            }
        }
        $offset = $users->perPage() * ($users->currentPage() - 1);

        return view(self::VIEW_PATH.'.list')->with(compact('users', 'offset'));
    }

    public function exportxls()
    {
        $users = User::with('roles')->latest()->get();;
        $excel = Excel::create('Data Users '.date('d-M-Y His'), function($excel) use($users){
            //Set Property
            $excel->setTitle('Data Users')
                  ->setCreator(Auth::user()->name);
            //memberi nama Sheet
            $excel->sheet('Data Users', function($sheet) use($users){
                $row = 1;
                //style sheeet excel
                $sheet->freezeFirstRow();
                //memakai border untuk header
                $sheet->cells('A1:E1', function($cells) {
                    $cells->setFont(array(
                        'family'     => 'Calibri',
                        'size'       => '14'
                    ));
                    $cells->setBorder('A1:E1', 'thin');
                });
                //header
                $sheet->row($row,[
                    'No.',
                    'Fullname',
                    'Email',
                    'Role',
                    'Created At'
                ]);
                $no = 1;
                foreach($users as $user){
                    $sheet->row(++$row, [
                        $no++,
                        $user->fullname,
                        $user->email,
                        $user->roles[0]->display_name,
                        $user->created_at
                    ]);
                }
            });
        })->download('xlsx');
    }

    public function create()
    {
        $roles = Role::all();

        return view(self::VIEW_PATH.'.create')->with(compact('roles'));
    }

    public function store(Request $request)
    {
        $arr_validate = [
            'fullname' => 'required|string|max:255',
            'email' => 'required|unique:users,email|string|email|max:255',
            'password' => 'required|string|min:6|confirmed',
            'role' => 'required|integer',
        ];
        if(!empty($request->store)) $arr_validate['store'] = 'required';
        $request->validate($arr_validate);

        $arr_fill = [
            'fullname' => $request->fullname,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'owner_id' => 1,
        ];
        if(!empty($request->store)) $arr_fill['store_id'] = $request->store;
        $user = User::create($arr_fill);

        $role = Role::findOrFail($request->role);
        $user->attachRole($role);

        alert()->success('User '.$request->name.' has been added!', 'Success');

        return back();
    }

    public function edit($id)
    {
        $user = User::with('roles')->findOrFail($id);
        $roles = Role::all();

        return view(self::VIEW_PATH.'.edit')->with(compact('user', 'roles'));
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $arr_validate = [
            'fullname' => 'required|string|max:255',
            'email' => [
                'required', Rule::unique('users')->ignore($user->id),
                'email', 'string', 'max:255'
            ],
            'current_password' => [new CheckCurrentPassword($user->password)],
            'password' => 'required_with:current_password|confirmed',
            'role' => 'required|integer',
        ];
        if(!empty($request->store)) $arr_validate['store'] = 'required';
        $validator = Validator::make($request->all(), $arr_validate)->validate();

        $user->fullname = $request->fullname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        if(!empty($request->store)) $user->store_id = $request->store;
        $user->save();

        $user->syncRoles([$request->role]);

        alert()->success('User '.$request->name.' has been edited!', 'Success');

        return back();
    }

    public function destroy($id)
    {
        if(Auth::user()->id == $id){
            alert()->error('Failed to Delete Active Account', 'Error');
        }else{
            $user = User::destroy($id);
        }
        return redirect()->route('users.index');
    }
}
