<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show($store, $category)
    {
        $client = User::where('slug', $store)->firstOrFail();
        $category = Category::where([ 'slug' => $category, 'client_id' => $client->id ])->firstOrFail();
        $products = $category->products()->paginate();

        $breadcrumb = [];
        $breadcrumb[] =  [ 'label' => Str::ucfirst($client->name)  .' Store', 'url' => $client->url ];
        $breadcrumb[] = [ 'label' => $category->name, 'url' => $category->url ];

        return Inertia::render('Category', [
            'products' => $products,
            'client' => $client,
            'menu' => currentMenu($client->id),
            'breadcrumb' => $breadcrumb,
            'category' => $category
        ]);
    }
}
