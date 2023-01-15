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
});

require __DIR__ . '/auth.php';
