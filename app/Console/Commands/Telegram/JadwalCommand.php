<?php

namespace App\Console\Commands\Telegram;

use App\Models\AturPakan;
use App\Models\WaktuPakan;
use Carbon\Carbon;
use Telegram\Bot\Commands\Command;

class JadwalCommand extends Command
{
    protected string $name ="jadwal";
    protected string $description = "Info Jadwal Pakan Efishy v1";

    public function handle()
    {
        $jadwals  = AturPakan::all();

        $text = "ℹ️ Informasi Pakan <b> Efishy v1 </b> \n\n";
        foreach ($jadwals as $key => $jadwal){
            $text .= ($key+1) . ". ⏰ <b>" . Carbon::create($jadwal->set_waktu)->toTimeString() . "</b> || ⚖️ <b>" .$jadwal->jumlah . "</b> gram \n" ;
        }

        $this->replyWithMessage([
            'text'  => $text,
            'parse_mode'    => 'HTML',
        ]);
    }
}
