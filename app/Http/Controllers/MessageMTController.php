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
use App\TableDatabase;
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
        $table_selected = NULL;
        if($data == NULL){
            //kalau kosong
            $messagesmt = NULL;
        }else{
            //proses choose active database
            $table_selected = TableDatabase::where('id', $data->table_id)->first();
            $active_database = Database::where('id', $data->database_id)->first();
            Config::set('database.connections.csr.host', $active_database->host);
            Config::set('database.connections.csr.username', $active_database->username);
            Config::set('database.connections.csr.password', $active_database->password);
            Config::set('database.connections.csr.database', $active_database->name);
            //If you want to use query builder without having to specify the connection
            Config::set('database.default', 'csr');
            DB::reconnect('csr');

            //proses show data
            $messagesmt = DB::connection('csr')->table($table_selected->name)->orderBy('countid', 'desc')->paginate($paginate_limit);
            if(count($request->query()) > 0){
                $filter = $request->query('filter');
                $keyword = $request->query('keyword');

                switch($filter){
                    case "phone_number":
                        $global_phone = Library::cekUserid($keyword);
                        $messagesmt = DB::connection('csr')->table('messagemt')->where('sendto', $global_phone)->orderBy('countid', 'desc')->paginate($paginate_limit);
                        $messagesmt->appends([
                            'filter' => $filter,
                            'keyword' => $keyword
                        ]);
                        $no_prefix = substr($global_phone, 0, 5);
                        $name_prefix = NULL;
                        $telkomsel = ["62811","62812","62813","62821","62822","62823","62851","62852","62853"];
                        $indosat = ["62814","62815","62816","62855","62856","62857","62858"];
                        $three = ["62895","62896","62897","62898","62899"];
                        $smartfren = ["62881","62882","62883","62884","62885","62886","62887","62888","62889"];
                        $xl = ["62817","62818","62819","62859","62877","62878","62879"];
                        $axis = ["62831","62832","62833","62834","62835","62836","62837","62838","62839"];
                        if(in_array($no_prefix, $telkomsel)){
                            $name_prefix = 'Telkomsel';
                        }elseif(in_array($no_prefix, $indosat)){
                            $name_prefix = 'Indosat';
                        }elseif(in_array($no_prefix, $three)){
                            $name_prefix = 'Hutchison - Three';
                        }elseif(in_array($no_prefix, $xl)){
                            $name_prefix = 'XL Axiata';
                        }elseif(in_array($no_prefix, $axis)){
                            $name_prefix = 'Axis';
                        }elseif(in_array($no_prefix, $smartfren)){
                            $name_prefix = 'SmartFren';
                        }
                        break;
                    case "message_id":
                        $messagesmt = DB::connection('csr')->table('messagemt')->where('messageid', 'like', '%'.$keyword.'%')->orderBy('countid', 'desc')->paginate($paginate_limit);
                        $messagesmt->appends([
                            'filter' => $filter,
                            'keyword' => $keyword
                        ]);
                        break;
                }
            }
        }
        return view(self::VIEW_PATH.'.list')->with(compact('table_selected','user_databases','databases','data','messagesmt','name_prefix'));
    }

    public function ChangeDatabase(Request $request)
    {
        $database_id = $request->database_id;
        $table_id = $request->table_id;
        if($database_id == NULL){
            alert()->warning('Please select database in list', 'Warning');
            return redirect()->route('messagemt.list');
        }else{
            $user_id = Auth::user()->id;
            $old_temporary = TemporaryDatabase::where('user_id', $user_id)->first();
            if($old_temporary != NULL){
                $old_temporary->delete();
                $new_temporary = TemporaryDatabase::create([
                    'user_id' => $user_id,
                    'database_id' => $database_id,
                    'table_id' => $table_id
                ]);
            }else{
                $new_temporary = TemporaryDatabase::create([
                    'user_id' => $user_id,
                    'database_id' => $database_id,
                    'table_id' => $table_id
                ]);
            }
            $database = Database::where('id', $database_id)->first()->name;
            $table = TableDatabase::where('id', $table_id)->first()->name;
            alert()->success('Database '.$database.'->'.$table.' has been selected!', 'Success');
            return redirect()->route('messagemt.list');
        }
    }

    public function tablelists(Request $request)
    {
        $database_id = $request->get('database_id');
        $table = TableDatabase::where('database_id',$database_id)->get();
        return json_encode($table);
    }
}
