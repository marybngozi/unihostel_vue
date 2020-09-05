<template>
    <section class="md:flex md:justify-center md:items-center bg-uniash py-8 md:p-8 font-unihostelFont">
        <div class="md:7/12 p-2 md:p-4">
            <div class="flex px-8 pt-8">
                <div class="w-1/2">
                    <p class="p-1 text-sm text-uniblue">WHAT THEY HAVE TO SAY?</p>
                    <h1 class="p-1 text-xl text-black font-medium">Testimonies</h1> 
                </div>
                <div class="w-1/2 px-8 flex justify-end font-black text-blue-200 text-5xl">
                    <!-- <p class="text-gray-500 font-black text-6xl flex justify-end">"</p> -->
                    <i class="fa fa-quote-right"></i>
                </div>
            </div>

            <div>
                <p class="text-black text-sm font-light px-8 italic">
                    Elegant well-spaced and condusive rooms are the standards 
                    for our every accommodation facilities. We give you the space 
                    and comfort required for effective studies
                </p>
            </div>

            <div class="flex justify-start p-8">
                <div class="h-20 w-20 rounded-full overflow-hidden">
                    <img src="../../assets/images/testipic.png" alt="">
                </div>
                <div class="p-4">
                    <h6 class="font-bold text-sm text-black">Lucy Uzondu</h6>
                    <div class="text-yellow-400 text-xs">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="md:w-5/12 lg:w-3/12 w-3/4 mx-auto md:mx-0 bg-white shadow-xl">
            <h4 class="p-4 text-black text-center font-normal w-56 mx-auto">Always listening, always understanding.</h4>

            <div class="flex justify-center px-4 py-2">
                <input type="text" name="" id="" class="rounded-lg p-2 border text-sm text-center placeholder-gray-500 w-64" placeholder="Your Phone Number">
            </div>

            <div class="flex justify-center px-4 pt-2 pb-6">
                <button class="bg-uniblue w-64 text-white text-xs p-3 rounded-lg">
                    GET A PHONE CALL
                </button>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    name: "Testimony"
}
</script>