<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', [\App\Http\Controllers\HomePageController::class, 'index']);
Route::get('/test', [\App\Http\Controllers\HomePageController::class, 'test']);


Route::middleware(['auth', 'role:client,admin'])->group(function(){


    Route::get('/home', \App\Http\Controllers\DashboardController::class)->name('dashboard');


    Route::middleware('role:client')->group(function(){
        Route::get('/client/categories', [\App\Http\Controllers\Client\CategoryController::class, 'index']);
        Route::get('/client/products', [\App\Http\Controllers\Client\ProductController::class, 'index']);
        Route::get('/client/orders', [\App\Http\Controllers\Client\OrderController::class, 'index']);
    });

    Route::middleware('role:admin')->group(function(){
        Route::resource('/admin/admins', \App\Http\Controllers\Admin\AdminsController::class);
        Route::post('/admin/loginas/{id}', [\App\Http\Controllers\Auth\LoginController::class, 'loginAsClient'])->name('loginAsClient');
        Route::post('/admin/logoutas', [\App\Http\Controllers\Auth\LoginController::class, 'logoutAsClient'])->name('loginAsClient');


        Route::get('/admin/clients', [\App\Http\Controllers\Admin\ClientsController::class, 'index'])->name('admin.clients');
        Route::post('/admin/client/{id}/delete', [\App\Http\Controllers\Admin\ClientsController::class, 'delete'])->name('admin.clients.delete');
        Route::get('/admin/users', [\App\Http\Controllers\Admin\UsersController::class, 'index'])->name('admin.users');
        Route::get('/admin/products', [\App\Http\Controllers\Admin\ProductController::class, 'index'])->name('admin.products');
    });



});

Route::get('/media/{path}', \App\Http\Controllers\StorageController::class)->where('path', '[\/\w\.-]*')->name('media');


Route::get('/{store}/{category}', [\App\Http\Controllers\CategoryController::class, 'show'])->name('category.show');
Route::get('/store/{client_id}/{category_id}/{product_id}', [\App\Http\Controllers\ProductController::class, 'show'])->name('product.show');
Route::get('/store/{client_id}/{product_id}', [\App\Http\Controllers\ProductController::class, 'show2'])->name('product.show2');

Route::post('/cart/store', [\App\Http\Controllers\CartController::class, 'store'])->name('cart.store');
Route::post('/cart/remove', [\App\Http\Controllers\CartController::class, 'remove'])->name('cart.remove');
Route::get('/cart', [\App\Http\Controllers\CartController::class, 'index'])->name('cart');

Route::get('/checkout', [\App\Http\Controllers\CheckoutController::class, 'index'])->name('checkout');
Route::post('/checkout', [\App\Http\Controllers\CheckoutController::class, 'store'])->name('checkout.store');
Route::middleware('auth')->group(function(){

});




Route::middleware('guest')->group(function(){
    Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'show'])->name('login');
    Route::get('/register', [\App\Http\Controllers\Auth\LoginController::class, 'register'])->name('register');
    Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'authenticate'])->name('login.submit');
    Route::post('/register', [\App\Http\Controllers\Auth\LoginController::class, 'register'])->name('register.submit');
});
Route::get('logout', [\App\Http\Controllers\Auth\LoginController::class, 'logout'])->middleware('auth')->name('logout');



Route::get('/{id}', [\App\Http\Controllers\HomePageController::class, 'show'])->name('client.home');
