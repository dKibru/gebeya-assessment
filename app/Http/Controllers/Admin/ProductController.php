<?php


namespace App\Http\Controllers\Admin;


use Inertia\Inertia;

class ProductController
{

    public function index()
    {
        $clients = \App\Models\Product::query()->with('client', 'categories')->orderByDesc('id')->paginate();
        return Inertia::render('Admin/Product', [
            'menu' => currentBackMenu(auth()->user()),
//            'products' => $products,
            'products' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

}
