// SELECTIONS

const btnLeft = document.querySelector(".gallery__btn--left");
const btnRight = document.querySelector(".gallery__btn--right");

const contents = document.querySelectorAll(".gallery__content__box");

const dotsCont = document.querySelector(".gallery__dots");

let slideNum = 0;

// FUNCTIONS
function slider(num) {
    contents.forEach((box, index) => {
        box.style.transform = `translateX(${100 * (index - num)}%)`;
    });
}

function createDots() {
    contents.forEach((_, index) => {
        dotsCont.insertAdjacentHTML(
            "beforeend",
            `<div class="gallery__dots__dot" data-order="${index}"></div>`
        );
    });
}

function dotsHiglight() {
    const dots = document.querySelectorAll(".gallery__dots__dot");

    dots.forEach((dot) => {
        dot.classList.remove("gallery__dots__dot--active");
        if (dot.dataset.order == `${slideNum}`) {
            dot.classList.add("gallery__dots__dot--active");
        }
    });
}

function slideRight() {
    slideNum++;
    if (slideNum >= contents.length) {
        slideNum = 0;
    }
    slider(slideNum);
    dotsHiglight();
}
function slideLeft() {
    slideNum--;
    if (slideNum < 0) {
        slideNum = contents.length - 1;
    }
    slider(slideNum);
    dotsHiglight();
}

// EVENT LISTENERS

slider(slideNum);
createDots();
dotsHiglight();

btnRight.addEventListener("click", slideRight);

btnLeft.addEventListener("click", slideLeft);

dotsCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("gallery__dots__dot")) {
        slideNum = +e.target.dataset.order;
        slider(slideNum);
        dotsHiglight();
    }
});
