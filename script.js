// SELECTIONS

const btnLeft = document.querySelector(".gallery__btn--left");
const btnRight = document.querySelector(".gallery__btn--right");

const contents = document.querySelectorAll(".gallery__content__box");

const dotsCont = document.querySelector(".gallery__dots");

const dots = document.querySelectorAll(".gallery__dots__dot");

let slideNum = 0;

// FUNCTIONS
function slider(num) {
    contents.forEach((box, index) => {
        box.style.transform = `translateX(${100 * (index - num)}%)`;
    });
}
slider(0);

// EVENT LISTENERS

btnLeft.addEventListener("click", () => {
    slideNum++;
    if (slideNum >= contents.length) {
        slideNum = 0;
    }
    slider(slideNum);
});
btnRight.addEventListener("click", () => {
    slideNum--;
    if (slideNum < 0) {
        slideNum = contents.length - 1;
    }
    slider(slideNum);
});
