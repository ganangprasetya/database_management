<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Database extends Model
{
    protected $table = '_databases';
    protected $fillable = [
        'name','host','port','username','password','note'
    ];
}
