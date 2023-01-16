<?php

namespace App\Http\Livewire\Frontend;

use Livewire\Component;

class FoodOut extends Component
{
    public $isModal = false;
    public $name, $size, $type, $protein, $fat, $fiber, $ash, $moisture, $note;
    public $isSaved = false;
    public $search;
    public $food_id;
    public $isUpdate = false;
    public $isDeletemodal = false;
    public $deleteName;
    public $deleteId;
    public $isNew = false;

    public  function delete($id){
        $food = \App\Models\FoodIn::find($id);
        $name = $food->name;
        $this->isDeletemodal = false;
        $food->delete();
        session()->flash('delete',"Data ".$name." telah berhasil dihapus!");
    }

    public function removeConfirm($id, $name){
        $this->isDeletemodal = true;
        $this->deleteName = $name;
        $this->deleteId = $id;
    }

    public function closeDeleteModal(){
        $this->isDeletemodal = false;
        $this->deleteId = null;
        $this->deleteName = null;

    }
    public function render()
    {
        $foodOutDatas = \App\Models\FoodOut::query();

        $foodOutDatas= $foodOutDatas->paginate(5);
        return view('livewire.frontend.food-out',compact('foodOutDatas'));
    }
}
