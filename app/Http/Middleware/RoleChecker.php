<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RoleChecker
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $role, $role2=null)
    {
        $u = auth()->user();
        if($role == "client"  )
            $u = currentClient();
        if(!$role2 && $u->role != $role)
            abort(403);

        if($role2 && $u->role != $role && $u->role != $role2)
            abort(403);
        return $next($request);
    }
}
