let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let nouvil = document.querySelector(".nouvil");

window.onscroll = function () {
    let value = scrollY;

    //The movement
    stars.style.left = value + "px";
    moon.style.top = value * 4 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river5.style.top = value + "px";
    boat6.style.left = value * 3 + "px";
    nouvil.style.fontSize = value + "px";

    if (scrollY >= 66) {
        nouvil.style.fontSize = 66 + "px";
        nouvil.style.position = "fixed";
        if (scrollY >= 410) {
            nouvil.style.display = "none";
        } else {
            nouvil.style.display = "block";
        }
    }
    if (scrollY >= 79) {
        document.querySelector(".main").style.background = "linear-gradient(#9fefed, #10001f";
    } else {
        document.querySelector(".main").style.background = "linear-gradient(to top, #200016, transparent)";
    }
};
