export default function Portfolio (){
    return `
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
                    <div class="my-2 flex items-center gap-5">
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
                    </div>
                </div>
                <!-- project 3 end -->

            </div>
        </div>
    </section>
    <!-- Portfolio End -->
    `
}