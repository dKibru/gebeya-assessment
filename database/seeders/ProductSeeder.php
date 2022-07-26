<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use File;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $this->command->getOutput()->writeln("<info>...</info>");
        Product::truncate();
//        $this->command->getOutput()->writeln("<info>Users data cleared</info>");
        $json = File::get("database/data/products.json");
        $records = json_decode($json);

        foreach ($records as $key => $value) {
            $p = Product::create([
                 "name" => $value->name,  "price" => $value->price * 100, "qtty" => $value->qtty , "img" => $value->img, "client_id" => $value->client_id
            ]);

            $p->categories()->sync([$value->category_id]);

        }
    }
}
