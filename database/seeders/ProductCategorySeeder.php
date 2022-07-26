<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use File;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $this->command->getOutput()->writeln("<info>...</info>");
        Category::truncate();
//        $this->command->getOutput()->writeln("<info>Users data cleared</info>");
        $json = File::get("database/data/categories.json");
        $records = json_decode($json);

        foreach ($records as $key => $value) {
            Category::create([
                "client_id" => $value->client_id, "name" => $value->name, "show_on_navbar" => $value->show_on_navbar
            ]);
        }
    }
}
