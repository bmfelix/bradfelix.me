<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PathfinderController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function uploadImage(Request $request)
    {
        $request->validate([
            'uploadPicture' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $imageName = time().'.'.$request->uploadPicture->extension();

        $request->uploadPicture->move(public_path('images'), $imageName);
        $location = 'images/'.$imageName;

        return response()->json(['code' => 200, 'file_location' => $location]);
    }
}
