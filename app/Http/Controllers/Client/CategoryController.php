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
            'categories' => $clients,
        ]);
    }

    public function create()
    {
        $client = currentClient();
        $clients = \App\Models\Category::where('client_id', $client->id)->with('products')->orderByDesc('id')->paginate();
        return Inertia::render('Client/CategoryCreate', [
            'menu' => currentBackMenu($client),
            'categories' => $clients,
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
    public function edit($id)
    {
        $client = currentClient();
        $category = Category::find($id);
        $clients = \App\Models\Category::where('client_id', $client->id)->with('products')->orderByDesc('id')->paginate();
        return Inertia::render('Client/CategoryEdit', [
            'menu' => currentBackMenu($client),
            'categories' => $clients,
            'category' => $category
        ]);
    }

    public function update($id, Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        $client = currentClient();
        $category = Category::find($id);
        $category->show_on_navbar = $request['navbar'];
        $category->name = $request['name'];
        $category->save();
        return redirect()->to(url('/client/categories'));
    }
}
