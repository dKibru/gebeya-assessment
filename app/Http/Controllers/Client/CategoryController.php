<?php


namespace App\Http\Controllers\Client;


use Inertia\Inertia;

class CategoryController
{
    public function index(){
        $client = currentClient();
        $clients = \App\Models\Category::where('client_id', $client->id)->orderByDesc('id')->paginate();
        return Inertia::render('Client/Category', [
            'menu' => currentBackMenu(auth()->user()),
//            'products' => $products,
            'categories' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }
}
