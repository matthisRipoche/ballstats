<?php

use App\Models\User;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/users', function () {
    return User::all();
});


Route::post('/create-user', [UserController::class, 'store']);
