<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function __invoke(){
        $user = currentClient();
        $users = 0;
        $orders = 0;
        $sales = 0;
        $stores = 0;
        if($user->role == 'admin'){
            $users = User::count();
            $orders = Order::count();
            $stores = User::where('role', 'client')->count();
            $sales = Order::sum('total_price');
            $sales = $sales/100;
        }else{
            $users = User::count();
            $stores = 1;
            $ps = $user->products->pluck('id');
//            $sales = Order::product
        }

        return Inertia::render('Admin/Dashboard', [
            'menu' => currentBackMenu(auth()->user()),
            'stats' => compact('users', 'orders', 'sales', 'stores')
//            'products' => $products,
//            'client' => $client,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

}
