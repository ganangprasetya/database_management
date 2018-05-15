<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::match(['get', 'post'], 'register', function(){
    return redirect('/login');
});

Route::get('/', function(){
    return redirect('/home');
});
// Route::get('sendbasicemail','CustomersController@basic_email');
// Route::get('sendbasicemail', function(){
//     return view('mail');
// });

Route::middleware(['auth', 'role:administrator|super_user'])->group(function(){
    Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/home/dailytransactions', 'HomeController@dailytransactions')->name('home.dailytransactions');
    Route::get('/home/monthlytransactions', 'HomeController@monthlytransactions')->name('home.monthlytransactions');

    Route::middleware(['role:administrator|super_user'])->group(function(){

      //Accounts
      Route::prefix('accounts')->group(function(){
        Route::get('setting', 'AccountController@edit')->name('edit');
        Route::put('setting', 'AccountController@update')->name('update');
      });
    });
    // Administration
        Route::middleware(['auth', 'role:administrator'])->prefix('administration')->group(function(){
            // User Management
            Route::resource('users', 'UsersController', ['except' => [
                'show'
            ]]);
            Route::get('users/lists', 'UsersController@lists')->name('users.list');
            Route::get('users/lists/exportxls', 'UsersController@exportxls')->name('users.xls');
            Route::get('users/manage', 'UsersController@index')->name('users.manage');

            //database management
            Route::resource('databases', 'DatabaseController', ['except' => [
                'show'
            ]]);
            Route::get('databases/manage', 'DatabaseController@index')->name('databases.manage');
            Route::get('databases/userdb', 'DatabaseController@userDB')->name('databases.userdb');
            Route::get('databases/userdb/{id}', 'DatabaseController@EditAssign')->name('databases.editassign');
            Route::put('databases/userdb/{id}', 'DatabaseController@UpdateAssign')->name('databases.updateassign');
            Route::delete('databases/userdb/{id}', 'DatabaseController@DeleteAssign')->name('databases.deleteassign');
            Route::get('databases/assign', 'DatabaseController@AssignUser')->name('databases.assign');
            Route::get('databases/assign/{id}', 'DatabaseController@AssignForm')->name('databases.assignform');
            Route::put('databases/assign/{id}', 'DatabaseController@AddAssign')->name('databases.addassign');
        });
        // Master Data
        Route::prefix('masterdata')->group(function(){
            Route::get('messagemt/lists', 'MessageMTController@index')->name('messagemt.list');
            Route::post('messagemt/changedatabases', 'MessageMTController@ChangeDatabase')->name('messagemt.changedb');
        });
});
