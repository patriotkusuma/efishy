<?php

namespace App\Console\Commands;

use App\Models\Messages;
use App\Models\Tools;
use Illuminate\Console\Command;
use PhpMqtt\Client\Facades\MQTT;
use Symfony\Component\Process\Process;

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
    protected $description = 'Websockets serve for mqtt ';
    protected $mqtt;

    public function __construct()
    {
        parent::__construct();
        $this->mqtt = MQTT::connection('local');
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        try{


        $this->mqtt->subscribe('#',function(String $topic, String $message){
            $messageTxt = json_decode($message);
            $tool = Tools::where('topic', $topic)->first();
            if($tool!= null){
                $msg = new Messages();
                $msg->tool_id = $tool->id;
                $msg->topic = $topic;
                $msg->messages = $messageTxt->msg;
                $msg->save();
                echo("\n Messages saved database");
            }else{
                echo("\n topic not found");
            }
            echo($message);
        },2);
        $this->mqtt->loop(true);
        $this->mqtt->disconnect();
        /*$process = new Process(['pkill', '-f', 'mqtt-demo-process-node']);
        $process->start();

        foreach ($process as $type => $data) {
            if ($process::OUT === $type) {
                echo "\nRead from stdout: ".$data;
            } else {
                echo "\nRead from stderr: ".$data;
            }
        }*/
        }catch(\Exception $ex){
            dd($ex);
        }

    }
}
