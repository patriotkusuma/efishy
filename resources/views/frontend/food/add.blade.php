<x-app-layout>
    <div class="container max-w-7xl px-6 mx-auto sm:px-8">
        <div class="py-3">
            <div class="w-full p-4 border border-gray-200 bg-white rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
                <h1 class="pt-3 pb-0 text-lg font-semibold text-left text-gray-900 dark:text-white dark:bg-gray-800">
                    Tambah Makanan
                </h1>
                <p class="mt-0 mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite
                    Ini adalah halaman tool efishy.</p>
            </div>
            <div
                class="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600">
                <form action="" method="POST"
                      class="p-5 w-full text-sm text-left  text-gray-500 dark:text-gray-400">
                    @csrf

                    <div class="mb-2 w-1/2">
                        <label for="fiber"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Makanan</label>
                        <input type="text"
                               name="name"
                               id="title" value="{{old('name') ?? $food->name ?? ''}}"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Pelet Merek Pelet"/>

                        @error('name')
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                            <span class="font-medium">{{$message}}!</span>
                        </p>
                        @enderror
                    </div>

                    <div class="flex mb-2">
                        <div class="w-1/4 pr-2">
                            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size
                                /Ukuran (mm)</label>
                            <input type="number" name="size"
                                   id="size" min="0" step="0.1" value="{{old('size') ?? $food->size ?? ''}}"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="0" required>
                            @error('size')
                            <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                                <span class="font-medium">{{$message}}!</span>
                            </p>
                            @enderror
                        </div>
                        <div class="relative w-1/4">
                            <label for="countries"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                            <select id="type" name="type"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                            >
                                <option selected disabled>Pilih Type</option>
                                <option
                                    value="floating" {{(old('type') ?? (isset($food->type) ? $food->type : 0) == 'floating' ? "selected" : "" )}} >
                                    Floating
                                </option>
                                <option
                                    value="sinking" {{(old('type') ?? (isset($food->type) ? $food->type : 0) == 'sinking' ? "selected" : "" )}}>
                                    Sinking
                                </option>
                            </select>
                            @error('type')
                            <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                                <span class="font-medium">{{$message}}!</span>
                            </p>
                            @enderror
                        </div>
                    </div>

                    <div class="flex mb-2">

                        <div class="w-1/4 pr-2">
                            <label for="visitors"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Protein
                                (%)</label>
                            <input type="number" name="protein" min="0" step="0.1"
                                   id="protein" value="{{old('protein') ?? $food->protein ?? ''}}"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="0" required>
                            @error('protein')
                            <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                                <span class="font-medium">{{$message}}!</span>
                            </p>
                            @enderror
                        </div>
                        <div class="w-1/4">
                            <label for="fat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fat
                                / Lemak (%)</label>
                            <input type="number" name="fat" min="0" step="0.1"
                                   id="visitors" value="{{old('fat') ?? $food->fat ?? ''}}"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="0" required>
                            @error('fat')
                            <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                                <span class="font-medium">{{$message}}!</span>
                            </p>
                            @enderror
                        </div>

                    </div>

                    <div class="flex mb-2">

                        <div class="w-1/4 pr-2">
                            <label for="fiber"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fiber / Serat
                                (%)</label>
                            <input type="number" name="fiber" min="0" step="0.1"
                                   id="fiber" value="{{old('fiber') ?? $food->fiber ?? ''}}"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="0" required>
                            @error('fiber')
                            <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                                <span class="font-medium">{{$message}}!</span>
                            </p>
                            @enderror
                        </div>
                        <div class="w-1/4">
                            <label for="ash" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ash
                                / Abu (%)</label>
                            <input type="number" name="ash" min="0" step="0.1"
                                   id="visitors" value="{{old('ash') ?? $food->ash ?? ''}}"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="0" required>
                            @error('ash')
                            <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                                <span class="font-medium">{{$message}}!</span>
                            </p>
                            @enderror
                        </div>

                    </div>

                    <div class="w-1/2">
                        <label for="moisture"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Moisture / Kadar Air
                            (%)</label>
                        <input type="number" name="moisture" min="0" step="0.1"
                               id="moisture" value="{{old('moisture') ?? $food->moisture ?? ''}}"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="0" required>
                        @error('moisture')
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                            <span class="font-medium">{{$message}}!</span>
                        </p>
                        @enderror
                    </div>

                    <div class="py-2 w-1/2">
                        <label for="note" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Note / Keterangan
                        </label>
                        <textarea id="note" rows="4" name="note" value="{{old('note') ?? $food->note ?? ''}}"
                                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Tulis keterangan tambahan disini ... ">
                            {{ old('note') ?? $food->note ?? '' }}
                        </textarea>
                        @error('note')
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                            <span class="font-medium">{{$message}}!</span>
                        </p>
                        @enderror
                    </div>

                    <a href="{{route('food.list')}}"
                       class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <i class="fa fa-arrow-left"></i>
                        Kembali
                    </a>
                    <button type="submit"
                            class="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <i class="fa fa-save"></i>
                        Simpan
                    </button>
                </form>


            </div>
        </div>


        {{--<script type="module">
            const $targetEl = document.getElementById('authentication-modal');
            const $targetDelete = document.getElementById('popup-modal');

            const modal = new Flowbite.Modal($targetEl, null);
            const modalDelete = new Flowbite.Modal($targetDelete, null);

            Livewire.hook('element.updated', (el, component) => {
                var isModal = @this.isModal;
                if (isModal == true) {
                    modal.show();
                }
                if (isModal == false) {
                    modal.hide();
                }
                var isSaved = @this.isSaved;
                if (isSaved == true) {
                    console.log("saved");
                }

                var btnSave = $('.btn-save');
                btnSave.click(function () {
                @this.saveButtonModal();
                })

                var isModalDelete = @this.isDeleteModal;
                if (isModalDelete == true) {
                    modalDelete.show();
                }
                if (isModalDelete == false) {
                    modalDelete.hide();
                }

                $('.btn-close-alert').click(() => {
                    console.log('yes');
                    $('.alert').fadeOut('slow');
                })

                setTimeout(() => {
                    $('.alert').fadeOut('slow');
                }, 5000);
            })


        </script>--}}

    </div>

</x-app-layout>
