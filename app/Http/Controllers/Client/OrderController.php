<?php


namespace App\Http\Controllers\Client;


use App\Models\Order;
use Inertia\Inertia;

class OrderController
{
    public function index(){
        $client = currentClient();
        $os   = $client->products()->with('orders')->get()->pluck('orders')->flatten()->pluck('order_id');
        $orders = Order::whereIn('id',$os)->with('details')->orderByDesc('id')->paginate();
//        dd($os);
//        $clients = \App\Models\Order::where('client_id', $client->id)->orderByDesc('id')->paginate();
        return Inertia::render('Client/Order', [
            'menu' => currentBackMenu(auth()->user()),
            'orders' => $orders,
//            'categories' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

}
