$(document).ready(function () {
    $('.slider__list').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed:1500,
        // кількість елементів
       
        // з якого слайду починається
        
        // прокручування безкінечне
        
        // ділення елемента на частини потрібно при перетягувванні мишкою
        touchThreshold: 10,
        // центрує зображення
        
    });
})
const buttonOpen =document.querySelector(".header__button")
const overlay = document.querySelector(".form__overlay")
const buttonClose = document.querySelector(".form__button--close")

buttonOpen.addEventListener("click", openWindowForm)
buttonClose.addEventListener("click", closeWindowForm)
function openWindowForm(event) {
   overlay.classList.add("active")
}
function closeWindowForm(event) {
    overlay.classList.remove("active")
    
}
console.log(overlay);
console.log(buttonOpen);
document.getElementById('focusmeplease').focus();