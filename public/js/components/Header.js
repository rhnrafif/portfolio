export default function Header(){
    return `
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
    `
}