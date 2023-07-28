<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WaktuPakan extends Model
{
    use HasFactory;

    public function aturPakan(){
        return $this->hasOne(AturPakan::class,'id',"id_atur_pakan");
    }
}
