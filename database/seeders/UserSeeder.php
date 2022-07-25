<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use File;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->command->getOutput()->writeln("<info>...</info>");
        User::truncate();
        $this->command->getOutput()->writeln("<info>Users data cleared</info>");
        $json = File::get("database/data/users.json");
        $records = json_decode($json);

        foreach ($records as $key => $value) {
            User::create([
                "name" => $value->name,
                "email" => $value->email,
                "password" => \Hash::make('password'),
                "role" => $value->role
            ]);
        }

    }
}
