<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class Logout extends BaseController
{
    public function index()
    {
        Session()->destroy();
return Redirect()->to('/');
    }
}
