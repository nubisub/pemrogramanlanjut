<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use App\Models\Groups;

class Group extends Seeder
{
    public function run()
    {
        $data = [
	[
		'name' => 'member',
	],
	[
		'name' => 'operator',
	],
	[
		'name' => 'admin',
	],
];

$model = new Groups();
$model->insertBatch($data);
    }
}
