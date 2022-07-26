<?php

namespace App\Models;

use App\Traits\BeatutifulDates;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetail extends Model
{
    use HasFactory, BeatutifulDates;

    protected $fillable = [
        'order_id', 'product_id', 'qtty', 'single_price', 'total_price'
    ];

    protected $appends = ['fdates'];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

}
