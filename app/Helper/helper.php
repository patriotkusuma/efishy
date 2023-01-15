<?php

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use App\Models\Settings as Setting;

if (!function_exists('appSetting')) {
    /**
     * @param $key
     * @param false $save_cache will save for 1 minute
     * @return array|int|mixed|null
     */
    function appSetting($key, $save_cache = false) {
        if (!$save_cache) {
            $setting    = Setting::where('slug',$key)->first();
            if (!$setting) {
                return null;
            }
            return $setting->value;
        } else {
            static $settings;
            if (is_null($settings)) {
                $settings   = Cache::remember('settings', 60,function () {
                    return Arr::pluck(Setting::all()->toArray(),'value','slug');
                });
            }
            return (is_array($key)) ? Arr::only($settings, $key) : $settings[$key];
        }
    }
}
