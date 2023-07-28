<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportPakan extends Model
{
    use HasFactory;

    public function pakan(){
        return $this->hasOne(Pakan::class,'id','id_pakan');
    }
}
