//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav ){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed')
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden');
});

//klik area window
window.addEventListener('click', (e)=>{
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

//add btn dark
const btn_dark = document.getElementById('btn_dark');
const html = document.getElementById('html')
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');

btn_dark.addEventListener('click',()=>{

    if(sun.classList.contains('scale-0')){
        sun.classList.remove('scale-0');
        sun.classList.add('scale-100');
        moon.classList.remove('scale-100');
        moon.classList.add('scale-0');
            
        html.classList.remove('dark')
        return
    }
    moon.classList.remove('scale-0');
    moon.classList.add('scale-100');
    sun.classList.remove('scale-100');
    sun.classList.add('scale-0');

    html.classList.add('dark')

})

