<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function index()
    {

        $categories = Category::where([ 'show_on_navbar' =>true ])->get();
        $products = Product::orderByDesc('id')->paginate();
        return Inertia::render('Home', [
            'products' => $products,
            'categories' => $categories
        ]);
    }


    public function filter(Request $request)
    {
//        categories min_price max_price
        $categories = Category::where([ 'show_on_navbar' =>true ])->get();
        $products = Product::orderByDesc('id');

        if(isset($request['categories']) && sizeof($request['categories']) ){
            $products = $products->whereIn('category_id', $request['categories']);
        }
        if(isset($request['min_price']) && $request['min_price'] ){
            $products = $products->where('price', '>' , $request['min_price']*100);
        }
        if(isset($request['max_price']) && $request['max_price'] ){
            $products = $products->where('price', '<' , $request['max_price']*100);
        }

        return Inertia::render('Home', [
            'products' => $products->paginate(),
            'categories' => $categories
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

    public function filter_home($id)
    {
        $u = User::where('slug', $id)->firstOrFail();
        $categories = Category::where([ 'client_id' => $u->id,  'show_on_navbar' =>true ])->get();
        $products = Product::where('client_id', $u->id)->orderByDesc('id');

        if(isset($request['categories']) && sizeof($request['categories']) ){
            $products = $products->whereIn('category_id', $request['categories']);
        }
        if(isset($request['min_price']) && $request['min_price'] ){
            $products = $products->where('price', '>' , $request['min_price']*100);
        }
        if(isset($request['max_price']) && $request['max_price'] ){
            $products = $products->where('price', '<' , $request['max_price']*100);
        }

        return Inertia::render('Home', [
            'products' => $products->paginate(),
            'categories' => $categories
        ]);

    }
}
