let bar = document.getElementById("bar");
let nav = document.getElementById("navbar");
let closee = document.getElementById("close");

bar.onclick = function () {
    nav.style.display = "block";
};

closee.addEventListener("click", function () {
    nav.classList.add("hide");
});
