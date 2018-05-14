<?php

namespace App\Helpers;

use Carbon\Carbon;
use DB;

class Library{

    public static function cekUserid($userid)
    {
        if(substr($userid, 0, 1) == "0"){
            $kontak_person = "62".substr($userid, 1);
        }else{
            $kontak_person = $userid;
        }
        return $kontak_person;
    }

    public static function compareOption($val1, $val2)
    {
        if($val1 == $val2)
        {
            return ' selected';
        }

        return false;
    }

    public static function generateTransactionId()
    {
        $date = Carbon::now();

        $trx_id = strtoupper('PS'.$date->format('YmdHis').str_random(3));

        return $trx_id;
    }

    public static function generateMessageId()
    {
        $date = Carbon::now();

        $msg_id = strtoupper('MSG'.$date->format('YmdHis').str_random(3));

        return $msg_id;
    }

    public static function sendMessage($recipient, $sender, $content, $message_id='')
    {
        if(empty($message_id)) $message_id = self::generateMessageId();

        $outgoing_stack = DB::connection('pgsql')->table('outgoing_stack')->insert([
            'recipient' => $recipient,
            'sender' => $sender,
            'content' => $content,
            'message_id' => $message_id
        ]);

        return true;
    }

    public static function sendMessageBot($recipient, $sender, $content, $message_id='')
    {
        if(empty($message_id)) $message_id = self::generateMessageId();

        $outgoing_bot = DB::connection('pgsql')->table('outgoing_bot')->insert([
            'recipient' => $recipient,
            'sender' => $sender,
            'content' => $content,
            'message_id' => $message_id,
            'date_created' => now()
        ]);

        return true;
    }

    public static function fetchUrl($url)
    {
        $handle = curl_init();

        curl_setopt($handle, CURLOPT_URL, $url);
        curl_setopt($handle, CURLOPT_POST, false);
        curl_setopt($handle, CURLOPT_BINARYTRANSFER, false);
        curl_setopt($handle, CURLOPT_HEADER, true);
        curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, 10);

        $response = curl_exec($handle);
        $hlength  = curl_getinfo($handle, CURLINFO_HEADER_SIZE);
        $httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
        $body     = substr($response, $hlength);

        return $body;
    }

    public static function onlyNumber($username)
    {
        $only_number = preg_replace("/[^0-9]/", "", $username);

        return $only_number;

    }

    public static function saySomething($date)
    {
        // $now = Carbon::createFromTime(0, 0, 0);
        $hour_now = $date->hour;
        switch(true)
        {
            case ($hour_now >= 0) AND ($hour_now < 10):
                $say_hello = 'Pagi';
                break;
            case ($hour_now >= 10) AND ($hour_now < 15):
                $say_hello = 'Siang';
                break;
            case ($hour_now >= 15) AND ($hour_now < 20):
                $say_hello = 'Sore';
                break;
            case ($hour_now >= 20) AND ($hour_now < 24):
                $say_hello = 'Malam';
                break;
        }

        return $say_hello;
    }

    public static function formatPrice($price)
    {
        $format = number_format($price, 2, ".", ",");

        return "Rp ".$format;
    }

    public static function DecodeValue($data)
    {
        $format = json_decode($data, true);
        $data_array = [];
        foreach($format as $key => $value){
            array_push($data_array,$value);
        }
        $data_id = implode('', $data_array);
        $data_name = preg_replace('/\d+/u', '', $data_id);
        return $data_name;
    }

    public static function execPostRequest($url,$post_array){

        if(empty($url)){ return false;}

        $fields_string = http_build_query($post_array);

        //open connection
        $ch = curl_init();

        //set the url, number of POST vars, POST data
        curl_setopt($ch,CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_POST,1);
        curl_setopt($ch,CURLOPT_POSTFIELDS,$fields_string);

        curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);

        //execute post
        $result = curl_exec($ch);

        //close connection
        curl_close($ch);

        return $result;
    }

}

