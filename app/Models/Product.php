<?php

namespace App\Models;

use App\Traits\BeatutifulDates;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Str;

class Product extends Model
{
    use HasFactory, BeatutifulDates;

    protected $fillable = [
        'name', 'slug', 'price',
        'qtty', 'img', 'client_id', 'category_id'
    ];

    protected function url(): Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes){
                $url = route('product.show2',['client_id' => $this->client->slug, 'product_id' => $this->slug ]);
                if($attributes['category_id'])
                    $url = route('product.show',['client_id' => $this->client->slug, 'category_id' => $this->category->slug , 'product_id' => $this->slug ]);
                return $url;
            }
        );
    }

    protected function urls(): Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes){
                $urls = [];
                foreach ($this->categories as $c){
                    $urls[] = route('product.show',['client_id' => $this->client->slug, 'category_id' => $c->slug , 'product_id' => $this->slug ]);
                }
                if(sizeof($urls) == 0){
                    $urls[] = route('product.show2',['client_id' => $this->client->slug, 'product_id' => $this->slug ]);
                }

                return $urls;
            }
        );
    }

    protected $appends = ['url', 'urls', 'fdates'];

    public function category(){
        return $this->belongsTo(Category::class,  'category_id');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_category');
    }

    public function client(){
        return $this->belongsTo(User::class, 'client_id');
    }

    public function orders()
    {
        return $this->hasMany(OrderDetail::class, 'product_id');
    }

    public static function boot()
    {
        parent::boot();

        self::creating(function($model){
            $i = 0;
            do{
                $slug = Str::slug($model->name, '-');
                if($i) $slug.=$i;
                $i++;
            }while(Product::where(['slug' => $slug])->first());
            $model->slug = $slug;
        });
    }
}
