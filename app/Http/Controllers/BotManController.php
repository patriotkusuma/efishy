<?php

namespace App\Http\Controllers;

use BotMan\BotMan\BotMan;
use BotMan\BotMan\BotManFactory;
use BotMan\BotMan\Cache\LaravelCache;
use BotMan\BotMan\Drivers\DriverManager;
use App\Conversations\ExampleConversation;
use Illuminate\Http\Request;

class BotManController extends Controller
{
    public function handle(){
        DriverManager::loadDriver(\Botman\Drivers\Telegram\TelegramDriver::class);

        $config = [
            "telegram"  =>[
                "token" => env('TELEGRAM_BOT_TOKEN')
            ]
        ];

        $botman = BotManFactory::create($config, new LaravelCache());
        $botman->hears('/start|start|mulai', function(BotMan $bot){
            $user = $bot->getUser();
            $bot->reply("Assalamu'alaikum " . $user->getFirstName() . ", selamat datang di Efishy v1 bot");
//            $bot->startConversation(new ExampleConversation());
        })->stopsConversation();

        $botman->listen();
    }
}
