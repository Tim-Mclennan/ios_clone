const home = document.getElementById("home");

// const safari = document.getElementById("safari");
const app = document.getElementsByClassName("iphone__screen--app");
const cards = document.getElementsByClassName("iphone__screen__icons--card");



/* SAFARI */
    cards[0].addEventListener("click", () => {
        console.log("this works");
         app[0].classList.add("open");
});
home.addEventListener("click", (i) => {
    console.log("home works");
    app[0].classList.remove("open");

});
/* CAMERA */
cards[1].addEventListener("click", () => {
    console.log("this works");
     app[1].classList.add("open");
});
home.addEventListener("click", (i) => {
    console.log("home works");
    app[1].classList.remove("open");
})






