<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Models\Settings;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index(Request $request){
        return view('frontend.setting');
    }
}
