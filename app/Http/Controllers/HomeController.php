<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Database;
use App\TableDatabase;
use App\TemporaryDatabase;
use App\User;
use Carbon\Carbon;
use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $databases = Database::get()->count();
        $users = User::get()->count();
        $tables = TableDatabase::get()->count();
        $actives = TemporaryDatabase::get()->count();
        return view('dashboard', compact('databases','users','tables','actives'));
    }
}
