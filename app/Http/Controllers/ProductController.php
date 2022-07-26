<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function show($client_id, $category_id , $product_id)
    {
        $client = User::where('slug', $client_id)->first();
        $category = null;

        $product = Product::where([ 'slug' => $product_id ])->firstOrFail();
        if($category_id){
            $category = Category::where(['slug' => $category_id, 'client_id' => $client->id])->firstOrFail();
            if(!$product->categories->contains($category->id)){
                abort(404);
            }
        }

        $other = Product::where(['client_id' => $client->id])->take(3)->get();
//        return view('public.product', ['product' => $product, 'other' => $other]);
        $breadcrumb = [];
        $breadcrumb[] =  [ 'label' => Str::ucfirst($client->name)  .' Store', 'url' => $client->url ];
        if($product->category)
            $breadcrumb[] = [ 'label' => $product->category->name, 'url' => $product->category->url ];
        $breadcrumb[] = ['label' => $product->name ];


        return Inertia::render('ProductDetail', [
            'product' => $product,
            'other' => $other,
            'menu' => currentMenu($product->client_id),
            'breadcrumb' => $breadcrumb,
            'client' => $client
        ]);
    }

    public function show2($client_id,  $product_id)
    {
        return $this->show($client_id, null, $product_id);
    }
}
