<?php

namespace App\Http\Livewire\Frontend;

use App\Models\Tools;
use Illuminate\Support\Str;
use Livewire\Component;
use Livewire\WithPagination;

class Tool extends Component
{
    use WithPagination;

    public $isModal = false;
    public $name;
    public $topic;
    public $type;
    public $qos;
    public $status;
    public $isSaved = false;
    public $search;
    public $tool_id;
    public $isUpdate = false;
    public $isDeleteModal = false;
    public $deleteName;
    public $deleteId;
    public $isNew=false;

    protected $rules = [
        'name' => 'required',
        'topic' => 'required',
        'type'  => "required|in:subscribe,publish",
        'qos'   => "required|in:0,1,2",
        'status'    => "required|in:active,inactive",
    ];

    public function showModal()
    {
        $this->isUpdate = false;
        $this->isModal = true;
        $this->isSaved= false;
        $this->name="";
        $this->topic="";
        $this->type="";
        $this->qos="";
        $this->status="";
        $this->isNew = true;
    }

    public function updated($property){
        if ($property != 'search') {
            try {
                $this->validateOnly($property);
                $this->validate();
                $this->isSaved = true;
            } catch (\Exception $ex) {
                $this->validateOnly($property);
                $this->isSaved = false;
            }
        }
    }

    public function closeModal()
    {
        $this->isModal = false;
        $this->isSaved =false;
        $this->isUpdate = false;
        $this->isNew=false;
    }

    public function saveButtonModal()
    {
        $this->store();
        $this->isNew=false;
    }

    public function store(){
        if ($this->isUpdate == true) {
            $tools = Tools::find($this->tool_id);
            $tools->name = $this->name;
            $tools->topic = $this->topic;
            $tools->type = $this->type;
            $tools->qos = $this->qos;
            $tools->status = $this->status;
            $tools->update();
            $this->isUpdate = false;

            session()->flash('success','Data '. $tools->name.' berhasil diubah!');
            $this->closeModal();
        }

        if($this->isNew == true){
            $this->validate();
            $tools = new Tools();
            $tools->name = $this->name;
            $tools->topic = $this->topic;
            $tools->type = $this->type;
            $tools->qos = $this->qos;
            $tools->status = $this->status;
            $tools->save();
            session()->flash('success','Data ' . $tools->name .' berhasil disimpan!');
            $this->closeModal();
        }
    }

    public function update($id){
        $tool = Tools::find($id);
        $this->tool_id = $id;
        $this->name = $tool->name;
        $this->topic = $tool->topic;
        $this->type = $tool->type;
        $this->qos = $tool->qos;
        $this->status = $tool->status;
        $this->isUpdate = true;
        $this->isModal = true;
    }

    public function delete($id){
        $tool = Tools::find($id);
        $this->isDeleteModal = false;
        $tool->delete();
        session()->flash('delete',"Setting telah berhasil dihapus!");
    }

    public function removeConfirm($id, $name){
        $this->isDeleteModal = true;
        $this->deleteName = $name;
        $this->deleteId = $id;
    }

    public function closeDeleteModal(){
        $this->isDeleteModal = false;
        $this->deleteId=null;
        $this->deleteName=null;
    }
    public function render()
    {

        $toolsData = Tools::query();
        if($this->search){
            $toolsData = $toolsData->where('name', 'like', '%' . $this->search . '%')
                ->orWhere('topic', 'like', '%' . $this->search . '%');
        }
        $toolsData = $toolsData->paginate(5);
        return view('livewire.frontend.tool', compact('toolsData'));
    }
}
