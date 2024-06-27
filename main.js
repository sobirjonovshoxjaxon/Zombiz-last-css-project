// carausel
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: false,
    dots: false,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    }
  });

// navbar

let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset>10){
        navbar.classList.add("fixed")
    }else{
        navbar.classList.remove("fixed")
    }
})

// form
document.getElementById("open-form").onclick = function(){
  document.getElementById("register-form").style.display = "flex"
}

document.getElementById("square").onclick = function(){
  document.getElementById("register-form").style.display = "none"
}

// move numbers
let number = document.querySelectorAll(".number")
let Interval = 10000

number.forEach((number) =>{

  let start = 0
  let end = number.getAttribute("data-val")
  let duration = Interval/end


  let result  = setInterval(function(){
    start += 1
    number.textContent= start

    if(start == end){
      clearInterval(result)
    }
  },duration)

    
})


// scroll-button
let scrollBtn = document.querySelector(".scroll-button")

window.addEventListener('scroll', ()=>{
  if(window.pageYOffset>150){
    scrollBtn.classList.add("active")
  }else{
    scrollBtn.classList.remove("active")
  }
})

// team carausel

var swiper = new Swiper(".box", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

/* section#aboutClient */

var swiper = new Swiper(".mySwiper3", {
  loop: true,
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin: 10,
  // nav:true,
  dots: false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
