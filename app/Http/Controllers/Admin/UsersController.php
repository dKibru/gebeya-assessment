<?php


namespace App\Http\Controllers\Admin;


use Inertia\Inertia;

class UsersController
{
    public function index(){
        $clients = \App\Models\User::where('role', 'user')->orderByDesc('id')->paginate();
        return Inertia::render('Admin/User', [
            'menu' => currentBackMenu(auth()->user()),
//            'products' => $products,
            'users' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }
}
