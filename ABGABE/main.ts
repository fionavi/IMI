namespace WeltDerTraeume {

    window.addEventListener("load", handleLoad);

    let i: number = 0;
    let choices: string[] = ["start"];



    function handleLoad(_event: Event): void {
        document.querySelector("#button1").addEventListener("click", leftChoice);
        document.querySelector("#button2").addEventListener("click", rightChoice);
        document.querySelector("#reset").addEventListener("click", reset);
    }


    function reset(_event: Event): void {
        i = 0;
        choices = ["start"];
        let video: HTMLVideoElement = document.querySelector("#video");
        let film: HTMLVideoElement = document.querySelector("#film");

        video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Einleitung.mp4");
        film.load();
    }


    function leftChoice(_event: Event): void {
        console.log("left was pressed");
        let video: HTMLVideoElement = document.querySelector("#video");
        let film: HTMLVideoElement = document.querySelector("#film");

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
        }

        if (choices[1] == "b" && choices[2] == "b" && choices[3] == "a" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Zauber.mp4");
        }

        if (choices[1] == "a" && choices[2] == "a" && i == 2) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Reden.mp4");
        }

        if (choices[1] == "a" && choices[2] == "a" && choices[3] == "a" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/BlickZurueck.mp4");
        }

        if (choices[1] == "a" && choices[2] == "b" && choices[3] == "a" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/HeimlicheRettung.mp4");
        }

        film.load();
    }


    function rightChoice(_event: Event): void {

        let video: HTMLVideoElement = document.querySelector("#video");
        let film: HTMLVideoElement = document.querySelector("#film");
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
        }

        if (choices[1] == "b" && choices[2] == "b" && choices[3] == "b" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/neueWelt.mp4");
        }

        if (choices[1] == "a" && choices[2] == "b" && i == 2) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Sprung.mp4");
        }

        if (choices[1] == "a" && choices[2] == "a" && choices[3] == "b" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Wegrennen.mp4");
        }

        if (choices[1] == "a" && choices[2] == "b" && choices[3] == "b" && i == 3) {
            video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/IMI/master/ABGABE/media/Angriff.mp4");
        }

        film.load();
    }

}