<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\FoodIn;
use App\Models\Foods;
use Illuminate\Http\Request;

class FoodInController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('frontend.food-in.list');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if($request->has('food_id')){

        }else{

            $foodDatas = Foods::all();
            return view('frontend.food-in.add',compact('foodDatas'));
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        dd($request);
        if($request->has('id')){
            return 'yes id';
        }else{


            $foodIn = new FoodIn();
            $foodIn->food_id = $request->food_id;
            $foodIn->count = $request->count;
            $foodIn->date = $request->date;
            $foodIn->price = $request->price;
            $foodIn->note = $request->note;
            $foodIn->save();

            return redirect()->route('food.in.index')->with('success','Data berhasil ditambah' );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $foodIn = FoodIn::find($id);
        $foodDatas = Foods::all();
        return view('frontend.food-in.add',compact('foodIn','foodDatas'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $request->validate([
                'food_id'   => 'required',
                'count'     => 'required|numeric',
                'date'      => 'required|date',
                'price'     => 'required|numeric'
            ]);

            $foodIn = FoodIn::find($id);
            $foodIn->food_id = $request->food_id;
            $foodIn->count = $request->count;
            $foodIn->date = $request->date;
            $foodIn->price = $request->price;
            $foodIn->note = $request->note;
            $foodIn->update();
            return redirect()->route('food.in.index')->with('success','Data '.$foodIn->food->name.' berhasil diubah');
        }catch(\Exception $ex){
            return dump($ex);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
