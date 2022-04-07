const burgerMenu= document.querySelector(".hamburger-menu")
const burgerLogo= document.querySelector(".fa-bars")

burgerLogo.addEventListener("click", function(){
    burgerMenu.classList.add("active")
});
