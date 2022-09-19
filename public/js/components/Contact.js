export default function Contact(){
    return `
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
    `
}