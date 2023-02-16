"use strict";
var WeltDerTraeume;
(function (WeltDerTraeume) {
    window.addEventListener("load", handleLoad);
    let i = 0;
    let choices = ["start"];
    function handleLoad(_event) {
        document.querySelector("#button1").addEventListener("click", leftChoice);
        document.querySelector("#button2").addEventListener("click", rightChoice);
        document.querySelector("#reset").addEventListener("click", reset);
    }
    function reset(_event) {
        i = 0;
        choices = ["start"];
        let video = document.querySelector("#video");
        let film = document.querySelector("#film");
        video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Einleitung.mp4");
        film.load();
    }
    function leftChoice(_event) {
        console.log("left was pressed");
        let video = document.querySelector("#video");
        let film = document.querySelector("#film");
        let list = document.querySelector("#buttonBox");
        i++;
        choices.push("a");
        if (choices[1] == "a" && i == 1) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Schrank.mp4");
        }
        if (choices[1] == "b" && choices[2] == "a" && i == 2) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/FluchtLichterwald.mp4");
        }
        if (choices[1] == "b" && choices[2] == "a" && choices[3] == "a" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/SireneMelodie.mp4");
            list.removeChild(list.children[1]);
            list.removeChild(list.children[0]);
        }
        if (choices[1] == "b" && choices[2] == "b" && choices[3] == "a" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Zauber.mp4");
            list.removeChild(list.children[1]);
            list.removeChild(list.children[0]);
        }
        if (choices[1] == "a" && choices[2] == "a" && i == 2) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Reden.mp4");
        }
        if (choices[1] == "a" && choices[2] == "a" && choices[3] == "a" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/BlickZurueck.mp4");
            list.removeChild(list.children[1]);
            list.removeChild(list.children[0]);
        }
        if (choices[1] == "a" && choices[2] == "b" && choices[3] == "a" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/HeimlicheRettung.mp4");
            list.removeChild(list.children[1]);
            list.removeChild(list.children[0]);
        }
        film.load();
    }
    function rightChoice(_event) {
        let video = document.querySelector("#video");
        let film = document.querySelector("#film");
        let list = document.querySelector("#buttonBox");
        i++;
        choices.push("b");
        if (choices[1] == "b" && i == 1) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/am Fenster.mp4");
        }
        if (choices[1] == "b" && choices[2] == "b" && i == 2) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/SandmannsHoehle.mp4");
        }
        if (choices[1] == "b" && choices[2] == "a" && choices[3] == "b" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/HilferufFee.mp4");
            list.removeChild(list.children[1]);
            list.removeChild(list.children[0]);
        }
        if (choices[1] == "b" && choices[2] == "b" && choices[3] == "b" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/neueWelt.mp4");
            list.removeChild(list.children[1]);
            list.removeChild(list.children[0]);
        }
        if (choices[1] == "a" && choices[2] == "b" && i == 2) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Sprung.mp4");
        }
        if (choices[1] == "a" && choices[2] == "a" && choices[3] == "b" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Wegrennen.mp4");
            list.removeChild(list.children[1]);
            list.removeChild(list.children[0]);
        }
        if (choices[1] == "a" && choices[2] == "b" && choices[3] == "b" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Angriff.mp4");
            list.removeChild(list.children[1]);
            list.removeChild(list.children[0]);
        }
        film.load();
    }
})(WeltDerTraeume || (WeltDerTraeume = {}));
//# sourceMappingURL=main.js.map