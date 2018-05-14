<?php

use Illuminate\Http\Request;

Route::prefix('v1')->namespace('API\V1')->group(function(){
    // Broadcasts
    Route::prefix('broadcasts')->group(function(){
        Route::post('/', 'BroadcastsController@store');
        Route::post('want', 'BroadcastsController@want');
    });

    // Department Stores
    Route::get('department_stores', 'DepartmentStoresController@index');

    // Product
    Route::post('products', 'ProductsController@index');
    Route::post('products/{product}', 'ProductsController@show');

    // Product Unique (home)
    Route::post('productunique', 'ProductUniqueController@index');
    Route::prefix('productunique/{product}')->group(function(){
        Route::post('', 'ProductUniqueController@show');
        // Route::post('/want', 'ProductUniqueController@want');

        //wishlists add
        // Route::post('/wishlist', 'WishlistsController@store');
        
        // Comments
        Route::get('comments', 'CommentController@viewcomments');
        Route::post('comments', 'CommentController@storecomments');
        Route::delete('comments/{comment}', 'CommentController@destroy');

        // Loves
        Route::get('loves', 'ProductLovesController@index')->name('loves.index');
        Route::post('loves', 'ProductLovesController@store')->name('loves.store');
        Route::delete('loves/{love}', 'ProductLovesController@destroy')->name('loves.destroy');

        // Product Views
        Route::post('views', 'ProductViewsController@store');
    });
    // Product subs api
    Route::prefix('products/{product}')->group(function(){

        // Comments
        Route::get('comments', 'CommentController@viewcomments');
        Route::post('comments', 'CommentController@storecomments');
        Route::delete('comments/{comment}', 'CommentController@destroy');

        //wishlists add
        // Route::post('/wishlist', 'WishlistsController@store');

        //want
        // Route::post('/want', 'ProductUniqueController@want');
        
        // Loves
        Route::get('loves', 'ProductLovesController@index')->name('loves.index');
        Route::post('loves', 'ProductLovesController@store')->name('loves.store');
        Route::delete('loves/{love}', 'ProductLovesController@destroy')->name('loves.destroy');

        // Product Views
        Route::post('views', 'ProductViewsController@store');
    });

    //directories
    Route::prefix('directories')->group(function(){
        Route::post('','StoreDirectoriesController@index');
        Route::post('{id}', 'StoreDirectoriesController@show');
        Route::post('{id}/highlighted/{gallery}', 'StoreDirectoriesController@detailHighlighted');
        // Route::post('{id}/highlighted/{gallery}/ask', 'StoreDirectoriesController@askITC');
    });

    //categories
    Route::resource('categories', 'CategoriesController', [
        'except' => ['create','edit']
    ]);

    //check customer number
    Route::post('checkcustomer', 'CheckCustomerController@checkNumber');

    // Customers
    Route::prefix('customers')->group(function(){
        Route::post('profile', 'CustomersController@show');
        Route::post('/', 'CustomersController@store');
        Route::put('/', 'CustomersController@update');
        Route::delete('/', 'CustomersController@destroy');
        Route::put('/update-photo', 'CustomersController@updatePhoto');
        
        //my wishlist
        Route::post('wishlists','WishlistsController@index');
        Route::delete('wishlists/{wishlist}','WishlistsController@destroy');
        
        //reward
        Route::prefix('rewards')->group(function(){
            Route::post('/info','RewardsController@index');
        });

        //address
        Route::prefix('address')->group(function(){
            Route::post('/list', 'CustomerAddressController@index');
            Route::post('', 'CustomerAddressController@store');
            Route::put('/{id}', 'CustomerAddressController@update');
            Route::delete('/{id}', 'CustomerAddressController@destroy');
            Route::put('/{id}/setdefault', 'CustomerAddressController@setDefault');
        });

        // Location
        Route::prefix('location')->group(function(){
            Route::post('/', 'CustomerLocationController@index');
            Route::post('save', 'CustomerLocationController@store');
        });

        //orders
        Route::prefix('orders')->middleware('customer-valid')->group(function(){
            Route::get('/status','OrdersController@orderStatus');
            Route::get('/status/{order_number}','OrdersController@detailOrderStatus');
            Route::put('/status/{order_number}/cancel','OrdersController@cancelOrder');
            Route::post('/{order_number}', 'OrdersController@indexOrderNumber');
            Route::post('/{order_number}/{category}', 'OrdersController@indexCategory');
            Route::post('/{order_number}/{category}/{id}', 'OrdersController@show');
            Route::post('/{order_number}/{category}/{id}/wishlist', 'OrdersController@addToWishlist');
            Route::post('/{order_number}/{category}/{id}/buy', 'OrdersController@buyOrder');
            Route::post('/{order_number}/{category}/{id}/ask', 'OrdersController@offerOrder');
        });
        
        //shopping chart
        Route::prefix('shopping_chart')->group(function(){
            // Pershop Note Subs Api
            Route::prefix('pershop_notes')->group(function(){
                Route::post('', 'PershopNoteController@index');
                Route::post('/{order_number}', 'PershopNoteController@show')->name('pershop.show');
                Route::delete('/{order_number}/{id}', 'PershopNoteController@destroy');
                Route::put('/{order_number}/checkout','PershopNoteController@confirmPershop');
                Route::put('/{order_number}/cancel','PershopNoteController@cancelPershop');
                Route::post('/{order_number}/proof_of_payment','PershopNoteController@confirmPayment');
            });

            // Transactions Subs Api
            Route::prefix('histories')->group(function(){
                Route::post('', 'TransactionsController@index');
                // Route::post('/{order_number}/status', 'TransactionsController@statusShipping');
                Route::post('/{order_number}/status/{id}', 'TransactionsController@detailShipping');
                Route::post('/{order_number}/detail', 'TransactionsController@detailOrder');
                Route::post('/{order_number}/address', 'TransactionsController@customerAddress');
                Route::put('/{order_number}/address/confirm', 'TransactionsController@confirmReceive');
            });
        });
    });

    // Stores subs api
    Route::prefix('store')->group(function(){
        Route::post('login', 'AuthController@login')->name('auth.login');
        Route::post('logout', 'AuthController@logout')->name('auth.logout');
        Route::middleware(['auth:store-user', 'jwt.auth'])->group(function(){
            Route::namespace('Store')->group(function(){
                // Galleries
                Route::prefix('galleries')->group(function(){
                    Route::get('', 'GalleryController@index');
                    Route::post('', 'GalleryController@store');
                    Route::get('/{id}', 'GalleryController@show');
                    Route::put('/{id}', 'GalleryController@update');
                    Route::put('/{id}/highlighted', 'GalleryController@addHighlighted');
                    Route::put('/{id}/unhighlighted', 'GalleryController@removeHighlighted');
                    Route::delete('/{id}', 'GalleryController@destroy');
                });

                // Requests
                Route::prefix('requests')->group(function(){
                    Route::get('/', 'RequestsController@index')->name('requests.index');
                    Route::post('{request}', 'RequestsController@storeOrder')->name('requests.store');
                    Route::get('{request}', 'RequestsController@show')->name('requests.show');
                });

                // Offers
                Route::resource('offers', 'OffersController', [
                    'except' => ['create', 'store', 'edit', 'destroy']
                ]);

                // Work Orders
                Route::resource('workorders', 'WorkOrdersController', [
                    'except' => ['create', 'store', 'edit', 'destroy']
                ]);
            });

            // Store Profiles
            Route::get('profile', 'StoresController@index');
            Route::post('profile', 'StoresController@update');

            // Auth Profile
            Route::get('auth/profile', 'AuthController@show');
            Route::put('auth/profile', 'AuthController@update');
            Route::put('auth/change-password', 'AuthController@updatePassword');
        });
    });
});
