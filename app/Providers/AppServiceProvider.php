<?php

namespace App\Providers;

use App\View\Components\EmailLayout;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
//        EmailLayout::component('mail.layout',\App\View\Components\EmailLayout::class);
    }
}
