"use strict";
var WeltDerTraeume;
(function (WeltDerTraeume) {
    window.addEventListener("load", handleLoad);
    let i = 0;
    let choices = ["start"];
    function handleLoad(_event) {
        /*  let video: HTMLVideoElement = document.querySelector("#video");
         video.load(); */
        document.querySelector("#button1").addEventListener("click", leftChoice);
        document.querySelector("#button2").addEventListener("click", rightChoice);
    }
    function leftChoice(_event) {
        console.log("left was pressed");
        let video = document.querySelector("#video");
        let film = document.querySelector("#film");
        i++;
        choices.push("a");
        if (choices[1] == "a" && i == 1) {
            console.log("play next Video: choice 1A");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Schrank.mp4");
        }
        if (choices[1] == "b" && choices[2] == "a" && i == 2) {
            console.log("play next Video: choice 2C");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Flucht.mp4");
        }
        if (choices[1] == "b" && choices[2] == "a" && choices[3] == "a" && i == 3) {
            console.log("play next Video: choice 3E");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/SireneMelodie.mp4");
        }
        if (choices[1] == "b" && choices[2] == "b" && choices[3] == "a" && i == 3) {
            console.log("play next Video: choice 3G");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Zauber.mp4");
        }
        if (choices[1] == "a" && choices[2] == "a" && i == 2) {
            console.log("play next Video: choice 2A");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Reden.mp4");
        }
        if (choices[1] == "a" && choices[2] == "a" && choices[3] == "a" && i == 3) {
            console.log("play next Video: choice 3A");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/BlickZurueck.mp4");
        }
        if (choices[1] == "a" && choices[2] == "b" && choices[3] == "a" && i == 3) {
            console.log("play next Video: choice 3C");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/HeimlicheRettung.mp4");
        }
        film.load();
    }
    function rightChoice(_event) {
        let video = document.querySelector("#video");
        let film = document.querySelector("#film");
        i++;
        choices.push("b");
        console.log("welches DIV: rechts");
        if (choices[1] == "b" && i == 1) {
            console.log("play next Video: choice 1B");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/am Fenster.mp4");
        }
        if (choices[1] == "b" && choices[2] == "b" && i == 2) {
            console.log("play next Video: choice 2D");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/SandmannsHoehle.mp4");
        }
        if (choices[1] == "b" && choices[2] == "a" && choices[3] == "b" && i == 3) {
            console.log("play next Video: choice 3F");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/HilferufFee.mp4");
        }
        if (choices[1] == "b" && choices[2] == "b" && choices[3] == "b" && i == 3) {
            console.log("play next Video: choice 3H");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/neueWelt.mp4");
        }
        if (choices[1] == "a" && choices[2] == "b" && i == 2) {
            console.log("play next Video: choice 2B");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Sprung.mp4");
        }
        if (choices[1] == "a" && choices[2] == "a" && choices[3] == "b" && i == 3) {
            console.log("play next Video: choice 3B");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Wegrennen.mp4");
        }
        if (choices[1] == "a" && choices[2] == "b" && choices[3] == "b" && i == 3) {
            console.log("play next Video: choice 3D");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Angriff.mp4");
        }
        film.load();
    }
})(WeltDerTraeume || (WeltDerTraeume = {}));
//# sourceMappingURL=main.js.map