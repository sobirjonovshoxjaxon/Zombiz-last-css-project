// carausel
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

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