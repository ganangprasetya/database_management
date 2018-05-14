<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDatabase extends Model
{
    protected $table = 'users_database';
    protected $fillable = [
        'user_id',
        'database_id'
    ];
    public function database()
    {
        return $this->belongsTo('App\Database');
    }
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
