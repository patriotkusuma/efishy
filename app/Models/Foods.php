<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foods extends Model
{
    use HasFactory;

    protected function foodIn(){
        return $this->hasMany(FoodIn::class,'food_id','id');
    }

    protected function foodOut(){
        return $this->hasMany(FoodOut::class,'food_id','id');
    }
}
