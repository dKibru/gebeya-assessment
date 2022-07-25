<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        return Inertia::render('Cart', [
            'menu' => []
//            'menu' => currentBackMenu(auth()->user()),
//            'products' => $products,
//            'users' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

    public function remove(Request $request)
    {
        $item = $request['item'];
        $cart = session('cart');
        $c = collect($cart)->filter(function($cc) use($item){
            if($item == $cc['product'])
                return false;
            return true;
        });
        session(['cart' => $c->toArray()]);
        if($c->count())
            return redirect()->back();
        return redirect()->to(url('/'));
    }

    public function store(Request $request)
    {
        $cart = $request['cart'];
        if($request['qtty']){
            $p = Product::find($request['product']);
            $newProduct = [ 'img' => $p->img, 'name' => $p->name, 'price' => $p->price, 'qtty' => $request['qtty'], 'product' => $p->id ];
            $found = false;
            foreach ($cart as $k => $c){
                if($newProduct['product'] == ($c['product'] ?? null)){
                    $found = $k;
                }
            }
//            dd($found, $newProduct);
            if($found === false){
                $cart[] = $newProduct;
            }else{
                $cart[$found] = $newProduct;
            }

        }
        session(['cart' => $cart]);
        return redirect()->back();
    }


}
