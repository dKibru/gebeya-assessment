<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductCategory;

class ProductController extends Controller
{
    public function index(){
        $user = currentClient();
        $categories = Category::where(['client_id' => $user->id])->get();
        $products = Product::where(['client_id' => $user->id])->orderByDesc('id')->with('category')->paginate();
        return view('client.product', compact('categories', 'products'));
    }


    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'qtty' => 'required',
            'img' => 'required',
//             'category_id' => 's',
        ]);

        $img = $request->file('img')->storePublicly('products');
        $p = Product::create([
            'name' => $request['name'],
            'price' => $request['price'] * 100 , 'qtty' => $request['qtty'] ,
            'img' => $img,
            'client_id' => auth()->user()->id,
        ]);
        if($request['category_id']){
            $p->category_id = $request['category_id'];
            $p->save();
        }

        return redirect()->back();
    }
}
