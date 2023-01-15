<x-master-guest>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2"
                     src="{{config('app-logo')?? 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'}}"
                     alt="logo">
                Flowbite
            </a>
            <div
                class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Email Verification
                </h2>
                <div class="my-4 text-sm text-gray-600">
                    {{ __('Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.') }}
                </div>
                @if(session('status') == 'verification-link-sent')
                    <div
                        class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400"
                        role="alert">
                        {{ __('A new verification link has been sent to the email address you provided during registration.') }}
                    </div>
                @endif

                <div class="mt-4 flex items-center justify-between">
                    <form method="POST"
                          action="{{route('verification.send')}}">
                        @csrf

                        <button type="submit"
                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Resend verification email
                        </button>
                    </form>

                    <form method="POST" action="{{route('logout')}}">
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            <a href="{{route('login')}}"
                               class="font-medium underline text-dark-600 hover:underline dark:text-dark-500">
                                Logout
                            </a>
                        </p>
                    </form>
                </div>

            </div>
        </div>
    </section>
</x-master-guest>
