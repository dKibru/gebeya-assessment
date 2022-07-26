<?php


namespace App\Traits;


use Illuminate\Database\Eloquent\Casts\Attribute;

trait BeatutifulDates
{

    protected function fdates(): Attribute
    {
        return Attribute::make(
            get: function ($value, $attributes){
        return [
            'created_at'=> $this->created_at->format('d/m/Y'),
            'updated_at'=> $this->updated_at->format('d/m/Y'),
        ];
    }
        );
    }
}
