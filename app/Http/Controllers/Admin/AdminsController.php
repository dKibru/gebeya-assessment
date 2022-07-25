<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminsController extends Controller
{
    public function index(){
        $clients = \App\Models\User::where('role', 'admin')->with('products', 'categories')->orderByDesc('id')->paginate();
        return Inertia::render('Admin/Admins', [
            'menu' => currentBackMenu(auth()->user()),
//            'products' => $products,
            'admins' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

    public function create(){
        return Inertia::render('Admin/AdminsCreate', [
            'menu' => currentBackMenu(auth()->user()),
//            'products' => $products,
//            'admins' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);
        \App\Models\User::create([
            'name' => $request['name'], 'email' => $request['email'], 'role' => 'admin',
            'password' => \Hash::make($request['password'])
        ]);
        return redirect()->to(url('/admin/admins'));
    }
}
