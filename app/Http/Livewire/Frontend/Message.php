<?php

namespace App\Http\Livewire\Frontend;

use App\Models\Messages;
use Livewire\Component;

class Message extends Component
{
    public function render()
    {
        $messagesData = Messages::query();

        $messagesData = $messagesData->paginate(5);
        return view('livewire.frontend.message',compact('messagesData'));
    }
}
