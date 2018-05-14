<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AlterPortDatabasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('_databases', function (Blueprint $table) {
            $table->string('host')->nullable()->after('name');
            $table->string('port')->nullable()->after('host');
            $table->string('username')->nullable()->after('port');
            $table->string('password')->nullable()->after('username');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('_databases', function (Blueprint $table) {
            $table->dropColumn('host');
            $table->dropColumn('port');
            $table->dropColumn('username');
            $table->dropColumn('password');
        });
    }
}
