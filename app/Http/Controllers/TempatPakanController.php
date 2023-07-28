<?php

namespace App\Http\Controllers;

use App\Models\ReportPakan;
use App\Models\TempatPakan;
use App\Models\WaktuPakan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class TempatPakanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $rowsPerPage = $request->query('rowsPerPage');
        $searchdata = $request->query('searchData');
        $dateFrom = $request->query('dateFrom');
        $dateTo = $request->query('dateTo');

        if($rowsPerPage==null){
            $rowsPerPage=5;
        }
        if($dateTo== null){
            $dateTo= Carbon::now()->toDateString();
        }

        $sisaPakans = TempatPakan::query();
        /* Search */
        $sisaPakans = $sisaPakans->when($searchdata, fn($query) =>
                    $query->where('tinggi_pakan', 'like', '%' . $searchdata . '%')
                    ->orWhere('keterangan', 'like', '%' . $searchdata .'%'));

        /* Date From */
        if(!is_null($dateFrom)){
            $sisaPakans = $sisaPakans->whereBetween('created_at', [Carbon::parse($dateFrom)->toDateString(), Carbon::parse($dateTo)->toDateString()]);
        }
        $sisaPakans = $sisaPakans->orderBy('created_at', 'desc')
                    ->paginate($rowsPerPage)
                    ->withQueryString();

        $chartSisaPakan = TempatPakan::query();
        $chartSisaPakan = $chartSisaPakan->select(DB::raw('MAX(id) as id'));
        $chartSisaPakan = $chartSisaPakan->where('created_at', '>=', Carbon::now()->subDays(15));
        // $chartSisaPakan = $chartSisaPakan->orderBy('created_at', 'desc');
        // $chartSisaPakan = $chartSisaPakan->orderBy('created_at','desc');
        $chartSisaPakan = $chartSisaPakan->groupBy(DB::raw('DATE(created_at)'));
        $chartSisaPakan = $chartSisaPakan->get();
        $chartSisaPakan = TempatPakan::whereIn('id', $chartSisaPakan);
        $chartSisaPakan = $chartSisaPakan->get();
        // dd($chartSisaPakan->toSql());

        // $chartSisaPakan = DB::select('SELECT
        //         *
        //     FROM
        //         tempat_pakans
        //     WHERE
        //         id IN (SELECT
        //                 MAX(id)
        //             FROM
        //                 tempat_pakans
        //     GROUP BY DATE(created_at))');


        $pakanTerakhir = ReportPakan::with('pakan')->latest()->first();
        return Inertia::render("Efishy/TempatPakan/Index",
            [
                "sisaPakans" => $sisaPakans,
                "chartSisaPakan"=>$chartSisaPakan,
                "pakanTerakhir" => $pakanTerakhir,
            ]);
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
    public function show(TempatPakan $tempatPakan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TempatPakan $tempatPakan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TempatPakan $tempatPakan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TempatPakan $tempatPakan)
    {
        //
    }
}
