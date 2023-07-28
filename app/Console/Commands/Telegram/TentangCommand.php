<?php

namespace App\Console\Commands\Telegram;

use Telegram\Bot\Commands\Command;

class TentangCommand extends Command
{
    public string $name="tentang";
    public string $description="Info tentang Efishy v1";

    public function handle()
    {
        $text="ℹ️ Informasi Tentang <b> Efishy v1 </b> \n\n".
            "Efishy Bot merupakan bot telegram \n".
            "yang terhubung dengan website \n🌐 <b><a href='efishy.my.id'>efishy.my.id</a> </b>\n".
            "sebagai sistem notifikasi \ndari perangkat Iot Efishy.";

        $this->replyWithMessage([
           'text'   => $text,
           'parse_mode' => 'HTML',
        ]);
    }
}
