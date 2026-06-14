
// ============================
// WEBSITE LOADER
// ============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.remove();

            }, 800);

        }, 3000);

    }

});


// ============================
// HERO IMAGE SLIDER
// ============================

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");

    if(slides.length === 0) return;

    let currentSlide = 0;

    function changeSlide(){

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }

    setInterval(changeSlide, 5000);

});

