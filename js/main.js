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
