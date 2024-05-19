// Script to load bubbles

for (i = 0; i <= 38; i++) {
    let randomNum = Math.random() * 30;
    if (i > 12 && i < 26) {
        document.getElementsByClassName("bubbles")[0].innerHTML += `<span class = "center-text middle" style="--i:${randomNum};"></span>\n`;
    } else {
        document.getElementsByClassName("bubbles")[0].innerHTML += `<span class = "center-text" style="--i:${randomNum};"></span>\n`;
    }

}