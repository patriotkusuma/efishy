<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
 * Front end Controller
 * */

use App\Http\Controllers\Frontend\SettingController;
use App\Http\Controllers\Frontend\ToolsController;
use App\Http\Controllers\Frontend\MessagesController;
use App\Http\Controllers\Frontend\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('landing');

})->name('home');

Route::get('/dashboard',[DashboardController::class,'index'])->middleware(['auth', 'verified'])->name('dashboard');

/*Clear Cache*/
Route::get('/clear-cache',function(){
    try{
        $clear = \Illuminate\Support\Facades\Artisan::call('optimize:clear');
        dd($clear);
    }catch(\Exception $ex){
        dd($ex);
    }
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::name('setting.')->prefix('setting')->group(function () {
        Route::get('/', [SettingController::class, 'index'])->name('list-setting');
    });

    Route::name('tools.')->prefix('tools')->group(function () {
        Route::get('/', [ToolsController::class, 'index'])->name('list');
    });

    Route::name('message.')->prefix('message')->group(function(){
        Route::get('/',[MessagesController::class,'index'])->name('list');
    });

    Route::name('food.')->prefix('food')->group(function(){
        Route::get('/',[\App\Http\Controllers\Frontend\FoodController::class,'index'])->name('list');
        Route::match(['get','post'],'/add',[\App\Http\Controllers\Frontend\FoodController::class,'create'])->name('add');
        Route::match(['get','post'],'/{id}/edit',[\App\Http\Controllers\Frontend\FoodController::class,'edit'])->name('edit');

        Route::resource('in',\App\Http\Controllers\Frontend\FoodInController::class);
        Route::resource('out',\App\Http\Controllers\Frontend\FoodOutController::class);
//        Route::name('in.')->prefix('food-in')->group(function(){
//
////            Route::get('/',[\App\Http\Controllers\Frontend\FoodInController::class,'index'])->name('list');
////            Route::match(['get','post'],'/add',[\App\Http\Controllers\Frontend\FoodInController::class,'create'])->name('add');
////            Route::match(['get','post'],'/{id}/edit',[\App\Http\Controllers\Frontend\FoodInController::class,'edit'])->name('edit');
//        });
//        Route::name('out.')->prefix('food-out')->group(function(){
//            Route::get('/',[\App\Http\Controllers\Frontend\FoodOutController::class,'index'])->name('list');
//            Route::match(['get','post'],'/add',[\App\Http\Controllers\Frontend\FoodOutController::class,'create'])->name('add');
//            Route::match(['get','post'],'/{id}/edit',[\App\Http\Controllers\Frontend\FoodOutController::class,'edit'])->name('edit');
//        });
    });


});

require __DIR__ . '/auth.php';
