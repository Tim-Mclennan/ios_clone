const home = document.getElementById("home");

// const safari = document.getElementById("safari");
const apps = document.getElementsByClassName("iphone__screen__app");
const cards = document.getElementsByClassName("iphone__screen__icons--card");



/* SAFARI */
    cards[0].addEventListener("click", () => {
         apps[0].classList.add("open");
});
home.addEventListener("click", (i) => {
    apps[0].classList.remove("open");

});
/* CAMERA */
cards[1].addEventListener("click", () => {
     apps[1].classList.add("open");
});
home.addEventListener("click", (i) => {
    apps[1].classList.remove("open");
})






