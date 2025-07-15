function scrollToTarget(elementPosition) {
    const navOffset = 48; // Navbar offset
    let offsetPosition = elementPosition + window.scrollY - navOffset;
    console.log('hi');

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

function homeClicked() {
    window.scrollTo({
        top: 48,
        behavior: "smooth"
    });
}

function aboutClicked() {
    let elementPosition = document.getElementById("about").getBoundingClientRect().top;
    scrollToTarget(elementPosition)
}

function skillsClicked() {
    let elementPosition = document.getElementById("skills").getBoundingClientRect().top;
    scrollToTarget(elementPosition)
}

function projectsClicked() {
    let elementPosition = document.getElementById("projects").getBoundingClientRect().top;
    scrollToTarget(elementPosition)
}

function experiencesClicked() {
    let elementPosition = document.getElementById("experiences").getBoundingClientRect().top;
    scrollToTarget(elementPosition)
}