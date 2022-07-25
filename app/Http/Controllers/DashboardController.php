<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function __invoke(){
        if(request()->get('as') == "client"){
            return view('client.dashboard');
        }

//        return view(auth()->user()->role.'.dashboard');
        return Inertia::render('Admin/Dashboard', [
            'menu' => currentBackMenu(auth()->user())
//            'products' => $products,
//            'client' => $client,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

}
