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
            'menu' => currentMenu($u->id),
            'categories' => $u->categories
        ]);
    }

    public function filter_home($id)
    {
        $request = request();
        $u = User::where('slug', $id)->firstOrFail();
        $categories = Category::where([ 'client_id' => $u->id,  'show_on_navbar' =>true ])->get();
        $products = Product::where('client_id', $u->id)->with('categories')->orderByDesc('id');

        if(isset($request['categories']) && sizeof($request['categories']) ){
            foreach ($request['categories'] as $c){
                $category_products = Category::find($c)->products->pluck('id')->values();
                dd($category_products);
                $products = $products->whereHas('categories', function($query) use($c){
                    dd($query);
                    $query->where->categories->contains($c);
                });
//                dd($products->first()->toArray(), $products->categories);
//                $products = $products->categories()->contains($c);
            }
        }
        if(isset($request['min_price']) && $request['min_price'] ){
            $products = $products->where('price', '>' , $request['min_price']*100);
        }
        if(isset($request['max_price']) && $request['max_price'] ){
            $products = $products->where('price', '<' , $request['max_price']*100);
        }

        return Inertia::render('Home', [
            'products' => $products->paginate(),
            'categories' => $categories,
            'menu' => $u ? currentMenu($u->id) : [],
            'client' => $u,
        ]);

    }
}
