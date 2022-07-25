<?php

namespace App\Http\Controllers\Ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index(){
        $user = currentClient();
        $categories = Category::where(['client_id' => $user->id])->get();
        return view('client.category', compact('categories'));
    }


    public function store(Request $request){
        $request->validate([
            'name' => 'required',
            'parent_id' => 'integer',
            // 'navbar' => ''
        ]);
        Category::create([
            'name' => $request['name'], 'parent_id' => $request['parent_id'] ? $request['parent_id'] : null,
            'show_on_navbar' => $request['navbar'] ?? false, 'client_id' => auth()->user()->id
        ]);

        return redirect()->back();
    }

}
