<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'slug'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    protected function url(): Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes){
                if($attributes['role'] != "client")
                    return null;
                $url = route('client.home',['id' => $attributes['slug'] ]);
                return $url;
            }
        );
    }


    public function categories()
    {
        return $this->hasMany(Category::class, 'client_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class, 'client_id');
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
            }while(User::where(['slug' => $slug])->first());
            $model->slug = $slug;
        });
    }
}
