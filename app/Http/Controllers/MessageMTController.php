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
use App\MessageMT;
use App\UserDatabase;
use App\TemporaryDatabase;
use App\User;
use DB;
use Config;

class MessageMTController extends Controller
{
    const VIEW_PATH = "master-data.messagemt";

    public function index(Request $request)
    {
        $paginate_limit = env('PAGINATE_LIMIT', 10);
        $user_id = Auth::user()->id;
        $user_databases = UserDatabase::where('user_id', $user_id)->latest()->get();
        $databases = Database::all(['id','name']);
        $paginate_limit = env('PAGINATE_LIMIT', 10);
        $data = TemporaryDatabase::where('user_id', $user_id)->first();
        if($data == NULL){
            $messagesmt = NULL;
        }else{
            $active_database = Database::where('id', $data->database_id)->first();
            Config::set('database.connections.csr.host', $active_database->host);
            Config::set('database.connections.csr.username', $active_database->username);
            Config::set('database.connections.csr.password', $active_database->password);
            Config::set('database.connections.csr.database', $active_database->name);

            //If you want to use query builder without having to specify the connection
            Config::set('database.default', 'csr');
            DB::reconnect('csr');
            $messagesmt = DB::connection('csr')->table('messagemt')->paginate($paginate_limit);
            if(count($request->query()) > 0){
                $filter = $request->query('filter');
                $keyword = $request->query('keyword');

                switch($filter){
                    case "phone_number":
                        $global_phone = Library::cekUserid($keyword);
                        $messagesmt = DB::connection('csr')->table('messagemt')->where('sendto', 'like', '%'.$global_phone.'%')->paginate($paginate_limit);
                        $messagesmt->appends([
                            'filter' => $filter,
                            'keyword' => $keyword
                        ]);
                        break;
                    default:
                        $global_phone = Library::cekUserid($keyword);
                        $messagesmt = DB::connection('csr')->table('messagemt')->where('sendto', 'like', '%'.$global_phone.'%')->paginate($paginate_limit);
                        $messagesmt->appends([
                            'filter' => $filter,
                            'keyword' => $keyword
                        ]);
                }
            }
        }
        return view(self::VIEW_PATH.'.list')->with(compact('user_databases','databases','data','messagesmt'));
    }

    public function ChangeDatabase(Request $request)
    {
        $database_id = $request->database_id;
        $user_id = Auth::user()->id;
        $old_temporary = TemporaryDatabase::where('user_id', $user_id)->first();
        if($old_temporary != NULL){
            $old_temporary->delete();
            $new_temporary = TemporaryDatabase::create([
                'user_id' => $user_id,
                'database_id' => $database_id
            ]);
        }else{
            $new_temporary = TemporaryDatabase::create([
                'user_id' => $user_id,
                'database_id' => $database_id
            ]);
        }
        $database = Database::where('id', $database_id)->first()->name;
        alert()->success('Database '.$database .' has been selected!', 'Success');
        return redirect()->route('messagemt.list');
    }
}
