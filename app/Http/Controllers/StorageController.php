<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use Illuminate\Support\Facades\Storage;
class StorageController extends Controller
{
    public function __invoke($path)
    {
        $f = Storage::get($path);

        if (request()->get('download')) {
            return response()->download(storage_path('app/'.$path));
        }

        if ($f) {
            return response()->file(storage_path('app/'.$path));
        }
    }
}
