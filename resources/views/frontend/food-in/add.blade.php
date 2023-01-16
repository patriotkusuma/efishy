<x-app-layout>
    <div class="container max-w-7xl px-6 mx-auto sm:px-8">
        <div class="py-3">
            <div class="w-full p-4 border border-gray-200 bg-white rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
                <h1 class="pt-3 pb-0 text-lg font-semibold text-left text-gray-900 dark:text-white dark:bg-gray-800">
                    Food Entry Form
                </h1>
                <p class="mt-0 mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite
                    Ini adalah halaman tool efishy.</p>
            </div>
            <div
                class="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600">
                <form action="{{request()->routeIs('*.edit') ? route('food.in.update',$foodIn->id) : route('food.in.store')}}" method="POST"
                      class="p-5 w-full text-sm text-left  text-gray-500 dark:text-gray-400">
                    @if(request()->routeIs('*.edit'))
                        @method('PUT')
                    @endif
                    @csrf

                    <div class="relative mb-3 w-1/2">
                        <label for="countries"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                        <select id="food_id" name="food_id"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                        >
                            <option selected disabled>Pilih Food</option>
                            @foreach($foodDatas as $data)
                                <option
                                    value="{{$data->id}}" {{(old('food_id') ?? (isset($foodIn->food_id) ? $foodIn->food_id : 0) == $data->id ? "selected" : "" )}} >
                                    {{$data->name}}
                                </option>
                            @endforeach
                        </select>
                        @error('food_id')
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                            <span class="font-medium">{{$message}}!</span>
                        </p>
                        @enderror
                    </div>

                    <div class="mb-2 w-1/2">
                        <label for="fiber"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jumlah (Kg)</label>
                        <input type="number"
                               name="count" min="0" step="0.01"
                               id="title" value="{{old('count') ?? $foodIn->count ?? ''}}"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Pelet Merek Pelet"/>

                        @error('count')
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                            <span class="font-medium">{{$message}}!</span>
                        </p>
                        @enderror
                    </div>

                    <div class="flex mb-2">
                        <div class="w-1/4 pr-2">
                            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Masuk</label>
                            <input type="date" name="date"
                                   id="date"  value="{{old('date') ?? isset($foodIn->date) ? \Carbon\Carbon::parse($foodIn->date)->toDateString() : ''}}"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="0" required>
                            @error('date')
                            <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                                <span class="font-medium">{{$message}}!</span>
                            </p>
                            @enderror
                        </div>
                        <div class="w-1/4 pr-2">
                            <label for="visitors"
                                   class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Harga
                                (Rupiah)</label>
                            <input type="number" name="price" min="0" step="0.1"
                                   id="price" value="{{old('price') ?? $foodIn->price ?? ''}}"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="0" required>
                            @error('price')
                            <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                                <span class="font-medium">{{$message}}!</span>
                            </p>
                            @enderror
                        </div>
                    </div>

                    <div class="py-2 w-1/2">
                        <label for="note" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Note / Keterangan
                        </label>
                        <textarea id="note" rows="4" name="note" value="{{old('note') ?? $foodIn->note ?? ''}}"
                                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Tulis keterangan tambahan disini ... ">
                            {{ old('note') ?? $foodIn->note ?? '' }}
                        </textarea>
                        @error('note')
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                            <span class="font-medium">{{$message}}!</span>
                        </p>
                        @enderror
                    </div>

                    <a href="{{route('food.in.index')}}"
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


        <script type="module">

        </script>

    </div>

</x-app-layout>
