<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'slug', 'parent_id',
        'show_on_navbar', 'client_id'
    ];

    protected $casts = [
        'show_on_navbar' => 'boolean'
    ];

    public function parent(){
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function products(){
        return $this->hasMany(Product::class,  'category_id');
    }

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    protected function url(): Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes){
                    $url = route('category.show',['store' => $this->client->slug, 'category' => $attributes['slug'] ]);
                    return $url;
                }
        );
    }

    protected $appends = ['url'];

    public static function boot()
    {
        parent::boot();

        self::creating(function($model){
            $i = 0;
            do{
                $slug = Str::slug($model->name, '-');
                if($i) $slug.=$i;
                $i++;
            }while(Category::where(['slug' => $slug])->first());
            $model->slug = $slug;
        });
    }

}
