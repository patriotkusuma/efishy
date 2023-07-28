<?php

namespace App\Http\Controllers;

use App\Models\AturPakan;
use App\Models\TelegramUser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Telegram\Bot\Laravel\Facades\Telegram;
use Telegram\Bot\Api;

class BotTelegramController extends Controller
{
    protected $telegram;

    public function __construct(Api $telegram)
    {
        $this->telegram= $telegram;
    }



    public function setWebhook(){
        $response = Telegram::setWebhook(['url' => env("TELEGRAM_WEBHOOK_URL")]);
//        $response=$this->telegram;
        dd($response);
    }

    public function commandHandleWebhook(){
        $updates = Telegram::commandsHandler(true);
//        dd($updates);
        $chatId = $updates->getChat()->get("id");
        $username = $updates->getChat()->get('username');

        if(strtolower($updates->getMessage()->get('text'))=="hello"){
            Telegram::sendMessage([
                'chat_id' =>env('TELEGRAM_ID'),
    //            'chat_id' =>$chatId,
                'text' => 'Hello World' . $username,
            ]);
        }

    }

    public function updatedActivity(){
//        Telegram::deleteWebhook();
//        $activity = Telegram::getUpdates();
//        $activity = Telegram::getWebhookInfo();

//        $jadwals  = AturPakan::all();
//
//        $text = "Informasi Pakan Efishy v1 \n";
//        foreach ($jadwals as $key => $jadwal){
//            $text .= $key+1 . ". " . Carbon::create($jadwal->set_waktu)->toTimeString() . " || " .$jadwal->jumlah . " gram \n" ;
//        }
        $teleUser = TelegramUser::where('Chat_ID','=','242150774')->delete();

        dd($teleUser);
    }
}
