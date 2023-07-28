<?php

namespace App\Http\Controllers;

use App\Models\Pakan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PakanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->query('search');
        $rowsPerPage = $request->query('rowsPerPage');

//        dd($rowsPerPage);
        $pakans = Pakan::query();
//        $pakans = $pakans->when($search,)

        $pakans = $pakans->paginate($rowsPerPage)->withQueryString();


        return Inertia::render('Efishy/Pakan/Index',['pakans' => $pakans]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama'  => 'required',
            'jumlah'    => 'required|numeric',
            'harga'     => 'required|numeric',
            'tanggal'   => 'required|date',
        ]);

        $store = Pakan::create([
            'nama'  => $request->nama,
            'jumlah'   => $request->jumlah,
            'harga'     => $request->harga,
            'tanggal'   => $request->tanggal,
            'keterangan'    => $request->keterangan,
            'status_pakan'  => 'masih',
        ]);

        return Inertia::render('Efishy/Pakan/Index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Pakan $pakan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pakan $pakan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pakan $pakan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pakan $pakan)
    {
        //
    }
}
