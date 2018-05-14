<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Http\Request;

use App\Broadcast;
use DB;

use Carbon\Carbon;
use Library;

class SendOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'send:orders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send orders through outgoing stack to customers';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $date_now = Carbon::now()->toDateTimeString();

        $broadcasts = Broadcast::where('is_want', false)->whereNull('broadcasted_at')->get();

        if($broadcasts->isNotEmpty())
        {
            $bar = $this->output->createProgressBar(count($broadcasts));

            $arr_date = array();
            foreach($broadcasts AS $broadcast)
            {
                if($broadcast->order->isEmpty()){
                    $limit_time = 5; // in minutes
                    $message = "Mohon maaf permintaan Anda saat ini belum dapat diproses karena tidak ada jawaban dari pihak toko. Silahkan coba beberapa saat lagi";
                    $method = $message;
                }else{
                    $limit_time = 30; // in minutes
                    $message = [
                        'data' => [
                            'message' => 'Silahkan klik disini untuk melihat permintaan Anda',
                            'order_number' => $broadcast->order_number
                        ],
                        'system' => [
                            'type' => 'button'
                        ]
                    ];
                    $method = json_encode($message);
                }
                $broadcast_created = $broadcast->created_at;
                $should_broadcast = $broadcast_created->addMinutes($limit_time)->toDateTimeString();

                // jika tanggal sekarang lebih dari tanggal harus broadcast, kirim pesan ke customer
                if($date_now > $should_broadcast)
                {
                    $broadcast->broadcasted_at = $date_now;
                    $broadcast->save();

                    // insert ke outgoing stack
                    $recipient = $broadcast->customer->no_bc;
                    $sender = 'psb_1111';
                    $content = $method;

                    Library::sendMessageBot('psb_'.$recipient, $sender, $content);
                }

                $bar->advance();
            }

            $bar->finish();
        }else{
            $this->info('No orders should be broadcast.');
        }
    }
}
