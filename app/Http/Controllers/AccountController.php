<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Validator;

use App\User;
use App\Role;
use App\Rules\CheckCurrentPassword;
use App\Store;
use Auth;

use Alert;
use Library;

class AccountController extends Controller
{
    const VIEW_PATH = "administration.accounts";

    public function edit()
    {
      $id = Auth::user()->id;
      $accounts = User::findOrFail($id);
      return view(self::VIEW_PATH.'.profile')->with(compact('accounts'));
    }

    public function update(Request $request)
    {
        $id = Auth::user()->id;
        $accounts = User::findOrFail($id);

        $arr_validate = [
              'fullname' => 'required|string|max:255',
              'email' => [
                  'required', Rule::unique('users')->ignore($accounts->id),
                  'email', 'string', 'max:255'
              ],
              'current_password' => [new CheckCurrentPassword($accounts->password)],
              'password' => 'required_with:current_password|min:6|confirmed',
          ];
          if(empty($request->current_password)) $arr_validate['current_password'] = 'required';
          if(!empty($request->store)) $arr_validate['store'] = 'required';
          $validator = Validator::make($request->all(), $arr_validate)->validate();

          $accounts->fullname = $request->fullname;
          $accounts->email = $request->email;
          $accounts->password = bcrypt($request->password);
          if(!empty($request->store)) $accounts->store_id = $request->store;
          $accounts->save();

          alert()->success('User '.$request->fullname.' has been edited!', 'Success');

          return back();
    }
}
