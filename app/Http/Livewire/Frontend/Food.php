<?php

namespace App\Http\Livewire\Frontend;

use App\Models\Foods;
use Livewire\Component;
use Livewire\WithPagination;

class Food extends Component
{
    use WithPagination;

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

    protected $rules=[
        'name'  => 'required',
        'size'  => 'required|numeric',
        'type'  => 'required|in:floating,sinking',
        'protein'   => 'required|numeric',
        'fat'   => 'required|numeric',
        'fiber' => 'required|numeric',
        'ash'   => 'required|numeric',
        'moisture'  => 'required|numeric',
    ];

    public function showModal(){
        $this->isUpdate = false;
        $this->isModal = true;
        $this->isSaved = false;
        $this->name = '';
        $this->size='';
        $this->type='';
        $this->protein='';
        $this->fat='';
        $this->fiber='';
        $this->ash = '';
        $this->moisture = '';
        $this->note = '';
        $this->isNew=true;
    }

    public function updated($property){
        if($property != 'search'){
            try{
                $this->validateOnly($property);
                $this->validate();
                $this->isSaved = true;
            }catch (\Exception $ex){
                $this->validateOnly($property);
                $this->isSaved = false;
            }
        }
    }

    public function closeModal(){
        $this->isModal = false;
        $this->isSaved = false;
        $this->isUpdate = false;
        $this->isSaved = false;
    }

    public function saveButtonModal(){
        $this->store();
        $this->isNew=false;
    }

    public function store(){
        if($this->isUpdate == true){
            $food = Foods::find($this->food_id);
            $food->name = $this->name;
            $food->size = $this->size;
            $food->type = $this->type;
            $food->protein = $this->protein;
            $food->fat = $this->fat;
            $food->fiber = $this->fiber;
            $food->ash = $this->ash;
            $food->moisture = $this->moisture;
            $food->note = $this->note;
            $food->save();

            session()->flash('success','Data '.$food->name.' berhasil diubah');
            $this->closeModal();
        }

        if($this->isNew == true){
            $this->validate();
            $food = new Foods();
            $food->name = $this->name;
            $food->size = $this->size;
            $food->type = $this->type;
            $food->protein = $this->protein;
            $food->fat = $this->fat;
            $food->fiber = $this->fiber;
            $food->ash = $this->ash;
            $food->moisture = $this->moisture;
            $food->note = $this->note;
            $food->save();

            session()->flash('success','Data ' . $food->name .' berhasil disimpan!');
            $this->closeModal();
        }
    }

    public function update($id){
        $food = Foods::find($id);
        $this->food_id = $food->id;
        $this->name = $food->name;
        $this->size = $food->size;
        $this->type = $food->type;
        $this->protein = $food->protein;
        $this->fat = $food->fat;
        $this->fiber = $food->fiber;
        $this->ash  = $food->ash;
        $this->moisture = $food->moisture;
        $this->note = $food->note;
        $this->isUpdate = true;
        $this->isModal = true;
    }

    public  function delete($id){
        $food = Foods::find($id);
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
        $foodDatas = Foods::query();
        if($this->search){
            $foodDatas = $foodDatas->where('name','like','%'.$this->search.'%')
                ->orWhere('size','like','%'.$this->search .'%')
                ->orWhere('protein','like','$'.$this->search.'%')
                ->orWhere('fat','like','$'.$this->search.'%')
                ->orWhere('fiber','like','$'.$this->search.'%')
                ->orWhere('ash','like','$'.$this->search.'%')
                ->orWhere('moisture','like','$'.$this->search.'%')
                ->orWhere('note','like','$'.$this->search.'%');
        }

        $foodDatas = $foodDatas->paginate(5);
        return view('livewire.frontend.food',compact('foodDatas'));
    }
}
