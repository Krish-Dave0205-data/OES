window.onload = function() {
  alert("Welcome to EduSmart");
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}







var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:false,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      loopAdditionalSlides: 0,
    },
    breakpoints: {
        540: {  
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });

  var swiper = new Swiper('.about-slide', {
    spaceBetween: 20,
    slidesPerView: 1,  // Space between slides
    navigation: {
        nextEl: '.swiper-button-next',  // Next button
        prevEl: '.swiper-button-prev',  // Previous button
    },
    pagination: {
        el: '.swiper-pagination',  // Pagination control
        clickable: true,
        dynamicBullets: true,  // Enable clicking on pagination bullets
    },
    loop: true,
     // Enable looping of slides
});