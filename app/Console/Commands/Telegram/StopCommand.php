<?php

namespace App\Console\Commands\Telegram;

use App\Models\TelegramUser;
use Telegram\Bot\Commands\Command;
use Telegram\Bot\Laravel\Facades\Telegram;

class StopCommand extends Command
{
    protected string $name="stop";
    protected string $description = "Untuk menghentikan notifikasi bot";
    public function handle()
    {
        $chatId = $this->getUpdate()->getMessage()->from->id;
        $messageId = $this->getUpdate()->getMessage()->message_id;

//        Telegram::stopPoll([
//            'chat_id'   => $chatId,
//            'message_id'    =>$messageId
//        ]);
        $this->replyWithMessage([
            'text' => $chatId .' '.  $messageId
        ]);
//        Telegram::deleteMessage($chatId,$messageId);
//
//        $teleUser = TelegramUser::where('Chat_ID', 'LIKE'. '%'.$chatId.'%')->first();
//        TelegramUser::find('id',$teleUser->id)->delete();
    }
}
