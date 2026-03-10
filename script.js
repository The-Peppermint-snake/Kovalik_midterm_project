//karma system? to low would trigger things
const img = document.getElementById("img");
const caption = document.getElementById("cap");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const cont = document.getElementById("cont");

let outside_tent = {
    img: "",
    cap: ""
}

let storyNodes = [outside_tent]

cont.addEventListener("click", displayScene());

function displayScene(i) {
    let node = storyNodes[i];
    img.src = node.img;
    caption.textContent = node.cap
}