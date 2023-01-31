"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let video = document.querySelector("#video");
    video.load();
    document.querySelector("#button1").addEventListener("click", leftChoice);
    document.querySelector("#button2").addEventListener("click", rightChoice);
}
function leftChoice(_event) {
    console.log("left was pressed");
    let video = document.querySelector("#video");
    let film = document.querySelector("#film");
    console.log(video.getAttribute("src"));
    video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/EIA-SOSE20/master/Aufgabe%202/Media%20Portfolio/video3 (convert-video-online.com).mp4");
    console.log(video.getAttribute("src"));
    film.load();
}
function rightChoice(_event) {
    console.log("right was pressed");
}
//# sourceMappingURL=main.js.map