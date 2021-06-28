// SELECTIONS

const btnLeft = document.querySelector(".gallery__btn--left");
const btnRight = document.querySelector(".gallery__btn--right");

const contents = document.querySelectorAll(".gallery__content__box");

const dotsCont = document.querySelector(".gallery__dots");

const dots = document.querySelectorAll(".gallery__dots__dot");

let slideNum = 0;

function slider(num) {
    contents.forEach((box, index) => {
        box.style.transform = `translateX(${100 * (index - num)}%)`;
    });
}
slider(2);
