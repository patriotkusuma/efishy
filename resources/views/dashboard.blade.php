<x-app-layout>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{ __("You're logged in!") }}
                </div>
            </div>

            <div class="py-5 flex">

                {{--Temperature Card--}}
                <a href="#"
                   class="block max-w-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div class="flex justify-between">
                        <div class="flex items-start flex-col py-2 w-3/4 ">
                            <h3 class="text-md text-gray-700 dark:text-gray-400">
                                Temperature
                            </h3>
                            <h3 class="relative mt-6 font-extrabold text-6xl">
                                45
                                <span class=" text-6xl font-medium text-black-800 text-center py-0 my-0 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0">
                                    &#176;
                                </span>
                            </h3>
                            <p class="font-normal text-gray-700 dark:text-gray-400">
                                Celcius
                            </p>
                        </div>
                        <div class="flex items-center justify-end py-2 w-1/4">
                            <h5 class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <i class="fa-solid fa-temperature-low"></i>
                            </h5>
                        </div>

                    </div>
                </a>


                {{--Temperature v 2--}}
                <div class="max-w-[250px] p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-row mb-3">
                        <div class="flex items-center">
                            <i class="fa-solid text-3xl fa-temperature-low font-normal text-blue-500"></i>
                        </div>
                        <p class="mx-2 flex-items-center font-normal text-2xl text-gray-500 dark:text-gray-400">
                            Temperature
                        </p>

                    </div>
                    <h3 class="relative py-2 font-extrabold text-6xl">
                        45&#176;C
{{--                        <span class=" text-6xl font-medium text-black-800 text-center py-0 my-0 leading-none rounded-full px-2 dark:bg-blue-900 dark:text-blue-200 absolute -translate-y-1/2 translate-x-1/2 left-auto top-0 right-0">--}}
{{--                                    &#176;--}}
{{--                                </span>--}}
                    </h3>

                </div>

                {{--Temperature v 2--}}
                <div class="max-w-[250px] items-center mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-row mb-3">
                        <div class="flex items-center">
                            <i class="fa-regular fa-lightbulb text-3xl font-normal text-gray-500"></i>
                        </div>
                        <p class="mx-2 flex-items-center font-normal text-2xl text-gray-500 dark:text-gray-400">
                            Light
                        </p>

                    </div>
{{--                    <h3 class="relative py-2 font-extrabold text-6xl">--}}
{{--                        <i class="fa-solid fa-lightbulb"></i>--}}
{{--                        OFF--}}
{{--                    </h3>--}}
                    <h3 class="relative text-yellow-400 py-2 font-extrabold text-6xl">
                        <i class="fa-solid text-yellow-400 fa-lightbulb"></i>
                        ON
                    </h3>
{{--                    <h3 class="relative py-2 font-extrabold text-6xl">--}}
{{--                        <i class="fa-solid fa-lightbulb-on"></i>--}}
{{--                        OFF--}}
{{--                    </h3>--}}

                    <label class="relative inline-flex items-center my-3 cursor-pointer">
                        <input type="checkbox" name="switch1" value="" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"></div>
                        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Default toggle</span>
                    </label>
                </div>
            </div>
        </div>
    </div>


</x-app-layout>
