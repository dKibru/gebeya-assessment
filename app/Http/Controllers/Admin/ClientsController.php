<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientsController extends Controller
{

    public function index(){
        $clients = \App\Models\User::where('role', 'client')->orderByDesc('id')->paginate();
        return Inertia::render('Admin/Clients', [
            'menu' => currentBackMenu(auth()->user()),
//            'products' => $products,
            'clients' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }
}
