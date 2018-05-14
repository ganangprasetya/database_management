<?php

use Illuminate\Database\Seeder;

use App\User;
use App\Role;
use App\Permission;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // add users
        $user_admin = User::create([
            'email' => 'admin@gmail.com',
            'password' => bcrypt('internet'),
            'fullname' => 'Anele Sultoni',
        ]);
        $user_biasa_1 = User::create([
            'email' => 'user1@gmail.com',
            'password' => bcrypt('internet'),
            'fullname' => 'Rohmat Hidayat'
        ]);
        $user_biasa_2 = User::create([
            'email' => 'user2@gmail.com',
            'password' => bcrypt('internet'),
            'fullname' => 'Hidayat'
        ]);

        // attach role
        $user_admin->attachRole('administrator');
        $user_biasa_1->attachRole('super_user');
        $user_biasa_2->attachRole('super_user');
    }
}
