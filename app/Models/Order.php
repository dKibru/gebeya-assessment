<?php

namespace App\Models;

use App\Traits\BeatutifulDates;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory, BeatutifulDates;

    protected $fillable = [
        'status', 'total_price', 'user_id', 'first_name', 'last_name',
        'phone', 'email', 'shipping', 'address', 'card'
    ];

    protected $appends = ['fdates'];

    public function details()
    {
        return $this->hasMany(OrderDetail::class, 'order_id');
    }

}
