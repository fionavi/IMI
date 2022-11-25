"use strict";
console.log("hello");
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    window.addEventListener("click", logInfo);
}
function logInfo(_event) {
    console.log("type: " + _event.type);
    console.log("target: " + _event.target);
    console.log("current target: " + _event.currentTarget);
    console.log("object: " + _event);
}
//# sourceMappingURL=script.js.map