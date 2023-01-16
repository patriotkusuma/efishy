<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodIn extends Model
{
    use HasFactory;

    protected function food(){
        return $this->hasOne(Foods::class,'id','food_id');
    }
}
