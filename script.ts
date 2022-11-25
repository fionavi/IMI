console.log("hello");


window.addEventListener("load", handleLoad);


function handleLoad(_event: Event): void {

    window.addEventListener("click", logInfo);
}



function logInfo(_event: Event): void {
    
    console.log("type: " + _event.type);
    console.log("target: " + _event.target);
    console.log("current target: " + _event.currentTarget);
    console.log("object: " + _event);
}




