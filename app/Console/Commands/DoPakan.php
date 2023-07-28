<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\AturPakan;
use Carbon\Carbon;

class DoPakan extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:do-pakan';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';


    /**
     * Execute the console command.
     */
    public function handle()
    {
        $aturPakan = AturPakan::where('set_waktu',Carbon::now()->toTimeString())->get();
        foreach($aturPakan as $atur){
            $atur->status = 'done';
            $atur->save();
        }

    }
}
