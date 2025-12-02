$(function () {
    $('.nav__btn').on('click', function () {
        $('.menu').toggleClass('active')
    })
})



const toggle = document.getElementById("toggle");
const circle = toggle.querySelector(".circle");
const status = document.getElementById("status");

let active = false;

toggle.addEventListener("click", () => {
    active = !active;

    if (active) {
        circle.style.transform = "translateX(25px)";
        toggle.style.background = "#23596aff";
    } else {
        circle.style.transform = "translateX(0)";
        toggle.style.background = "#212250";

    }
});