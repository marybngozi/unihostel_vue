<template>
    <section id="section" class="py-8">
        <div class="p-4">
            <p class="text-center text-uniyellow text-xs uppercase font-medium">Explore Our</p>
            <h2 class="text-center text-white text-xl font-medium tracking-wider">Hostel Features</h2>
        </div>
        <div class="md:flex md:justify-center md:space-x-6">
            <div class="w-3/4 md:w-3/12 mx-auto md:mx-0 bg-white py-6 mt-4 md:mt-0">
               <div class="flex justify-center mt-4">
                    <img src="../../assets/images/icon1.png" alt="">
                </div>
                <h2 class="flex justify-center text-md font-bold text-black pt-2">24/7 Security</h2>
                <p class="px-4 py-2 text-sm text-center">
                    The accommodation facilities are well equipped with well 
                    trained security personnels to ensure safety of occupants at all times
                </p>
            </div>
            <div class="w-3/4 md:w-3/12 mx-auto md:mx-0 bg-white py-6 mt-4 md:mt-0">
               <div class="flex justify-center mt-4">
                    <img src="../../assets/images/icon2.png" alt="">
                </div>
                <h2 class="flex justify-center text-md font-bold text-black pt-2">Spacious Rooms</h2>
                <p class="px-4 py-2 text-sm text-center">
                    Elegant well-spaced nd condusive rooms are the standards for our every accommodation.
                    We give you the comfort required for effective studies.
                </p>
            </div>
            <div class="w-3/4 md:w-3/12 mx-auto md:mx-0 bg-white py-6 mt-4 md:mt-0">
               <div class="flex justify-center mt-4">
                    <img src="../../assets/images/icon3.png" alt="">
                </div>
                <h2 class="flex justify-center text-md font-bold text-black pt-2">24/7 Social Amenities</h2>
                <p class="px-4 py-2 text-sm text-center">
                    Basic social amenties to promote effective studing (including electricity, 
                    clean water, food stalls) are made accessible to occupant always
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Features"
}
</script>

<style scoped>
#section{
    background: linear-gradient(rgba(11, 36, 70, 0.918), rgba(10, 33, 83, 0.541)), url('../../assets/images/news3.png') 0% 0% no-repeat padding-box;
    background-size: cover;
    background-position: center;
}
</style>