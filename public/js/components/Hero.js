export default function Hero(){
    return `
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
    `
}