<?php

namespace App\Http\Controllers;

use App\Models\ReportPakan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;

class ReportPakanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $searchData = $request->query('searchData');
        $dateFrom = $request->query('dateFrom');
        $dateTo = $request->query('dateTo');
        $rowsPerPage = $request->query('rowsPerPage');
        if($dateTo==null){
            $dateTo = Carbon::now();
        }
        if($rowsPerPage == null){
            $rowsPerPage = 5;
        }

        $reportPakan = ReportPakan::query();
        $reportPakan = $reportPakan->when($searchData, fn($query) =>
                        $query->where('sisa','like','%'.$searchData.'%')
                            ->orWhere('jumlah_keluar','like','%'.$searchData.'%')
                            ->orWhere('keterangan','like','%'.$searchData.'%'));

        if($dateFrom!=null){
            $reportPakan = $reportPakan->whereBetween('created_at', [Carbon::parse($dateFrom)->toDateString(),Carbon::parse($dateTo)->toDateString()]);
        }
        $reportPakan = $reportPakan->orderBy('created_at','desc')->paginate( $rowsPerPage)->withQueryString();

        $pakanPerBulan = ReportPakan::query();
        $pakanPerBulan = $pakanPerBulan->whereBetween('created_at', [Carbon::now()->firstOfMonth()->toDateString(), Carbon::now()->lastOfMonth()->toDateString()]);
        $pakanPerBulan = $pakanPerBulan->get();

        $chartPakan = ReportPakan::query();
        $chartPakan = $chartPakan->select(
                        DB::raw('sum(jumlah_keluar) as keluar'),
                        DB::raw("DATE_FORMAT(created_at, '%M %Y') as months")
        )->groupBy('months')
        ->get();


        $jumlahKeluar = $pakanPerBulan->sum('jumlah_keluar');
        return Inertia::render('Efishy/Report/Index',
            [
                'jumlahKeluar'  => $jumlahKeluar,
                'chartPakan'    => $chartPakan,
                'reportPakan'   => $reportPakan,
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ReportPakan $reportPakan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ReportPakan $reportPakan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ReportPakan $reportPakan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ReportPakan $reportPakan)
    {
        //
    }
}
