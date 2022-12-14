(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();function o(){window.onscroll=function(){const a=document.querySelector("header"),n=a.offsetTop;window.pageYOffset>n?a.classList.add("navbar-fixed"):a.classList.remove("navbar-fixed")};const s=document.querySelector("#hamburger"),r=document.querySelector("#nav-menu");s.addEventListener("click",function(){s.classList.toggle("hamburger-active"),r.classList.toggle("hidden")}),window.addEventListener("click",a=>{a.target!=s&&a.target!=r&&(s.classList.remove("hamburger-active"),r.classList.add("hidden"))});const l=document.getElementById("btn_dark"),i=document.getElementById("html");let t=document.getElementById("sun"),e=document.getElementById("moon");l.addEventListener("click",()=>{if(t.classList.contains("scale-0")){t.classList.remove("scale-0"),t.classList.add("scale-100"),e.classList.remove("scale-100"),e.classList.add("scale-0"),i.classList.remove("dark");return}e.classList.remove("scale-0"),e.classList.add("scale-100"),t.classList.remove("scale-100"),t.classList.add("scale-0"),i.classList.add("dark")})}function d(){return`
    <!-- About Section Start -->
    <section id="about" class="pt-36 pb-32">
        <div class="container max-w-[1080px]">
            <div class=" flex flex-wrap">
                <div class="w-full px-5 mb-10 lg:w-1/2">
                    <h4 class="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
                    <h2 class="font-medium text-dark dark:text-third text-2xl max-w-md lg:text-3xl">Siapa saya sebenarnya ?</h2>
                    <p class="font-normal text-base text-justify text-secondary dark:text-third max-w-xl lg:text-base py-3">Saya berasal dari Tangerang, Indonesia. Seorang lulusan SMA IPA yang identik dengan Sains dan Teknologi namun lebih memilih Teknologi sebagai bidang dalam lanjutan pendidikan ditingkat sarjana. Ya, saat ini saya berkuliah di Universitas Terbuka program studi Sistem Informasi.</p>
                    <p class="font-normal text-base text-justify text-secondary dark:text-third max-w-xl lg:text-base ">Saya mengawali hobi dibidang Desain Grafis sejak tahun 2018. Mulai tertarik dan mendalami secara intensif dunia pemrograman sejak Januari 2022 melalui sebuah komunitas Fullstack Programmer aktif hingga saat ini. Saya sangat terbuka untuk kesempatan apapun khususnya dalam IT Development. </p>
                </div>
                <div class="w-full px-4 lg:w-1/2">
                    <h3 class="font-medium text-dark text-2xl mb-3 lg:text-3xl lg:pt-10">Mari berteman</h3>
                    <p class="font-normal text-base text-secondary dark:text-third mb-4 lg:text-base">Saya orang yang terbuka, senang berdiskusi dan berorganisasi. Terlebih saya juga ikut dalam organisasi dan komunitas baik dibidang IT atau Sosial Nonprofit. <span class="block mt-2 text-dark font-medium"> Yuk kenal lebih jauh dengan saya</span></p>
                    
                    <div class="flex items-center">
                        <!-- WhatsApp -->
                        <a target="_blank" href="https://wa.me/628989011101" class="w-9 h-9 mr-3 rounded-2xl flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white dark:bg-third"> 
                            <img src="./img/logo/wa.svg" alt="">
                        </a>

                        <!-- Instagram -->
                        <a target="_blank" href="https://instagram.com/rhnrafif"
                            class="w-9 h-9 mr-3 rounded-2xl flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white dark:bg-third">
                            <img src="./img/logo/insta.svg" alt="">
                        </a>

                        <!-- Telegram -->
                        <a target="_blank" href="https://t.me/rhnrafif14"
                            class="w-9 h-9 mr-3 rounded-2xl flex justify-center items-center border border-secondary hover:border-primary hover:bg-primary hover:text-white dark:bg-third">
                            <img  src="./img/logo/telegram.svg" alt="">
                        </a>
                    </div>

                </div>
            </div>
        </div>

    </section>
    <!-- About Section End -->
    `}function m(){return`
    <!-- Congtact Section Start -->
    <section id="contact" class="pt-24 pb-32">
        <div class="container max-w-[1080px]">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-12">
                    <h4 class="font-semibold text-xl uppercase text-primary mb-3">Kontak</h4>
                    <h2 class="font-medium text-dark dark:text-third text-2xl mb-4">Hubungi Saya</h2>
                    <p class="font-normal text-lg text-justify text-secondary dark:text-third">Jika ingin berkomunikasi lebih lanjut dengan saya atau ingin menjalin kerjasama, email dan kontak saya selalu terbuka kepada siapa saja dan kapan saja. </p>
                </div>
            </div>
            <div class="w-full px-4 flex justify-center items-center gap-10 md:gap-8">
                <div>
                    <a href="https://mailto:raihanudinrafif@gmail.com" target="_blank" class="flex flex-col items-center group">
                        <img src="./img/logo/gmail.svg" width="40" alt="kontak via email">
                        <p class="font-normal text-secondary dark:text-third hidden group-hover:font-medium md:block">raihanudinrafif@gmail.com</p>
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/raihanudinrafif14/" target="_blank" class="flex flex-col items-center group">
                        <img src="./img/logo/linkedin.svg" width="40" alt="kontak via email">
                        <p class="font-normal text-secondary dark:text-third hidden group-hover:font-medium md:block">Raihanudin Rafif</p>
                    </a>
                </div>
            </div>
            <!-- <form action="">
                <div class="w-full lg:w-2/3 lg: mx-auto">
                    <div class="w-full px-4 mb-8">
                        <label for="name" class="text-base text-primary font-bold">Nama</label>
                        <input type="text" id="name" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
                    </div>
                    <div class="w-full px-4 mb-8">
                        <label for="email" class="text-base text-primary font-bold">Email</label>
                        <input type="email" id="email"
                        class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
                    </div>
                    <div class="w-full px-4 mb-8">
                        <label for="message" class="text-base text-primary font-bold">Pesan</label>
                        <textarea type="text" id="message"
                        class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
                    </div>
                    <div class="w-full">
                        <button class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
                    </div>
                </div>
            </form> -->
        </div>
    </section>
    <!-- Contyact Section End -->
    `}function c(){return`
<!-- Footer Start -->
    <footer class="bg-dark dark:bg-[#d9d9d9] pt-24 pb-12">
        <div class="container max-w-[1080px]">
            <div class="w-full mx-auto flex flex-wrap">
                <div class="w-full px-4 mb-12 text-slate-300 dark:text-dark font-medium md:w-2/3" >
                    <h2 class="text-4xl text-white dark:text-dark mb-5">Raihanudin Rafif</h2>
                    <p class="text-lg font-normal">Gembong, Balaraja, Tangerang, Banten</p>
                    <p class="text-lg font-normal">Indonesia, 15610</p>
                    <p class="text-lg font-normal">raihanudinrafif@gmail.com</p>
                </div>
                <div class="w-full px-4 mb-12 md:w-1/3">
                    <h3 class="font-medium text-xl text-white dark:text-dark mb-5">Tautan</h3>
                    <ul class="text-slate-300 dark:text-dark">
                        <li>
                            <a href="#home" class="inline-block text-base font-normal hover:text-primary mb-3">Beranda</a>
                        </li>
                        <li>
                            <a href="#about" class="inline-block text-base font-normal hover:text-primary mb-3">Tentang saya</a>
                        </li>
                        <li>
                            <a href="#portfolio" class="inline-block text-base font-normal hover:text-primary mb-3">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" class="inline-block text-base font-normal hover:text-primary mb-3">Contact</a>
                        </li>
                    </ul>
                
                </div>

            </div>
            <div class="w-full pt-10 border-t border-slate-700">
                <div class="flex items-center justify-center mb-5">
                    <!-- LinkedIN -->
                    <a target="_blank" href="https://wa.me/628989011101"
                        class="w-9 h-9 mr-3 flex justify-center text-white dark:text-dark dark:hover:text-primary items-center hover:text-primary">
                        <svg role="img" viewBox="0 0 24 24" width="28" class="fill-current" xmlns="http://www.w3.org/2000/svg">
                            <title>WhatsApp</title>
                            <path
                                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                    </a>
                
                    <!-- Instagram -->
                    <a target="_blank" href="https://instagram.com/rhnrafif"
                        class="w-9 h-9 mr-3 flex justify-center text-white dark:text-dark dark:hover:text-primary items-center hover:text-primary">
                        <svg role="img" viewBox="0 0 24 24" width="28" class="fill-current" xmlns="http://www.w3.org/2000/svg">
                            <title>Instagram</title>
                            <path
                                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                    </a>
                
                    <!-- Telegram -->
                    <a target="_blank" href="https://t.me/rhnrafif14"
                        class="w-9 h-9 mr-3 flex justify-center text-white dark:text-dark dark:hover:text-primary items-center hover:text-primary">
                        <svg role="img" viewBox="0 0 24 24" width="28" class="fill-current" xmlns="http://www.w3.org/2000/svg">
                            <title>Telegram</title>
                            <path
                                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                        </svg>
                    </a>
                </div>
                <p class="font-medium text-xs text-slate-500 dark:text-dark text-center">Created by <a href="#home" class="font-medium text-primary"> Raihanudin Rafif </a> using
                    <a target="_blank" href="https://tailwindcss.com/"
                        class=" ml-1 hover:text-primary">
                        <svg role="img" viewBox="0 0 24 24" width="24" class="fill-current inline" xmlns="http://www.w3.org/2000/svg">
                            <title>Tailwind CSS</title>
                            <path
                                d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                        </svg>
                    </a></p>
            </div>
        </div>
    </footer>
    <!-- Footer End -->
`}function g(){return`
    <!-- Header Start -->
    <header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 dark:bg-third">                    
        <div class="container max-w-[1080px]">
            <div class="flex items-center justify-between relative">
                <div class=" px-4 py-2">
                   <img class="w-16 select-none" src="./img/nft.png" alt="logo">
                </div>

                <!-- button dark mode start -->
                <div id="btn_dark" class="cursor-pointer select-none w-8 h-8 flex justify-center items-center relative font-medium dark:text-dark "> <span class="text-sm mb-1 mr-2 px-1 rounded outline outline-dark dark:bg-dark dark:text-third group"> Mode </span>
                    <img id="sun" src="./img/logo/sun.svg"
                        class="w-8 h-7 absolute top-0 left-11 scale-100 transition duration-500 ease-in-out">
                    <img id="moon" src="./img/logo/moon.svg"
                        class="w-7 h-7 -rotate-[35deg] absolute top-0 left-11 scale-0 transition duration-500 ease-in-out">
                </div>
                <!-- button dark mode end -->
                

                <div class="flex items-center px-4">
                    
                    <button id="hamburger" class="block absolute right-4 lg:hidden">
                        <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                    <nav id="nav-menu" class="hidden absolute mt-1  bg-white outline outline-[0.5px] outline-gray-400 lg:outline-none dark:outline-none dark:bg-third pb-1 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none  ">
                        <ul class="block lg:flex" >
                            <li class="group">
                                <a href="#home" class="text-base font-medium  text-dark py-2 mx-8 flex group-hover:text-primary dark:group-hover:text-primary">Beranda</a>
                            </li>
                            <li class="group">
                                <a href="#about" class="text-base font-medium text-dark py-2 mx-8 flex group-hover:text-primary dark:group-hover:text-primary">Tentang Saya</a>
                            </li>
                            <li class="group">
                                <a href="#portfolio" class="text-base font-medium text-dark py-2 mx-8 flex group-hover:text-primary dark:group-hover:text-primary">Portfolio</a>
                            </li>
                            <li class="group">
                                <a href="#contact" class="text-base font-medium text-dark py-2 mx-8 flex group-hover:text-primary dark:group-hover:text-primary">Kontak</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- header End -->
    `}function p(){return`
    <!-- Hero Section Start -->
    <section id="home" class="pt-28 lg:pt-36">
        <div class="container max-w-[1080px]">
            <div class="flex flex-wrap">
                <div class="w-full self-center px-4 lg:w-1/2">
                    <h1 class="text-base font-normal text-primary md:text-xl">Halo, perkenalkan saya <span class="block font-medium dark:font-medium text-dark dark:text-third text-4xl mt-1 lg:text-5xl"> Raihanudin Rafif</span> </h1>
                    <h2 class="font-medium text-secondary dark:text-third text-lg mb-5  mt-1 lg:text-2xl">Student & <span class="text-dark dark:text-primary"> Freelancer</span></h2>
                    <p class="font-normal text-base text-justify text-secondary dark:text-third mb-10 leading-relaxed">
                        Saya adalah mahasiswa jurusan Sistem Informasi. Juga seorang Bootcamp 'hunter' karena Dunia IT dan perkembangannya selalu menjadi hal menarik bagi saya. Saat ini sedang mendalami skill programming khususnya Fullstack Web Development.
                    </p>
                
                    <a href="#portfolio" class="text-base font-medium text-white dark:text-dark dark:hover:text-third dark:bg-third dark:hover:bg-primary bg-primary py-2 px-5
                    rounded-2xl hover:shadow-lg hover:bg-secondary transition duration-300 ease-in-out">Apa yang sudah saya kerjakan ?</a>
                </div>
                <div class="w-full self-end mt-20 px-4 lg:w-1/2">
                    <div class="mt-10 relative lg:mt-0 lg:right-0">
                        <img src="img/me4.png" alt="hero" class="max-w-[200px] mx-auto select-none ">
                        <span class="absolute -bottom-0 left-1/2 -z-10 -translate-x-1/2 md:scale-125">
                            <svg width="250" height="250" class="fill-[#00A7EB] dark:fill[#00A7EB]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill=""
                                    d="M48.3,-41.4C63.9,-32.6,79,-16.3,80.1,1.2C81.3,18.6,68.5,37.2,52.9,49.8C37.2,62.4,18.6,69,-0.2,69.2C-18.9,69.3,-37.8,63,-45.7,50.4C-53.6,37.8,-50.4,18.9,-52.2,-1.8C-54,-22.4,-60.7,-44.9,-52.8,-53.7C-44.9,-62.5,-22.4,-57.6,-3.1,-54.5C16.3,-51.4,32.6,-50.2,48.3,-41.4Z"
                                    transform="translate(100 100) scale(1.1)" />
                            </svg>
                        </span>
                    </div>    
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->
    `}function x(){return`
    <!-- Portfolio Start -->
    <section id="portfolio" class="pt-24 pb-16 bg-secondary dark:bg-dark bg-opacity-20">
        <div class="container max-w-[1080px]">
            <div class="w-full px-4">
                <div class="max-w-xl mx-auto text-center mb-16">
                    <h4 class="font-semibold text-xl uppercase text-primary mb-2">Portfolio</h4>
                    <p class="font-normal text-lg text-secondary dark:text-third">Berikut adalah project yang pernah saya kerjakan baik Desain Grafis, UI/UX, Web Development, dan yang lainnya.</p>
                </div>
            </div>
            <div class="w-full px-4 flex flex-wrap justify-center lg:w-10/12 lg:mx-auto">
                <!-- project 1 start -->
                <div class="mb-12 p-4 md:w-1/2">
                    <div class="relative rounded-md shadow-md overflow-hidden flex flex-wrap justify-start w-full max-h-[260px] ">
                        <a href="https://www.behance.net/gallery/149410887/Mayur-Mobile-App-Design-UI-UX" target="_blank">
                            <img  src="img/portfolio/project1/1.jpg" alt="">
                        </a>
                    </div>
                    <h3 class="font-semibold text-xl text-dark dark:text-primary mt-5 mb-3">Mayur Mobile App Design</h3>
                    <p class="font-normal text-base text-secondary dark:text-third">
                        Mendesain sebuah Prototipe App Mobile E-Commerce dengan mengimplementasikan konsep design thinking. <br>
                        Sebagai tugas UI/UX <a href="https://jvalleybootcamp.com/" target="_blank" class="font-medium hover:font-semibold hover:text-primary dark:text-third dark:hover:text-primary"> J Valley Bootcamp </a> tahun 2022
                    </p>
                    <p class="font-semibold my-1 text-base text-secondary dark:text-primary">
                        Used App :
                    </p>
                    <div class="my-2 flex items-center gap-5 ">
                        <img class="w-5" src="./img/logo/figma.svg" alt="">
                        <!-- <img class="w-7 dark:text-third" src="" alt=""> -->
                        <svg role="img" class="w-7 dark:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Notion</title>
                            <path
                                d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                        </svg>
                    </div>
                </div>
                <!-- project 1 end -->

                <!-- project 2 start -->
                <div class="mb-12 p-4 md:w-1/2">
                    <div class="relative rounded-md shadow-md overflow-hidden flex flex-wrap justify-start w-full max-h-[260px] ">
                        <a href="https://www.behance.net/gallery/147676825/ALJABAR-Competition-2022" target="_blank">
                            <img src="img/portfolio/2.jpg" alt="">
                        </a>
                    </div>
                    <h3 class="font-semibold text-xl text-dark dark:text-primary mt-5 mb-3">Design for Aljabar Competition</h3>
                    <p class="font-normal text-base text-justify text-secondary dark:text-third">
                        Membuat desain banner, poster, konten media sosial, tiket, sertifikat, administrator, etc. Dalam kegiatan LKBB Aljabar Competition tahun 2022
                    </p>
                    <p class="font-semibold my-1 text-base text-secondary dark:text-primary">
                        Used App :
                    </p>
                    <div class="my-2 flex items-center gap-5">
                        <img class="w-8" src="./img/logo/photoshop.svg" alt="">
                    </div>
                </div>
                <!-- project 2 end -->

                <!-- project 3 start -->
                <div class="mb-12 p-4 md:w-1/2">
                    <div class="relative rounded-md shadow-md overflow-hidden flex flex-wrap justify-start w-full max-h-[260px] ">
                        <a href="https://www.figma.com/proto/Xu0EAjgEwQAdDrfxPuvYhQ/Design-Landing-Page?page-id=0%3A1&node-id=1%3A2&viewport=313%2C90%2C0.17&scaling=scale-down&starting-point-node-id=1%3A2" target="_blank">
                            <img src="img/portfolio/3.png" alt="">
                        </a>
                    </div>
                    <h3 class="font-semibold text-xl text-dark dark:text-primary mt-5 mb-3">Landing Page Web</h3>
                    <p class="font-normal text-base text-justify text-secondary dark:text-third">
                        Sebuah website sederhana untuk kebutuhan promosi toko online. Website sebagai penghubung ke official store dan e-commerce produk.
                    </p>
                    <p class="font-semibold my-1 text-base text-secondary dark:text-primary">
                        Used App :
                    </p>
                    <div class="my-2 flex items-center gap-5">
                        <img class="w-5" src="./img/logo/figma.svg" alt="">
                        <img class="w-8" src="./img/logo/vitejs.svg" alt="">
                        <img class="w-8" src="./img/logo/js.svg" alt="">
                        <img class="w-9" src="./img/logo/tailwind.svg" alt="">
                    </div>
                </div>
                <!-- project 3 end -->
                <!-- project 4 start -->
                <div class="mb-12 p-4 md:w-1/2">
                    <div class="relative rounded-md shadow-md overflow-hidden flex flex-wrap justify-start w-full max-h-[260px] ">
                        <a href="https://app-vote-kristal.vercel.app" target="_blank">
                            <img src="img/portfolio/4.png" alt="">
                        </a>
                    </div>
                    <h3 class="font-semibold text-xl text-dark dark:text-primary mt-5 mb-3">Live Vote App</h3>
                    <p class="font-normal text-base text-justify text-secondary dark:text-third">
                        Website untuk mempermudah proses perhitungan nilai dalam KRISTAL Scout Competition Tahun 2022
                    </p>
                    <p class="font-semibold my-1 text-base text-secondary dark:text-primary">
                        Used App :
                    </p>
                    <div class="my-2 flex items-center gap-5">
                        <img class="w-8 bg-dark" src="./img/logo/react1.svg" alt="">
                        <img class="w-8" src="./img/logo/vitejs.svg" alt="">
                        <img class="w-7" src="./img/logo/firebase.svg" alt="">
                        <img class="w-9" src="./img/logo/tailwind.svg" alt="">
                    </div>
                </div>
                <!-- project 4 end -->

            </div>
        </div>
    </section>
    <!-- Portfolio End -->
    `}function u(){return`
    ${g()}
    ${p()}
    ${d()}
    ${x()}
    ${m()}
    ${c()}
`}const f=document.getElementById("app");f.innerHTML=u();o();
