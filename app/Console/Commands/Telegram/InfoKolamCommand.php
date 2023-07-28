<?php

namespace App\Console\Commands\Telegram;

use App\Models\Suhu;
use App\Models\TempatPakan;
use Telegram\Bot\Commands\Command;

class InfoKolamCommand extends Command
{


    protected string $name = "info_kolam";
    protected string $description = 'Info Pakan dan Kualitas Air';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $suhu = Suhu::latest()->first();
        $sisaPakan = TempatPakan::latest()->first();
//
        $text = " Informasi Kolam Ikan Efishy v1 \n\n".
                "❄ Suhu  = <b>" . $suhu->status_suhu . "</b> C" . "\n" .
                "💧  Ph  = <b>7" . "</b>\n" .
                "🍜 Sisa Pakan = <b>".$sisaPakan->tinggi_pakan."</b> %" ;
        $this->replyWithMessage([
            'text'  => $text,
            'parse_mode' => 'HTML',
        ]);
    }
}
