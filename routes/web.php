<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

test('returns a successful response', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/gallery', function () {
    return Inertia::render('Gallery');
})->name('gallery');

Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->name('faq');

Route::get('/profile', function () {
    return Inertia::render('Profile');
})->name('profile');

Route::prefix('services')->group(function () {

    Route::get('/pbbp2', fn() =>
        Inertia::render('Services/PBBP2')
    );

    Route::get('/bphtb', fn() =>
        Inertia::render('Services/BPHTB')
    );

    Route::get('/makanan', fn() =>
        Inertia::render('Services/Makanan')
    );

    Route::get('/perhotelan', fn() =>
        Inertia::render('Services/Perhotelan')
    );

    Route::get('/parkir', fn() =>
        Inertia::render('Services/Parkir')
    );

    Route::get('/hiburan', fn() =>
        Inertia::render('Services/Hiburan')
    );

    Route::get('/reklame', fn() =>
        Inertia::render('Services/Reklame')
    );

    Route::get('/airtanah', fn() =>
        Inertia::render('Services/AirTanah')
    );

    Route::get('/bbnkb', fn() =>
        Inertia::render('Services/BBNKB')
    );

});