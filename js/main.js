function transition() {
    document.getElementById("main-container").scrollIntoView({behavior: "smooth"});
}

function toggleTheme() {
    var main = document.getElementById("main-container");
    var themeButton = document.getElementById("theme-toggler");
    var github = document.getElementById("github-icon");

    if (main.classList.contains("dark-theme")) {
        main.classList.remove("dark-theme");
        themeButton.classList.remove("white-font");
        github.classList.remove("inverse");
    } else {
        main.classList.add("dark-theme");
        themeButton.classList.add("white-font");
        github.classList.add("inverse");
    }
}
