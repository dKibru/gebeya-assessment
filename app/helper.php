<?php



function currentMenu($company_id = null){
    $category = \App\Models\Category::where(['show_on_navbar' => true, 'client_id' => $company_id])->get();
    return $category;
}

function currentClient(){
	$loginAs = session('loginAs');
	return $loginAs ?? auth()->user();
}


function currentBackMenu($user) {
    $role = session('loginAs') ? 'client' : $user->role;
    if($role == "admin"){
        return [
            [ 'label' => 'Dashboard', 'url' => url('/home'), 'icon' => 'fa-user' ],
            [ 'label' => 'Products', 'url' => url('/admin/products') , 'icon' => 'fa-user'],
//            [ 'label' => 'Categories', 'url' => url('/admin/categories') , 'icon' => 'fa-user'],
//            [ 'label' => 'Orders', 'url' => url('/admin/orders') , 'icon' => 'fa-user'],
            [ 'label' => 'Clients ( stores )', 'url' => url('/admin/clients') , 'icon' => 'fa-user'],
            [ 'label' => 'Users', 'url' => url('/admin/users') , 'icon' => 'fa-user'],
        ];
    }elseif ($role == "client"){
        return [
            [ 'label' => 'Dashboard', 'url' => url('/home') , 'icon' => 'fa-user'],
            [ 'label' => 'Products', 'url' => url('/client/products') , 'icon' => 'fa-user'],
            [ 'label' => 'Categories', 'url' => url('/client/categories') , 'icon' => 'fa-user'],
            [ 'label' => 'Orders', 'url' => url('/client/orders') , 'icon' => 'fa-user'],
        ];
    }
    return [];
}
