<?php

namespace App\Http\Controllers;

use App\Models\AturPakan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use App\Models\ReportPakan;

class AturPakanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $searchAturPakan = $request->query('searchAturPakan');
        $rowsPerPage = $request->query('rowsPerPage');
        if($rowsPerPage==null){
            $rowsPerPage=5;
        }

        $jadwalPakans = AturPakan::query();
        $jadwalPakans = $jadwalPakans->when($searchAturPakan, fn($query) => $query->where('set_waktu','like','%'.$searchAturPakan.'%')
                ->orWhere('jumlah','like','%'.$searchAturPakan.'%'))
                ->orderByDesc('created_at')->paginate($rowsPerPage)->withQueryString();

        $riwayatPakanSearch = $request->query('riwayatPakanSearch');
        $rowsPerPageRiwayatPakan = $request->query('rowsPerPageRiwayatPakan');
        $searchRiwayatPakan = $request->query('searchRiwayatPakan');
        $dateFromRiwayatPakan = $request->query('dateFromRiwayatPakan');
        $dateToRiwayatPakan = $request->query('dateToRiwayatPakan');
        if($rowsPerPageRiwayatPakan==null){
            $rowsPerPageRiwayatPakan=5;
        }
        if($dateToRiwayatPakan == null){
            $dateToRiwayatPakan == Carbon::now()->toDateString();
        }
        $riwayatPakan = ReportPakan::query();
        $riwayatPakan = $riwayatPakan->when($searchRiwayatPakan,fn($query) =>
                $query->where('sisa', 'like', '%' . $searchRiwayatPakan . '%')
                    ->orWhere('jumlah_keluar','like', '%' . $searchRiwayatPakan . '%')
                    ->orWhere('keterangan', 'like', '%' . $searchRiwayatPakan . '%'));

        if($dateFromRiwayatPakan != null){
            $riwayatPakan = $riwayatPakan->whereBetween('created_at', [Carbon::parse($dateFromRiwayatPakan)->toDateString(), Carbon::parse($dateToRiwayatPakan)->toDateString()]);
        }
        $riwayatPakan = $riwayatPakan->orderBy('created_at', 'desc')
                    ->paginate($rowsPerPageRiwayatPakan,'*','riwayat_pakan_page' )
                    ->withQueryString();

        return Inertia::render('Efishy/AturPakan/Index',
        [
            'jadwalPakans' => $jadwalPakans,
            'riwayatPakan'=> $riwayatPakan,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Efishy/AturPakan/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'set_waktu' => 'required',
            'jumlah'    => 'required|numeric',
        ]);

        // dd($request->set_waktu);
        $jadwalPakan = new AturPakan();
        $jadwalPakan->set_waktu = $request->set_waktu;
        $jadwalPakan->jumlah = $request->jumlah;
        $jadwalPakan->status = 'not';
        $jadwalPakan->save();
        // dd($jadwalPakan);
        // $store = AturPakan::create([
        //     'set_waktu '=> $request->set_waktu,
        //     'jumlah'    => $request->jumlah,
        //     'status'    => 'not'
        // ]);

        return redirect()->route('pakan.atur-pakan.index')->with('success', 'Data berhasil di Input !');
    }

    /**
     * Display the specified resource.
     */
    public function show(AturPakan $aturPakan)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(AturPakan $aturPakan)
    {
        return Inertia::render('Efishy/AturPakan/Create', ['jadwalPakan' => $aturPakan]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, AturPakan $aturPakan)
    {
        $request->validate([
            'id'    => 'required',
            'set_waktu' => 'required',
            'jumlah'    => 'required',
        ]);

        $aturPakan->update([
            'set_waktu' => $request->set_waktu,
            'jumlah'    => $request->jumlah,
        ]);

        return redirect()->route('pakan.atur-pakan.index')->with('success', "Data berhasil diupdate !");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(AturPakan $aturPakan)
    {
        // dd($aturPakan);
        $aturPakan->delete();
        return redirect()->route('pakan.atur-pakan.index')->with('success', 'Data berhasil dihapus !');
    }
}
