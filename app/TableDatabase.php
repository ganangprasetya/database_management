<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TableDatabase extends Model
{
    protected $table = 'table_databases';
    protected $fillable = [
        'name','database_id','description'
    ];
    public function database()
    {
        return $this->belongsTo('App\Database','database_id');
    }
}
