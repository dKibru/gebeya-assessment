<?php


namespace App\Http\Controllers\Client;



use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController
{
    public function index(){
        $client = currentClient();
        $clients = \App\Models\Product::where('client_id', $client->id)->orderByDesc('id')->paginate();
        return Inertia::render('Client/Product', [
            'menu' => currentBackMenu($client),
//            'products' => $products,
            'products' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

    public function create()
    {
        $client = currentClient();

        $categories = \App\Models\Category::where('client_id', $client->id)->get();
        return Inertia::render('Client/ProductCreate', [
            'menu' => currentBackMenu($client),
            'categories' => $categories->map(function($c){
                return [
                    'value' => $c->id, 'name' => $c->name
                ];
            })
//            'products' => $products,
//            'products' => $clients,
//            'menu' => currentMenu($client->id),
//            'breadcrumb' => $breadcrumb
        ]);
    }

    public function store(Request $request)
    {
        $client = currentClient();
        $request->validate([
            'pic' => 'required',
            'name' => 'required',
            'price' => 'required',
            'qtty' => 'required',
            'categories' => 'required'
        ]);

        $img = $request->file('pic')->storePublicly('products');
        \DB::transaction(function() use($request, $img, $client){
            $p = Product::create([
                'name' => $request['name'],
                'price' => $request['price'] * 100 , 'qtty' => $request['qtty'] ,
                'img' => route('media',['path' => $img]),
                'client_id' => $client->id,
            ]);
            foreach ($request['categories'] as $c){
                ProductCategory::create([
                    'product_id' => $p->id,
                    'category_id' => $c,
                    'client_id' => $client->id
                ]);
            }
        });

//        if($request['category_id']){
//            $p->category_id = $request['category_id'];
//            $p->save();
//        }
        return redirect()->to(url('/client/products'));
    }
}
