//karma system? to low would trigger things
const img = document.getElementById("img");
const cap = document.getElementById("cap");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const cont = document.getElementById("cont");

let outside_tent = {
    image: "images/campfire_embers.jpg",
    caption: "You finish making your breakfast. You tried to put out the fire but it is still warm. Do you put more water on it?"
    //hid cont and unhide opt1 and opt2
}

let storyNodes = [outside_tent]

cont.addEventListener("onclick", displayScene(0));

function displayScene(i) {
    let node = storyNodes[i];
    img.src = node.image;
    cap.textContent = node.caption
}