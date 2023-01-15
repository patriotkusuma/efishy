<?php

namespace App\Http\Livewire\Frontend;

use Livewire\Component;
use Illuminate\Support\Str;
use Livewire\WithPagination;
use App\Models\Settings;

class Setting extends Component
{
    use WithPagination;

//    public $settingData;
    public $isModal = false;
    public $title;
    public $slug;
    public $value;
    public $comment;
    public $status;
    public $isSaved = false;
    public $search;
    public $setting_id;
    public $isUpdate = false;
    public $isDeleteModal = false;
    public $deleteTitle;
    public $deleteId;

    protected $rules = [
        'title' => 'required',
        'value' => 'required',
        'comment' => 'required'
    ];

    protected $listeners = [
        'savedButtonClick'
    ];

    public function savedButtonClick()
    {
        $this->saveData();
    }

    public function showModal()
    {
        $this->isUpdate = false;
        $this->isModal = true;
        $this->isSaved= false;
        $this->title="";
        $this->slug="";
        $this->value="";
        $this->comment="";
        $this->status="";
    }

    public function closeModal()
    {
        $this->isModal = false;
    }

    public function updated($property)
    {
        if ($property != 'search') {
            try {
                $this->validateOnly($property);
                $this->validate();
                $this->isSaved = true;
            } catch (\Exception $ex) {
                $this->isSaved = false;
            }
        }
        if ($property == 'title') {
            $this->slug = Str::slug($this->title);
        }
    }

    public function saveButtonModal()
    {

        if ($this->isUpdate == true) {
            $setting = Settings::find($this->setting_id);
            $setting->title = $this->title;
            $setting->slug = $this->slug;
            $setting->value = $this->value;
            $setting->comment = $this->comment;
            $setting->status = $this->status;
            $setting->update();
            $this->isUpdate = false;
            $this->closeModal();

            session()->flash('success','Data '. $setting->title.' berhasil diubah!');
        } else {

            $this->validate();
            $setting = new Settings();
            $setting->title = $this->title;
            $setting->slug = $this->slug;
            $setting->value = $this->value;
            $setting->comment = $this->comment;
            $setting->status = $this->status;
            $setting->save();

            session()->flash('success','Data ' . $setting->title .' berhasil disimpan!');
        }


        $this->isModal = false;
    }

    public function update($id)
    {
        $setting = Settings::find($id);
        $this->setting_id = $id;
        $this->title = $setting->title;
        $this->slug = $setting->slug;
        $this->value = $setting->value;
        $this->comment = $setting->comment;
        $this->status = $setting->status;
        $this->isUpdate = true;
        $this->isModal = true;
    }

    public function delete($id){
        $setting = Settings::find($id);
        $this->isDeleteModal = false;
        $setting->delete();
        session()->flash('delete',"Setting telah berhasil dihapus!");
    }

    public function removeConfirm($id, $title){
        $this->isDeleteModal = true;
        $this->deleteTitle = $title;
        $this->deleteId = $id;
    }

    public function closeDeleteModal(){
        $this->isDeleteModal = false;
        $this->deleteId=null;
        $this->deleteTitle=null;
    }


    public function render()
    {

//        $this->settingData = Settings::paginate(1);
//        $sets = Settings::paginate(1);
        $this->updatedSearch();
        $settingData = Settings::query();
        if($this->search){
            $settingData = $settingData->where('title', 'like', '%' . $this->search . '%')
            ->orWhere('value', 'like', '%' . $this->search . '%')
            ->orWhere('comment', 'like', '%' . $this->search . '%')
            ->orWhere('slug', 'like', '%' . $this->search . '%');
        }
        $settingData = $settingData->paginate(3);
        return view('livewire.frontend.setting',compact('settingData'));
    }
}
