<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use DB;

class CheckoutController extends Controller
{
    public function index()
    {
        return Inertia::render('Checkout', [
            'menu' => [],
        ]);
    }

    public function store(Request $request)
    {

        $request->validate([
           'first_name' => 'required',
            'term' => 'accepted',
            'email' => 'required',
            'shipping' => 'required',
            'address' => 'required'
        ]);

        DB::transaction(function () use($request){
            $cart = session('cart');
            $order_details = [];
            $total_price = 0;
            foreach ($cart as $c){
                $product = Product::find($c['product']);
                $current_total_price = $product->price*$c['qtty'];
                $total_price += $current_total_price;
                $order_details[] = [
                    'product_id' => $c['product'], 'qtty' => $c['qtty'], 'single_price' => $product->price, 'total_price' => $current_total_price
                ];
            }

            $order = Order::create([
                'total_price' => $total_price, 'user_id' => auth()->user()->id ?? null,
                'first_name' => $request['first_name'], 'last_name' => $request['last_name'],
                'phone' => $request['phone'], 'email' => $request['email'], 'shipping' => $request['shipping'], 'address' => $request['address'],
                'card' => $request['card'] ?? null
            ]);

            foreach ($order_details as $k => $c){
                $c['order_id'] = $order->id;
//                dd($c);
//                $order_details[$k] = $c;
//                dd($order_details);
                OrderDetail::create($c);
            }
            session(['cart' => []]);
        });


        return back()->with('message','Thank you for the purchase. You will receive your item soon');

    }
}
