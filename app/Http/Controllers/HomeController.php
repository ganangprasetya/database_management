<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DepartmentStore;
use App\Store;
use App\User;
use App\Category;
use App\Broadcast;
use App\Product;
use App\Order;
use App\OrderPayment;
use App\Customer;
use Carbon\Carbon;

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
        return view('dashboard');
    }
}
