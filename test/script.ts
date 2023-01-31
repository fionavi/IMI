window.addEventListener("load", handleLoad);

let leftDiv: HTMLElement = document.getElementById("left");
let rightDiv: HTMLElement = document.getElementById("right");
let i: number = 0;
let choices: string[] = ["start"];


function handleLoad(_event: Event): void {

   // document.getElementById("left").addEventListener("click", leftInfo);
   // document.getElementById("right").addEventListener("click", rightInfo);

    document.addEventListener("keydown", keyWasPressed);

}

function keyWasPressed(_event: KeyboardEvent): void {
   /*  if (_event.altKey) {
        console.log("The ALT key was pressed!");
    } else {
        console.log("The ALT key was NOT pressed!");
    }

    if (_event.shiftKey) {
        console.log("The shift key was pressed!");
    } else {
        console.log("The shift key was NOT pressed!");
    } */


    // Gibt einfach die gedrückte Taste zurück
    if (_event.key) {
        console.log(_event.key);
        if (_event.key == "a") {
            console.log("The A key was pressed!");
            leftChoice(_event);
        }
        if (_event.key == "ä") {
            console.log("The Ä key was pressed!");
            leftChoice(_event);
    } else {
        console.log("No key was pressed!");
    }
}

}



function leftChoice(_event: Event): void {
    // let target: EventTarget = _event.target;
    i++;
    choices.push("a");

    console.log("welches DIV: links");

    /*  console.log("type: " + _event.type);
     console.log("target: " + target); */
    //console.log("current target: " + _event.currentTarget);
    //console.log("object: " + _event);

    playNextVideo();
}

function rightChoice(_event: Event): void {
    //let target: EventTarget = _event.target;
    i++;
    choices.push("b");

    console.log("welches DIV: rechts");

    /*  console.log("type: " + _event.type);
     console.log("target: " + target); */
    //console.log("current target: " + _event.currentTarget);
    //console.log("object: " + _event);

    playNextVideo();
}


function playNextVideo(): void {

    console.log("array Inhalt:" + " " + choices);
    let video: HTMLElement = document.getElementById("video");

    //side A

    if (choices[1] == "a" && i == 1) {

        console.log("play next Video: choice 1A");
        console.log("index: " + i);
        video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/EIA-SOSE20/master/Aufgabe%202/Media%20Portfolio/video4 (convert-video-online.com).mp4");
    }

    if (choices[1] == "a" && choices[2] == "a" && i == 2) {

        console.log("play next Video: choice 2A");
        console.log("index: " + i);
    }

    if (choices[1] == "a" && choices[2] == "b" && i == 2) {

        console.log("play next Video: choice 2B");
        console.log("index: " + i);
    }

    if (choices[1] == "a" && choices[2] == "a" && choices[3] == "a" && i == 3) {

        console.log("play next Video: choice 3A");
        console.log("index: " + i);
    }

    if (choices[1] == "a" && choices[2] == "a" && choices[3] == "b" && i == 3) {

        console.log("play next Video: choice 3B");
        console.log("index: " + i);
    }

    if (choices[1] == "a" && choices[2] == "b" && choices[3] == "a" && i == 3) {

        console.log("play next Video: choice 3C");
        console.log("index: " + i);
    }

    if (choices[1] == "a" && choices[2] == "b" && choices[3] == "b" && i == 3) {

        console.log("play next Video: choice 3D");
        console.log("index: " + i);
    }


    //side B

    if (choices[1] == "b" && i == 1) {

        console.log("play next Video: choice 1B");
        console.log("index: " + i);
    }

    if (choices[1] == "b" && choices[2] == "a" && i == 2) {

        console.log("play next Video: choice 2C");
        console.log("index: " + i);
    }

    if (choices[1] == "b" && choices[2] == "b" && i == 2) {

        console.log("play next Video: choice 2D");
        console.log("index: " + i);
    }

    if (choices[1] == "b" && choices[2] == "a" && choices[3] == "a" && i == 3) {

        console.log("play next Video: choice 3E");
        console.log("index: " + i);
    }

    if (choices[1] == "b" && choices[2] == "a" && choices[3] == "b" && i == 3) {

        console.log("play next Video: choice 3F");
        console.log("index: " + i);
    }

    if (choices[1] == "b" && choices[2] == "b" && choices[3] == "a" && i == 3) {

        console.log("play next Video: choice 3G");
        console.log("index: " + i);
    }

    if (choices[1] == "b" && choices[2] == "b" && choices[3] == "b" && i == 3) {

        console.log("play next Video: choice 3H");
        console.log("index: " + i);
    }



}




