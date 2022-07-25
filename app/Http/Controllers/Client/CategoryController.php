<?php


namespace App\Http\Controllers\Client;


use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController
{
    public function index(){
        $client = currentClient();
        $clients = \App\Models\Category::where('client_id', $client->id)->with('products')->orderByDesc('id')->paginate();
        return Inertia::render('Client/Category', [
            'menu' => currentBackMenu($client),
//            'products' => $products,
            'categories' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

    public function create()
    {
        $client = currentClient();
        $clients = \App\Models\Category::where('client_id', $client->id)->with('products')->orderByDesc('id')->paginate();
        return Inertia::render('Client/CategoryCreate', [
            'menu' => currentBackMenu($client),
//            'products' => $products,
            'categories' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
           'name' => 'required',
        ]);
        $client = currentClient();
        Category::create([
            'client_id' => $client->id,
            'show_on_navbar' => $request['navbar'],
            'name' => $request['name']
        ]);
        return redirect()->to(url('/client/categories'));

    }
}
