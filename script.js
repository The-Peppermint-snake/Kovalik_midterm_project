//add inventory?
//At each ending the image should be a PSA about the mistake including supernatural
//karma doesn't apply to supernatueral evetns
//for some choices add popup about doing good or bad if its not a ending
const img = document.getElementById("img");
const cap = document.getElementById("cap");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");

let karma = 0
let currentNode = 0

const story = {

start: {
    text: "You finish making your breakfast. You tried to put out the fire but it is still warm. Do you put more water on it?",
    image: "images/campfire_embers",
    choices: [
        { text: "Add more water", next: "trail", karma: +2 },
        { text: "Leave it", next: "smoke", karma: -2 }
    ]
},

smoke: {
    text: "As you are packing up your tent you start to smell smoke. You look and its coming from your fire. Do you add more water?",
    image: "",
    choices: [
        {text: "Add more water", next: "trail", karma: +1},
        {text: "LEAVE IT its fine", next: "fire", karma: -5}
    ]
},

//make this a bad ending
fire: {
    text: "After leaving the camp grounds and going down the trail you start to hear some crackling behind you. You turn around and see a forest fire rushing at you.",
    image: "",
    choices: [
        {text: "", next: "", karma: 0},
        {text: "", next: "", karma: 0}
    ]
},

trail: {
    text: "You walk into the forest and come across a split in the trail. You think you know the way, do you still check your map?",
    image: "",
    choices: [
        { text: "Keep going", next: "forest", karma: -2},
        { text: "Check map", next: "lost", karma: +2}
    ]
},

lost: {
    text: "You go down what you though was a split in the trail but soon you lose your way.",
    image: "",
    choices: [
        {text: "Go back the way you came", next: "moreLost", karma: -1},
        {text: "Stay where you are", next: "findWay", karma: +2}
    ]
},

findWay: {
    text: "After taking out your map and checking for landmarks you are able to see where the trail is.",
    image: "",
    choices: [
        {text: "Yay", next: "forest", karma: 0},
        {text: "Yippie", next: "forest", karma: 0}
    ]
},

moreLost: {
    text: "You walk back the way you came but you cant seem to find the trail.",
    image: "",
    choices: [
        {text: "Keep going", next: "noises", karma: -3},
        {text: "Stop walking", next: "found", karma: +1}
    ]
},

//ending
found: {
    text: "You stay where you are for a hour before you are found by a ranger who then guides you out of the park",
    image: "",
    choices: [
        {text: "", next: "", karma: 0},
        {text: "", next: "", karma: 0}
    ]
},

noises: {
    text: "As you keep walking you think you hear something following you but every time you stop you don't hear anything.",
    image: "",
    choices: [
        {text: "Turn around", next: "getGot", karma: 0},
        {text: "Keep going forward", next: "noises2", karma: 0}
    ]
},

noises2: {
    text: "As you keep walking the footsteps behind you start to get closer.",
    image: "",
    choices: [
        {text: "investigate", next: "investigate", karma: 0},
        {text: "Keep going", next: "forest", karma: 0}
    ]
},

//ending
getGot: {
    text: "As you turn around you think you see someone quickly step behind a tree. Then they sprint out and run at you.",
    image: "",
    choices: [
        {text: "", next: "", karma: 0},
        {text: "", next: "", karma: 0}
    ]
},

//ending
investigate: {
    text: "You whip around and see what can only be decribed like a deer that has gone horribly wrong",
    image: "",
    choices: [
        {text: "", next: "", karma: 0},
        {text: "", next: "", karma: 0}
    ]
},

forest: {
    text: "You peel a orange as you walk. What do you do with the peel?",
    image: "",
    choices: [
        {text: "Leave it on the trail its a plant", next: "rocks", karma: -2},
        {text: "Put it with the rest of your trash", next: "rocks", karma: +2}
    ]
},

rocks: {
    text: "You countinue and come accross a river. As you take a break and see some rock stacks.",
    image: "",
    choices: [
        {text: "Add one of your own", next: "water", karma: -2},
        {text: "Knock them down", next: "water", karma: +2}
    ]
},

water: {
    text: "After you sit down of a bit you start to get more water. The water looks clean and clear. Do you still filter it?",
    image: "",
    choices: [
        {text: "Yes", next: "dinner", karma: +1},
        {text: "No", next: "sick", karma: -3}
    ]
},

//ending
sick: {
    text: "After drinking some of the water you start to feel unwell.",
    image: "",
    choices: [
        {text: "", next: "", karma: 0},
        {text: "", next: "", karma: 0}
    ]
},

dinner: {
    text: "As you stop for the night you hear one of your friends call scream for help",
    image: "",
    choices: [
        {text: "Don't react", next: "leftovers", karma: 0},
        {text: "Run to them", next: "getgot2", karma: 0}
    ]
},

//ending
getgot2: {
    text: "You coem into a cl",
    image: "",
    choices: [
        {text: "", next: "", karma: 0},
        {text: "", next: "", karma: 0}
    ]
},

leftovers: {
    text: "You finish making dinner and you still have some food leftover. What do you do with it?",
    image: "",
    choices: [
        {text: "Put it in the tent", next: "bears", karma: -4},
        {text: "Hang it from the tree", next: "gg", karma: +2}
    ]
},

//ending
gg: {
    text: "You have a good nights rest and will wake up tommarow feeling well rested.",
    image: "",
    choices: [
        {text: "", next: "", karma: 0},
        {text: "", next: "", karma: 0}
    ]
},

//ending
bears: {
    text: "You wake up with a bears inside your tent :(",
    image: "",
    choices: [
        {text: "", next: "", karma: 0},
        {text: "", next: "", karma: 0}
    ]
},

};

function showNode(i){
    if(karma <= -10){
        img.src = "";
        cap.textContent = "BAD ENDING";
        opt1.hidden = true;
        opt2.hidden = true;
        return;
    }

    let node = storyNodes[i];
    currentNode = i;

    img.src = node.image;
    cap.textContent = node.caption;

    if(node.options.length === 0){
        opt1.hidden = true;
        opt2.hidden = true;
        return;
    }

    opt1.textContent = node.options[0].text;
    opt2.textContent = node.options[1].text;
}

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