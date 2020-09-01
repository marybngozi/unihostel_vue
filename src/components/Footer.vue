<template>
    <footer class="bg-footer-bg block">
        <div class="flex justify-center items-center p-4 border-gray-700 border-b">
            <p class="text-white p-8 font-bold text-xl">
                UNDERGO YOUR STUDIES IN A PEACEFUL ACCOMMODATION
            </p>
        </div>

        <section class="flex justify-center flex-wrap items-center p-4 space-x-10">
            <div class="block p-4">
                <h1 class="text-white text-center text-xl">
                    BOOK A ROOM TODAY
                </h1>
                <div class="mt-8 p-4">
                    <div class="p-2">
                        <button class="bg-blue-500 rounded-lg p-4 w-40 text-white">SIGN UP</button>
                    </div>
                    <div class="p-2">
                        <button class="bg-orange-500 rounded-lg p-4 w-40 text-white">LOGIN</button>
                    </div>
                </div>
                
            </div>

            <div class="block p-4 text-center text-xl">
                <h1 class="text-white">
                    COMPANY
                </h1>
                <nav class="mt-8 p-2">
                    <ul class="text-gray-500 text-left">
                        <li class="p-1">
                            <a href="/about">About Us</a>
                        </li>
                        <li class="p-1">
                            <a href="/company">Company</a>
                        </li>
                        <li class="p-1">
                             <a href="/press_blog">Press & Blog</a>
                        </li>
                        <li class="p-1">
                            <a href="/privacy">Privacy Policy</a>
                        </li>
                        <li class="p-1">
                            <a href="/faq">FAQ</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="block p-4">
                <h1 class="text-white text-center text-xl">
                    DAYS FOR REG
                </h1>
                <div class="text-gray-500 mt-8 p-4 text-left">
                    <p class="p-2">Monday 11am-7pm</p>
                    <p class="p-2">Tuesday-Friday 11am-8pm</p>
                    <p class="p-2">Saturday 10am-6pm</p>
                    <p class="p-2">Sunday 11am-6pm</p>
                </div>
            </div>

            <div class="block p-4">
                <h1 class="text-white text-center text-xl">
                    RESOURCES
                </h1>
                <div class="text-gray-500 p-3 mt-8 text-left">
                    <p class="p-1">Home Insurance</p>
                    <p class="p-1">Travel Insurance</p>
                    <p class="p-1">Car Insurance</p>
                    <p class="p-1">Business Insurance</p>
                    <p class="p-1">Health Insurance</p>
                </div>
            </div>

            <div class="block p-4">
                <div class="flex justify-start">
                    <img src="../assets/images/uniziklogo.png" alt="Unizik logo" width="60" height="80">
                </div>
                <div class="w-64 mx-auto mt-8">
                    <p class="text-gray-500 p-4">
                        We have been providing quality coverage, superior value and personal service to our customers since 2000.
                    </p>
                </div>
                <div class="">
                    <!-- icons -->
                </div>
            </div>
        </section>
        
        <div class="flex justify-center items-center border-t border-gray-700">
            <p class="text-gray-500 p-4">
                © 2019, Nnamdi Azikiwe University. Awka, All rights reserved.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>