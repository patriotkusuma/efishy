<?php

namespace App\Http\Controllers;

use App\Models\Ph;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class PhController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $rowsPerPage = $request->query('rowsPerPage');
        $searchPh = $request->query('searchPh');
        $dateFrom = $request->query('dateFrom');
        $dateTo = $request->query('dateTo');

        if($dateTo == null){
            $dateTo = Carbon::now()->toDateString();
        }
        if(is_null($rowsPerPage)){
            $rowsPerPage= 5;
        }

        // dd($dateFrom);
        $phValues = Ph::query();
        $phValues = $phValues->where('status_ph','like','%'.$searchPh.'%');
        if($dateFrom!=null){
            // dd(Carbon::parse($dateFrom)->toDateString());
             $phValues = $phValues->whereBetween('created_at',[$dateFrom, $dateTo]);
        }
        // dd($phValues->get());
        $phValues = $phValues->orderBy('created_at','desc')->paginate($rowsPerPage)->withQueryString();
        $lastPh = Ph::latest()->first();
        $chartPh = Ph::query();
        $chartPh = $chartPh->select(DB::raw('DATE(created_at) as date'), DB::raw('max(status_ph) as max, min(status_ph) as min'))
                    ->groupBy('date')
                    ->get();
        // dd($chartPh);
        return Inertia::render("Efishy/Ph/Index",
        [
            'phValues'  => $phValues,
            'lastPh'    => $lastPh,
            'chartPh'   => $chartPh
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
    public function show(Ph $ph)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ph $ph)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Ph $ph)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ph $ph)
    {
        //
    }
}
