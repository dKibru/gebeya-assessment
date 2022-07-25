<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_category', function (Blueprint $table) {
            $table->id();


            $table->unsignedBigInteger('product_id');
            $table->foreign('product_id')->references('id')->onDelete('cascade')->on('products');


            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->onDelete('cascade')->on('categories');




            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_category');
    }
};
