// Navbar toggle
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});








var hamburger = document.querySelector('.nav-menus');
var hamBtn = document.querySelector('.ham-1');
var crossOne = document.querySelector('.h-1');
var crossTwo = document.querySelector('.h-2');
var crossThree = document.querySelector('.h-3');

hamBtn.addEventListener('click', () => {
    hamburger.classList.toggle('pro-active');
    crossOne.classList.toggle('h-cross1');
    crossTwo.classList.toggle('h-cross2');
    crossThree.classList.toggle('h-cross3');
});


