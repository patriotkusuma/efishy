<?php

namespace App\Console\Commands\Telegram;

use App\Models\TelegramUser;
use Telegram\Bot\Commands\Command;

class StartCommand extends Command
{


    protected string $name = "start";
    protected string $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $fallbackChatId = $this->getUpdate()->getMessage()->from->id;
        $fallbackFirstname = $this->getUpdate()->getMessage()->from->first_name;
        $fallbackLastname = $this->getUpdate()->getMessage()->from->last_name;
        $fallbackUsername = $this->getUpdate()->getMessage()->from->username;

        $text = "<b>Assalamu'alaikum</b>\n"
            . $fallbackFirstname . " " . $fallbackLastname;
        $this->replyWithMessage([
            'text'  => $text,
            'parse_mode' => 'HTML',
        ]);

        $teleUser = TelegramUser::where('Chat_ID', 'LIKE', '%'.$fallbackChatId.'%')->first();

        if($teleUser == null){
            $teleUser = new TelegramUser();
            $teleUser->firstname = $fallbackFirstname;
            $teleUser->lastname = $fallbackLastname;
            $teleUser->username = $fallbackUsername;
            $teleUser->Chat_ID = $fallbackChatId;
            $teleUser->save();
        }
    }
}
