<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Validator;
use Alert;
use Library;
use Auth;
use App\Database;
use App\TableDatabase;

class TableController extends Controller
{
    const VIEW_PATH = "administration.tables";
    
    public function index(Request $request)
    {
        $paginate_limit = env('PAGINATE_LIMIT', 10);

        // search roles
        $tables = TableDatabase::latest()->paginate($paginate_limit);
        if(count($request->query()) > 0){
            $filter = $request->query('filter');
            $keyword = $request->query('keyword');

            switch($filter){
                case "database":
                    $database = Database::where('name', 'like', '%'.$keyword.'%')->first();
                    if($database == NULL){
                        $tables = TableDatabase::where('database_id', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    }else{
                        $tables = TableDatabase::where('database_id', $database->id)->latest()->paginate($paginate_limit);
                        $tables->appends([
                            'filter' => $filter,
                            'keyword' => $keyword
                        ]);
                    }
                    break;
                case "name":
                    $tables = TableDatabase::where('name', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
                    $tables->appends([
                        'filter' => $filter,
                        'keyword' => $keyword
                    ]);
                    break;
                default:
                    $tables = TableDatabase::where('name', 'like', '%'.$keyword.'%')->latest()->paginate($paginate_limit);
            }
        }
        $offset = $tables->perPage() * ($tables->currentPage() - 1);
        return view(self::VIEW_PATH.'.index')->with(compact('tables', 'offset'));
    }

    public function destroy($id)
    {
        $table = TableDatabase::destroy($id);
        return redirect()->route('tables.index');
    }

    public function create()
    {
        $databases = Database::all(['id','name']);
        return view(self::VIEW_PATH.'.create')->with(compact('databases'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:100',
            'database' => 'required',
            'description' => 'string|max:100|nullable',
        ]);
        $database = TableDatabase::create([
            'database_id' => $request->database,
            'name' => $request->name,
            'description' => $request->description
        ]);
        alert()->success('Table '.$request->name.' has been added!', 'Success');
        return back();
    }

    public function edit($id)
    {
        $databases = Database::all(['id','name']);
        $table = TableDatabase::findOrFail($id);
        return view(self::VIEW_PATH.'.edit')->with(compact('table','databases'));
    }
}
