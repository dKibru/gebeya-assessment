<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminsController extends Controller
{
    public function index(){
        $admins = \App\Models\User::where('role', 'admin')->paginate();
        return view('admin.admins',compact('admins'));
    }

    public function create(){
        $admins = \App\Models\User::where('role', 'admin')->paginate();
        return view('admin.admins-create',compact('admins'));
    }

    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email'
        ]);
        \App\Models\User::create([
            'name' => $request['name'], 'email' => $request['email'], 'role' => 'admin', 
            'password' => \Hash::make('secret')
        ]);
        return redirect()->to(url('/admin/admins'));
    }
}
