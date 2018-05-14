<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Http\Request;

use App\Order;
use App\Broadcast;
use App\ShippingService;
use App\PershopNote;
use DB;

use Carbon\Carbon;
use Library;

class ExpiredPayments extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'check:payments';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Check Payment Status from Customer';

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
        $limit_time = 60; // in minutes
        $date_now = Carbon::now()->toDateTimeString();

        $orders = Order::where([
            ['confirmed',1],
            ['proof_of_payment',NULL],
            ['qty','!=',NULL]
        ])->get();
        if($orders->isNotEmpty())
        {
            $bar = $this->output->createProgressBar(count($orders));

            $arr_date = array();
            foreach($orders AS $order)
            {
                $order_updated = $order->updated_at;
                $should_order = $order_updated->addMinutes($limit_time)->toDateTimeString();

                // jika tanggal sekarang lebih dari tanggal order terakhir kali diupdate, ganti status ke expired
                if($date_now > $should_order)
                {
                    $broadcast_id = $order->broadcast->id;

                    //ganti status di broadcasts
                    $broadcast = Broadcast::findOrFail($broadcast_id);
                    $broadcast->confirmed = NULL;
                    $broadcast->save();

                    //delete from shipping services and pershop notes
                    ShippingService::where('broadcast_id', $broadcast_id)->delete();
                    PershopNote::where('order_id', $order->id)->delete();

                    //ganti status di orders
                    $order->confirmed = 2; //cancelled
                    $order->proof_of_payment = 0; //expired
                    $order->status = 1; // kembali ke orders
                    $order->qty = NULL; //reset qty
                    $order->save();
                    $recipient = $order->broadcast->customer->no_bc;
                    $sender = 'psb_1111';
                    $content = [
                        'data' => [
                            'order_number' => $broadcast->order_number,
                            'message' => 'Pembayaran untuk pesanan dengan order number '.$broadcast->order_number.' telah melewati batas waktu pembayaran. Silahkan klik disini untuk melakukan proses pembelian dari awal',
                            'dept_store' => $order->store->dept_store->name
                        ],
                        'system' => [
                            'type' => 'expired_payment'
                        ]
                    ];
                    if(env('APP_ENV') == 'local'){
                        Library::sendMessage($recipient, $sender, json_encode($content));
                    }else{
                        Library::sendMessageBot('psh_'.$recipient, $sender, json_encode($content));
                    }
                }

                $bar->advance();
            }

            $bar->finish();
        }else{
            $this->info('No orders should be changed.');
        }
    }
}
