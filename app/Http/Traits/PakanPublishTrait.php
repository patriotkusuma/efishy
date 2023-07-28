<?php

namespace App\Http\Traits;
use PhpMqtt\Client\Facades\MQTT;

trait PakanPublishTrait{
    public function sendPakanKeluar($jumlah_keluar=null){
        try{
            $mqtt = MQTT::connection('local');
            $mqtt->publish('testtopic/pakanmanual', $jumlah_keluar);
            MQTT::disconnect();
        }catch(\Exception $ex){
            dd($ex);
        }
    }
}
