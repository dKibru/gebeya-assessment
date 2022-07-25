<?php


namespace App\Http\Controllers\Client;


use Inertia\Inertia;

class ProductController
{
    public function index(){
        $client = currentClient();
        $clients = \App\Models\Product::where('client_id', $client->id)->orderByDesc('id')->paginate();
        return Inertia::render('Client/Product', [
            'menu' => currentBackMenu(auth()->user()),
//            'products' => $products,
            'products' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }
}
