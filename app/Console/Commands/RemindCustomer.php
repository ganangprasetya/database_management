<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Http\Request;

use App\Order;
use App\Broadcast;
use App\Customer;
use App\ReminderCustomer;
use DB;

use Carbon\Carbon;
use Library;

class RemindCustomer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'remind:customers';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Remind Customer to Shopping Again';

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
    public function handle(Request $request)
    {
        $limit_time = 14; // in days
        $date_now = Carbon::now()->toDateTimeString();
        $customers = Customer::whereHas('broadcast',function($query){
            $query->where('customer_id','!=',NULL);
        })->get();
        if($customers->isNotEmpty()){
            foreach($customers as $customer){
                //mencari order yg pernah dilakukan kalau kosong baru di remind
                $orders = Order::where('status','!=', NULL)->whereHas('broadcast', function($query) use($customer){
                    $query->where([
                        ['broadcasted_at','!=',NULL],
                        ['customer_id',$customer->id]
                    ]);
                })->whereHas('shipping_department',function($query){
                    $query->where('finished_at','!=', NULL);
                },'<',1)->get();
                $customer->order = $orders;
                //kondisi jika semua order sudah sukses
                if($customer->order->isEmpty()){
                    $last_updated = $customer->broadcast->last()->updated_at;
                    $last_transaction = $customer->broadcast->last()->updated_at;
                    $age = Carbon::parse($customer->birth_date)->age;
                    if($customer->gender == "Male"){
                        if($age > 25){
                            $call = "Bapak ";
                        }else{
                            $call = "Kak ";
                        }
                    }else{
                        if($age > 25){
                            $call = "Ibu ";
                        }else{
                            $call = "Kak ";
                        }
                    }
                    $content = 'Halo '.$call.$customer->name.' sudah lama tidak bertransaksi sejak tanggal '.$last_transaction->formatLocalized('%e %h %Y') .'. Ayo belanja lagi';
                    $remind_date = $last_updated->addDays($limit_time)->toDateTimeString();
                    if($date_now > $remind_date){
                        if($customer->reminder != NULL){
                            $this->info('There is no customer who needs to be reminded again.');
                        }else{ 
                            $reminder_customer = ReminderCustomer::create([
                                'customer_id' => $customer->id,
                                'status' => 1
                            ]);
                            $recipient = $customer->no_bc;
                            $sender = 'psb_1111';
                            if(env('APP_ENV') == 'local'){
                                Library::sendMessage($recipient, $sender, $content);
                            }else{
                                Library::sendMessageBot('psh_'.$recipient, $sender, $content);
                            }
                            $this->info('Success to Reminded');
                        }
                    }else{
                        $this->info('There is no customer who needs to be reminded again.');
                    }
                }
            }
        }
    }
}
