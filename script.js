const img = document.getElementById("img");
const cap = document.getElementById("cap");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const cont = document.getElementById("cont");

let karma = 0
let currentNode = 0

const story = {

start: {
    text: "You finish making your breakfast. You tried to put out the fire but it is still warm. Do you put more water on it?",
    image: "images/campfire_embers",
    choices: [
        { text: "Add more water", next: "safe", karma: +1 },
        { text: "Leave it", next: "forest", karma: -2 }
    ]
},

safe: {
    text: "You responsibly put out the fire.",
    image: "",
    choices: [
        { text: "Continue hiking", next: "trail", karma: 0 }
    ]
},

forest: {
    text: "You walk into the forest. _.",
    image: "",
    choices: [
        { text: "Keep going", next: "_", karma}
    ]
},

};

function showNode(nodeIndex){
    if(karma <= -10){
        img.src = "";
        cap.textContent = "BAD ENDING";
        opt1.hidden = true;
        opt2.hidden = true;
        cont.hidden = true;
        return;
    }

    let node = storyNodes[nodeIndex];
    currentNode = nodeIndex;

    img.src = node.image;
    cap.textContent = node.caption;

    if(node.options.length === 0){
        opt1.hidden = true;
        opt2.hidden = true;
        return;
    }

    opt1.hidden = false;
    opt2.hidden = false;

    opt1.textContent = node.options[0].text;
    opt2.textContent = node.options[1].text;
}

cont.addEventListener("click", function(){
    cont.hidden = true;
    showNode(0);
});

opt1.addEventListener("click", function(){
    let option = storyNodes[currentNode].options[0];
    karma += option.karma;
    showNode(option.next);
});

opt2.addEventListener("click", function(){
    let option = storyNodes[currentNode].options[1];
    karma += option.karma;
    showNode(option.next);
});