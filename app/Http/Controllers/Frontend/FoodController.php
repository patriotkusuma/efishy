<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Foods;
use Illuminate\Http\Request;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return view('frontend.food.food');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        if($request->has('name')){
            $request->validate([
                'name'  => 'required',
                'size'  => 'required|numeric',
                'type'  => 'required|in:floating,sinking',
                'protein'   => 'required|numeric',
                'fat'   => 'required|numeric',
                'fiber' => 'required|numeric',
                'ash' => 'required|numeric',
                'moisture' => 'required|numeric',
            ]);

            $store = $this->store($request);

            if($store){
                return redirect()->route('food.list')->with('success','Data '. $request->name . ' berhasil disimpan !');
            }
        }else{

            return view('frontend.food.add');
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($request)
    {
        $food = new Foods();
        $food->name = $request->name;
        $food->size = $request->size;
        $food->type = $request->type;
        $food->protein = $request->protein;
        $food->fat = $request->fat;
        $food->fiber = $request->fiber;
        $food->ash  = $request->ash;
        $food->moisture = $request->moisture;
        $food->note = $request->note;
        $food->save();

        return $food;
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
    public function edit($id, Request $request)
    {
        if($request->has('name')){
            $request->validate([
                'name'  => 'required',
                'size'  => 'required|numeric',
                'type'  => 'required|in:floating,sinking',
                'protein'   => 'required|numeric',
                'fat'   => 'required|numeric',
                'fiber' => 'required|numeric',
                'ash' => 'required|numeric',
                'moisture' => 'required|numeric',
            ]);

            $update = $this->update($request,$id);

            if($update){
                return redirect()->route('food.list')->with('success','Data '. $request->name . ' berhasil diubah !');
            }
        }else{
            $food = Foods::find($id);
            return view('frontend.food.add',compact('food'));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($request, $id)
    {
        $food = Foods::find($id);
        $food->name = $request->name;
        $food->size = $request->size;
        $food->type = $request->type;
        $food->protein = $request->protein;
        $food->fat = $request->fat;
        $food->fiber = $request->fiber;
        $food->ash  = $request->ash;
        $food->moisture = $request->moisture;
        $food->note = $request->note;
        $food->save();

        return $food;
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
