let radio = document.querySelectorAll(".manual-btn");
let cont = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
    nextImage();
}, 5000);

function nextImage() {
    cont++;
    if (cont > radio.length) {
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true;}