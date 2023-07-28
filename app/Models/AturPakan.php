<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AturPakan extends Model
{
    use HasFactory;
    protected $fillable = ['set_waktu','jumlah','status'];

}
