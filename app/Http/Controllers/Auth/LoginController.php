<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use Inertia\Inertia;

class LoginController extends Controller
{

    public function show()
    {
        $products = Product::all();
        return Inertia::render('Auth/Login', [
            'type' => 'login',
        ]);
    }

    public function register(Request $request)
    {
        if ($request->isMethod('post')) {
            $request->validate([
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required|confirmed',
            ]);
            $u = $request->only('name', 'email', 'password');
            $u['password'] = \Hash::make($u['password']);
            $u['role'] = $request['is_supplier'] ? "client" : "user";
            $user = User::create($u);
            \Auth::login($user);
            if($user->role == "user")
                return redirect()->to('/');
            else
                return redirect()->to('/home');
        }
        return Inertia::render('Auth/Register', [
            'type' => 'register',
        ]);
    }

    public function loginAsClient($id){
        $u = User::find($id);
        session(['loginAs' => $u]);
        return redirect()->to(url('/home'));
    }

    public function logoutAsClient(){
        session()->forget('loginAs');
        return redirect()->to(url('/admin/clients'));
    }

    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            if(auth()->user()->role == "user"){
                return redirect()->intended(url('/'));
            }

            return redirect()->intended(route('dashboard'));
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function logout(){
        Auth::logout();
        return redirect('/');
    }
}
