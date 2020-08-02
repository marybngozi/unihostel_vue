<template>
    <div>
        <header class="container-fluid">
            <div class="top-header row">
                <div class="col-md-3"></div>
                <div class="col-md-9 pt-3 text-white slant-top">
                    <p class="slant-text">DISCIPLINE, SELF RELIANCE & EXCELLENCE</p>
                </div>
            </div>
            <div class="middle-header row mt-4 d-flex justify-content-between">
                <div class="col-md-3">
                    <router-link to="/"><a href=""></a><img src="../assets/unilogo.png" alt="Unizik Logo" class="img-fluid"></router-link>
                </div>
                <div class="col-md-2 row mt-3 mr-1">
                    <div class="col-md-2 ">
                        <div class="bg-gray rounded-circle mb-3" style="height: 30px; width: 30px">
                            <i class="fa fa-phone mt-2" style="font-size: 1.3rem"></i>
                        </div>
                    </div>
                    <div class="col-md-8 ml-3">
                        <p class="pb-1 mb-0 small-nav">Support@unizik.edu.ng</p>
                        <p class="pt-0 small-nav">+234812345678</p>
                    </div>
                </div>
                <div class="col-md-4 site-name">
                    UNIVERSITY HOSTELS
                </div>
                <div class="col-md-3 row mt-3 ">
                    <div class="col-md-2 ">
                        <div class="bg-gray rounded-circle mb-3" style="height: 36px; width: 36px">
                            <i class="far fa-clock mt-2" style="font-size: 1.6rem"></i>
                        </div>
                    </div>
                    <div class="col-md-10 text-left ">
                        <p class="pb-1 mb-0 small-nav">Mon - Sat : 8:00am - 5:00pm</p>
                        <p class="pt-0 small-nav">Sunday: Closed</p>
                    </div>
                </div>
            </div>
            <div class="">
                <nav class="navbar bg-dark navbar-dark">
                    <!-- Brand -->
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-white" href="#">Disabled</a>
                        </li>
                    </ul>
                    <!-- <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link> -->
                </nav>
                <div>

                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'NavTop'
}
</script>

<style scoped>
.slant-top {
    position: relative;
    display: inline-block;
    overflow: hidden;
}
.slant-top:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(37, 98, 138);
    -webkit-transform-origin: 100% 0;
    -ms-transform-origin: 100% 0;
    transform-origin: 100% 0;
    -webkit-transform: skew(45deg);
    -ms-transform: skew(45deg);
    transform: skew(45deg);
    z-index: -1;
}
.slant-text {
    font-size: 0.9rem;
}
.site-name {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(37, 98, 138);
}
.bg-gray {
    background: #ebf5fa;
}
.small-nav {
    font-size: 0.9rem;
}
</style>