<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TemporaryDatabase extends Model
{
    protected $table = 'temporary_databases';
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
