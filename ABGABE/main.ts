namespace WeltDerTraeume {

    window.addEventListener("load", handleLoad);

    let i: number = 0;
    let choices: string[] = ["start"];

    function handleLoad(_event: Event): void {

       /*  let video: HTMLVideoElement = document.querySelector("#video");
        video.load(); */

        document.querySelector("#button1").addEventListener("click", leftChoice);
        document.querySelector("#button2").addEventListener("click", rightChoice);
    }

    function leftChoice(_event: Event): void {
        console.log("left was pressed");
        let video: HTMLVideoElement = document.querySelector("#video");
        let film: HTMLVideoElement = document.querySelector("#film");


        i++;
        choices.push("a");

        if (choices[1] == "a" && i == 1) {

            console.log("play next Video: choice 1A");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/am Fenster.mp4");
        }

        if (choices[1] == "a" && choices[2] == "a" && i == 2) {

            console.log("play next Video: choice 2A");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/FluchtLichterwald.mp4");

        }

        if (choices[1] == "a" && choices[2] == "b" && i == 2) {

            console.log("play next Video: choice 2B");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/SandmannsHoehle.mp4");
        }

        if (choices[1] == "a" && choices[2] == "a" && choices[3] == "a" && i == 3) {

            console.log("play next Video: choice 3A");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/SireneMelodie.mp4");

        }

        if (choices[1] == "a" && choices[2] == "a" && choices[3] == "b" && i == 3) {

            console.log("play next Video: choice 3B");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/HilferufFee.mp4");

        }

        if (choices[1] == "a" && choices[2] == "b" && choices[3] == "a" && i == 3) {

            console.log("play next Video: choice 3C");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Zauber.mp4");
        }

        if (choices[1] == "a" && choices[2] == "b" && choices[3] == "b" && i == 3) {

            console.log("play next Video: choice 3D");
            console.log("index: " + i);
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/neueWelt.mp4");

        }

        film.load();
    }


    function rightChoice(_event: Event): void {

        let video: HTMLVideoElement = document.querySelector("#video");
        let film: HTMLVideoElement = document.querySelector("#film");
        i++;
        choices.push("b");

        console.log("welches DIV: rechts");

        if (choices[1] == "b" && i == 1) {

            console.log("play next Video: choice 1B");
            console.log("index: " + i);
            video.setAttribute("src", "");
        }

        if (choices[1] == "b" && choices[2] == "a" && i == 2) {

            console.log("play next Video: choice 2C");
            console.log("index: " + i);
            video.setAttribute("src", "");
        }

        if (choices[1] == "b" && choices[2] == "b" && i == 2) {

            console.log("play next Video: choice 2D");
            console.log("index: " + i);
            video.setAttribute("src", "");
        }

        if (choices[1] == "b" && choices[2] == "a" && choices[3] == "a" && i == 3) {

            console.log("play next Video: choice 3E");
            console.log("index: " + i);
            video.setAttribute("src", "");
        }

        if (choices[1] == "b" && choices[2] == "a" && choices[3] == "b" && i == 3) {

            console.log("play next Video: choice 3F");
            console.log("index: " + i);
            video.setAttribute("src", "");
        }

        if (choices[1] == "b" && choices[2] == "b" && choices[3] == "a" && i == 3) {

            console.log("play next Video: choice 3G");
            console.log("index: " + i);
            video.setAttribute("src", "");
        }

        if (choices[1] == "b" && choices[2] == "b" && choices[3] == "b" && i == 3) {

            console.log("play next Video: choice 3H");
            console.log("index: " + i);
            video.setAttribute("src", "");
        }


        film.load();
    }




}