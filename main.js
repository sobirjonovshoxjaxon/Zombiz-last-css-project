// carausel
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

// navbar

let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset>100){
        navbar.classList.add("fixed")
    }else{
        navbar.classList.remove("fixed")
    }
})