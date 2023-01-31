
window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void {
   
    let video: HTMLVideoElement = document.querySelector("#video");
    video.load();

    document.querySelector("#button1").addEventListener("click", leftChoice);
    document.querySelector("#button2").addEventListener("click", rightChoice);
}

function leftChoice(_event: Event): void {
    console.log("left was pressed");
    let video: HTMLVideoElement = document.querySelector("#video");
    let film: HTMLVideoElement = document.querySelector("#film");
    
    console.log(video.getAttribute("src"));
    video.setAttribute("src", "https://raw.githubusercontent.com/fionavi/EIA-SOSE20/master/Aufgabe%202/Media%20Portfolio/video3 (convert-video-online.com).mp4");
    console.log(video.getAttribute("src"));
    film.load();
}

function rightChoice(_event: Event): void {
    console.log("right was pressed");
}