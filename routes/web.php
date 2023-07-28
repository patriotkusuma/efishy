<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', [\App\Http\Controllers\DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/pakan-manual', [\App\Http\Controllers\DashboardController::class, 'pakanManual'])->middleware(['auth', 'verified'])->name('pakan-manual');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::group(['prefix' => 'kualitas-air', 'as' => 'kualitas-air.'], function() {
        Route::resource('suhu', \App\Http\Controllers\SuhuController::class);
        Route::resource('sensor-ph', \App\Http\Controllers\PhController::class);
    });

    Route::group(['prefix' => 'pakan', 'as' => 'pakan.'],function () {
        Route::resource('sisa-pakan',\App\Http\Controllers\TempatPakanController::class);
        Route::resource('atur-pakan',\App\Http\Controllers\AturPakanController::class);
        Route::resource('pakan', \App\Http\Controllers\PakanController::class);
    });

    Route::resource('report', \App\Http\Controllers\ReportPakanController::class);
//    Route::resource('report', ReportCo)


});


Route::get('/test', function(){
    return Inertia::render('Efishy/Auth/Register');
});

Route::get('/test-home', function(){
    return Inertia::render('Efishy/Test/PageTest');
});

Route::match(['get','post'],'/botman',[\App\Http\Controllers\BotManController::class,'handle']);
require __DIR__.'/auth.php';
