<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {
        $products = Product::paginate();
        return Inertia::render('Home', [
            'products' => $products,
        ]);
    }

    public function show($id)
    {
        $u = User::where('slug', $id)->firstOrFail();
        $products = Product::where('client_id', $u->id)->paginate();
        return Inertia::render('Home', [
            'products' => $products,
            'client' => $u,
            'menu' => currentMenu($u->id)
        ]);
//        $products = Product::orderByDesc('id')->with('client', 'category');
//        if($id) $products = $products->where('client_id', $id);
//        $products = $products->take(15)->get();
//        if(request()->get('category')){
//            $cat = Category::where(['slug' => request()->get('category'), 'show_on_navbar' => true] )->first();
//            $products = $cat->products;
//        }
//        $categories = Category::where(['parent_id' => null, 'show_on_navbar' => true])->get();
//        return view('public.index', compact('products','categories','id'));
    }

    public function test()
    {

    }
}
