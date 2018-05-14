<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

use App\Customer;

use App\Helpers\Library;

class CheckCustomerValid
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(env('APP_ENV') == 'local')
        {
            $check_key = 'OK';
        }else{
            if(!empty($request->header('key')))
            {
                $username = $request->header('username');
                $key = (empty($request->header('key'))) ? 'kosong' : $request->header('key');
            }else{
                $username = $request->username;
                $key = (empty($request->key)) ? 'kosong' : $request->key;
            }
            $check_key = Library::fetchUrl('https://uu.byonchat.com/v1/ckeys/'.$username.'/'.$key);
        }

        if($check_key == 'OK')
        {
            return $next($request);
        }

        return response()->json([
            'message' => 'Unauthorized.'
        ], 401);
    }
}
