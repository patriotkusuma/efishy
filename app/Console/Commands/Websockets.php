<?php

namespace App\Console\Commands;

use App\Models\Suhu;
use App\Models\Ph;
use App\Models\TelegramUser;
use App\Models\TempatPakan;
use Illuminate\Console\Command;
use PhpMqtt\Client\Facades\MQTT;
use PhpParser\Node\Scalar\String_;
use Telegram\Bot\Laravel\Facades\Telegram;

class Websockets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mqtt:listen';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Websocket callback for mqtt';
    protected $mqtt;

    public function __construct(){
        parent::__construct();
        $this->mqtt = MQTT::connection('local');
    }

    public function saveToDatabase($message){
        try{
            /* Suhu */
            $suhu = new Suhu();
            $suhu->status_suhu = $message->valuesSuhu;
            $suhu->save();

            /* Tempat Pakan */
            $sisaPakan = new TempatPakan();
            $sisaPakan->tinggi_pakan = $message->valueSisaPakan;
            if($sisaPakan->tinggi_pakan > 20){
                $sisaPakan->keterangan = "Masih Banyak";
            }else{
                $sisaPakan->keterangan = "Akan habis";
            }
            $sisaPakan->save();

            /* Ph */
            $ph = new Ph();
            $ph->status_ph = $message->valuePh;
            $ph = $ph->save();
        }catch (\Exception $ex){
            echo ("Save error ". $ex);
        }
    }

    public function notificationToTelegram($message){
        $teleUsers = TelegramUser::all();

        if($message->valuesSuhu > 30){
            $text = "⚠️ <b>Warning</b> ⚠️ \n".
                " Suhu terlalu tinggi : <b>"
                . number_format($message->valuesSuhu,2,',','.') ."</b> C";
            foreach ($teleUsers as $teleUser){
                Telegram::sendMessage([
                    'chat_id' => $teleUser->Chat_ID,
                    'text' => $text,
                    'parse_mode' => 'HTML',
                ]);
            }
        }
        if($message->valuesSuhu < 26){
            $text = "⚠️ <b>Warning</b> ⚠️ \n".
                " Suhu terlalu rendah : <b>"
                . number_format($message->valuesSuhu,2,',','.') ."</b> C";
            foreach ($teleUsers as $teleUser){
                Telegram::sendMessage([
                    'chat_id' => $teleUser->Chat_ID,
                    'text' => $text,
                    'parse_mode' => 'HTML',
                ]);
            }
        }
        if ($message->valuesSisaPakan < 20){
            echo $message->valuesSisaPakan . "\n";
            $text = "⚠️ <b>Warning</b> ⚠️ \n".
                " Pakan akan habis,  \n ".
                "tersisa ".
                "<b>"
                . number_format($message->valuesSisaPakan,2,',','.') ."</b> C";

            foreach ($teleUsers as $teleUser){
                Telegram::sendMessage([
                    'chat_id' => $teleUser->Chat_ID,
                    'text' => $text,
                    'parse_mode' => 'HTML',
                ]);
            }
        }
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try{
            $this->mqtt->subscribe('testing',function(String $topic, String $message){
                echo $topic. " Subscribed \n";
                $messageTxt = json_decode($message);
                $this->saveToDatabase($messageTxt);
            },2);

            $this->mqtt->subscribe('danger', function (String $topic, String $message){
                echo $topic. " Subscribed \n";
                $messageTxt = json_decode($message);
                $this->saveToDatabase($messageTxt);
                $this->notificationToTelegram($messageTxt);
            });

            $this->mqtt->subscribe('servoTest', function (String $topic, String $message){
                echo $topic . $message . "\n";
            });
            $this->mqtt->loop(true);
            $this->mqtt->disconect();
        }catch(\Exception $ex){
            dd($ex);
        }
    }
}
