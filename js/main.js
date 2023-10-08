var ost = new Audio("./music/ost.mp3");
ost.loop = true;
var muted = true;

function transition() {
    document.getElementById("main-container").scrollIntoView({behavior: "smooth"});
}

function toggleTheme() {
    var main = document.getElementById("main-container");
    var themeButton = document.getElementById("theme-toggler");
    var github = document.getElementById("github-icon");

    main.classList.toggle("dark-theme");
    themeButton.classList.toggle("white-font");
    github.classList.toggle("inverse");
}

function toggleSound() {
    let img = document.getElementById("volume-button");

    if (muted) {
        img.src = "./img/unmuted.png";
        ost.play();
        muted = false;
    } else {
        img.src = "./img/muted.png";
        ost.pause();
        muted = true;
    }
}