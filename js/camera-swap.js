/* camera swap */
const cameraSwap = document.getElementsByClassName("iphone__screen__app--camera--footer--swap");
const img = document.getElementsByClassName("iphone__screen__app--camera--photo--img");

cameraSwap[0].addEventListener("click", () => {
    img[0].classList.toggle("cameraSwap");
});


/* album swap */
const albumSwap = document.getElementsByClassName("iphone__screen__app--camera--footer--album");

albumSwap[0].addEventListener("click", () => {
    img[0].classList.toggle("albumSwap");
    albumSwap[0].classList.toggle("albumSwapBack");
});



