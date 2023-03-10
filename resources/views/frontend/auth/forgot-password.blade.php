<x-master-guest>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="{{config('app-logo')?? 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'}}" alt="logo">
                Flowbite
            </a>
            <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Forgot Password
                </h2>
                <div class="mb-4 text-sm text-gray-600">
{{--                    {{ __('Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.') }}--}}
                    @if(session('status'))
                        <p class="mt-2 text-sm text-green-600 dark:text-green-500">
                            {{session('status')}}
                        </p>
                    @endif
                </div>
                <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" method="POST" action="{{route('password.email')}}">
                    @csrf

                    {{-- email address --}}
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                               required="" value="{{old('email')}}">
                        @error('email')
                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                            {{$message}}
                        </p>
                        @enderror
                    </div>

                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Send Password Link
                    </button>
                </form>

                @if(Route::has('login'))
                    <p class="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">
                        Back to login?
                        <a href="{{route('login')}}"
                           class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Login
                        </a>
                    </p>
                @endif
            </div>
        </div>
    </section>
</x-master-guest>
