<?php

namespace App\Console\Commands;

use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Console\Command;

class AssignMultipleCategoriesOnOlderProducts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fix:categories';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->comment('fixing ...');

        $products = Product::all();
//        dd($products->last()->categories);

        foreach ($products as $product){
            $category_id = $product->category_id;
            $product_id = $product->id;
            $client_id = $product->client_id;
            if($category_id)
                $product->categories()->sync( [$category_id] );

        }
        return 0;
    }
}
