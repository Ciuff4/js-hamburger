const burgerMenu= document.querySelector(".hamburger-menu")
const burgerLogo= document.querySelector(".fa-bars")
const burgerX= document.querySelector(".close")


burgerLogo.addEventListener("click", function(){
    burgerMenu.classList.add("active")
});

burgerX.addEventListener("click", function () {
    burgerMenu.classList.remove("active")    
});