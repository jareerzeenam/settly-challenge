<?php

namespace App\Http\Controllers\Auth;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }

    public function create()
    {
        $recaptchaKey = config('services.recaptcha.key');
        return Inertia::render('Auth/SignUp',[
            'recaptchaKey'=> $recaptchaKey
        ]);
    }

    public function signup(Request $request)
    {
       $validate = $request->validate([
        'name' => 'required|max: 255',
        'email' => 'required|email|confirmed|max: 255',
        'password' =>  'required|confirmed|min:6',
        // 'g-recaptcha-response' => 'required'
       ]);

       dd(123);
    }

    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return redirect()->intended();
        }
 
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }

    public function destroy()
    {
        Auth::logout();

        return redirect()->route('login');
    }
}
