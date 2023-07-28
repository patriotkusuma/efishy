<?php

namespace App\Http\Controllers;

use App\Models\ReportPakan;
use App\Models\Suhu;
use App\Models\TempatPakan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Http\Traits\PakanPublishTrait;

class DashboardController extends Controller
{
    use PakanPublishTrait;

    public function index(Request $request){
        $suhu = Suhu::latest()->first();
        $sisaPakan = TempatPakan::latest()->first();
        $pakanTerakhir = ReportPakan::latest()->first();

        $searchRiwayatPakan = $request->query('searchReportPakan');
        $dateFromRiwayatPakan = $request->query('dateFromReportPakan');
        $dateToRiwayatPakan = $request->query('dateToReportPakan');
        $rowsPerPageRiwayatPakan = $request->query('rowsPerPageReport');

        if($dateToRiwayatPakan ==null){
            $dateToRiwayatPakan == Carbon::now()->toDateString();
        }
        if($rowsPerPageRiwayatPakan ==null){
            $rowsPerPageRiwayatPakan = 5;
        }


        $riwayatPakan = ReportPakan::query();

        $riwayatPakan = $riwayatPakan->when($searchRiwayatPakan, fn($query) =>
                    $query->orWhere('sisa', 'like', '%'. $searchRiwayatPakan . '%')
                        ->orWhere('jumlah_keluar', 'like'. '%'. $searchRiwayatPakan . '%')
                        ->orWhere('keterangan', 'like' . '%' . $searchRiwayatPakan . '%'));
        if($dateFromRiwayatPakan != null){
            $riwayatPakan = $riwayatPakan->whereBetween('created_at', [Carbon::parse($dateFromRiwayatPakan)->toDateString(), Carbon::parse($dateToRiwayatPakan)->toDateString()]);
        }

        $riwayatPakan = $riwayatPakan->orderBy('created_at', 'desc')->paginate($rowsPerPageRiwayatPakan)->withQueryString();
        return Inertia::render('Dashboard',
            [
                'suhu'=>$suhu,
                'sisaPakan' =>$sisaPakan,
                'pakanTerakhir'=>$pakanTerakhir,
                'riwayatPakan' =>$riwayatPakan
            ]);
    }

    public function pakanManual(Request $request){

        // dd($request);
        $request->validate([
            'jumlah_keluar' => 'required'
        ]);

        $sisaPakan = TempatPakan::latest()->first();
        // dd($sisaPakan);
        $this->sendPakanKeluar($request->jumlah_keluar);

        $reportPakan = new ReportPakan();
        $reportPakan->sisa = $sisaPakan->tinggi_pakan;
        $reportPakan->jumlah_keluar = $request->jumlah_keluar;
        $reportPakan->keterangan = "Pakan Manual Sebanyak " . $request->jumlah_keluar;
        $reportPakan->save();
        return redirect()->route('dashboard')->with('success', 'Pakan Berhasil');
    }
}
