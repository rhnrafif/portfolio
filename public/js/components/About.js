export default function About(){
    return `
    <!-- About Section Start -->
    <section id="about" class="pt-36 pb-32">
        <div class="container max-w-[1080px]">
            <div class=" flex flex-wrap">
                <div class="w-full px-5 mb-10 lg:w-1/2">
                    <h4 class="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
                    <h2 class="font-medium text-dark dark:text-third text-2xl max-w-md lg:text-3xl">Siapa saya sebenarnya ?</h2>
                    <p class="font-normal text-base text-justify text-secondary dark:text-third max-w-xl lg:text-base py-3">Saya berasal dari Tangerang, Indonesia. Seorang lulusan SMA IPA yang identik dengan Sains dan Teknologi namun lebih memilih Teknologi sebagai bidang dalam lanjutan pendidikan ditingkat sarjana, ya. Saat ini saya berkuliah di Universitas Terbuka program studi Informasi.</p>
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
    `
}