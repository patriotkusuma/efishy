<?php

namespace App\Http\Traits;
use PhpMqtt\Client\Facades\MQTT;

trait ReportTrait{
    public function sendPakanKeluar($jumlah_keluar=null){
        try{
            $mqtt = MQTT::connection('local');
            $jumlah_keluar = json_encode($jumlah_keluar);
            $mqtt->publish('testtopic/pakanmanual', $jumlah_keluar);
            MQTT::disconnect();
        }catch(\Exception $ex){
            dd($ex);
        }
    }
}
