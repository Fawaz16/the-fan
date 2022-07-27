let minidiv = document.querySelector('.minidiv')
let hamburger=document.querySelector('.hamburger')
let closebtn=document.querySelector('.close')
let nav=document.querySelector('nav')
let atext=document.querySelector('.a-text img')
let atexth1=document.querySelector('.a-text h1')
let atexth2=document.querySelector('.a-text h2')
let atexth4=document.querySelector('.a-text h4')
let atexth5=document.querySelector('.carousel')
let atexth6=document.querySelector('.b-text')
let atexth7=document.querySelector('.c-text')
let atexth8=document.querySelector('.d-text h2')



hamburger.addEventListener('click',()=>{
    minidiv.style.transform='translateX(-0px)';
    if ( minidiv.style.transform='translateX(-0px)') {
        hamburger.style.display='none'
        closebtn.style.display='block'
        nav.style.background='#2c16a9'
        atext.style.display='none'
        atexth1.style.display='none'
        atexth2.style.display='none'
        atexth4.style.display='none'
        atexth5.style.display='none'
        atexth6.style.display='none'
        atexth7.style.display='none'
        atexth8.style.display='none'
    }
})
closebtn.addEventListener('click',()=>{
    minidiv.style.transform='translateX(-768px)';
    if ( minidiv.style.transform='translateX(-768px)') {
        hamburger.style.display='block'
        closebtn.style.display='none'
        nav.style.background='#04006b'
        atext.style.display='block'
        atexth1.style.display='block'
        atexth2.style.display='block'
        atexth4.style.display='block'
        atexth5.style.display='block'
        atexth6.style.display='block'
        atexth7.style.display='block'
        atexth8.style.display='block'
    }
})

$(".bb-text").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  