<?php

namespace App\Http\Controllers;

use App\Models\Suhu;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

use Carbon\Carbon;

class SuhuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $rowsPerPage = $request->query('rowsPerPage');
        $searchSuhu = $request->query('searchSuhu');
        $dateFrom = $request->query('dateFrom');
        $dateTo = $request->query('dateTo');
        if($dateTo==null){
            $dateTo = Carbon::now()->toDateString();
        }
        // $dateFrom = $request->query('dateFrom');
        if($rowsPerPage == null){
            $rowsPerPage = 5;
        }
        // dd($dateTo);

        $suhus = Suhu::query();
        $suhus = $suhus->where('status_suhu','like','%'.$searchSuhu.'%');
        // $suhus = $suhus->when($searchSuhu, fn($query) => $query->where('status_suhu','like','%'.$searchSuhu.'%'));
        if($dateFrom != null){
            $suhus = $suhus->whereBetween('created_at',[Carbon::parse($dateFrom)->toDateString(), Carbon::parse($dateTo)->toDateString()]);
        }
        // $suhu = $suhus->Where('created_at', '>=', Carbon::parse($dateFrom)->toDateString());
        // $suhu = $suhus->orWhere('created_at', '<=', Carbon::parse($dateTo)->toDateString());
        $suhus = $suhus->orderBy('created_at','desc')->paginate($rowsPerPage)->withQueryString();

        $lastSuhu = Suhu::latest()->first();

        $maxChartSuhu = Suhu::query();

        /* V1 */
        // $maxChartSuhu = $maxChartSuhu->whereBetween('created_at', [Carbon::now()->subDays(30)->toDateString(), Carbon::now()->toDateString()]);
        // $maxChartSuhu = $maxChartSuhu->get();

        // $maxChartSuhu=$maxChartSuhu->groupBy(function($item){
        //     return Carbon::parse($item->created_at);
        // })->reduce(function($result, $group){
        //     return $result->put($group->first()->created_at->format('d-m-Y'),collect([
        //         'max'=>$group->max('status_suhu')
        //     ]));
        // },collect());
        /* V1 */

        /* V2 */
        $maxChartSuhu = $maxChartSuhu->select(DB::raw('DATE(created_at) as date'),DB::raw('max(status_suhu) as max, min(status_suhu) as min'))
                        ->groupBy('date')
                        ->get();
        /* V2 */
        // dd($maxChartSuhu);
        // dd($suhus);
        return Inertia::render('Efishy/SensorSuhu/Index',
        [
            'suhus' => $suhus,
            'lastSuhu' => $lastSuhu,
            'maxChartSuhu'  => $maxChartSuhu
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
    public function show(Suhu $suhu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Suhu $suhu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Suhu $suhu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Suhu $suhu)
    {
        //
    }
}
