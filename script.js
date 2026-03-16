// dom elements
const img = document.getElementById("img");
const cap = document.getElementById("cap");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const karmaDisplay = document.getElementById("karmaDisplay");
 
//game variables
let karma = 0;
let currentNode = "start";

// story nodes
const story = {


start:{
text:"You finish breakfast. The campfire is still warm. Do you add more water?",
image:"images/campfire_embers.jpg",
choices:[
{text:"Add more water",next:"trail",karma:2},
{text:"Leave it",next:"smoke",karma:-2}
]
},

smoke:{
text:"While packing your tent you smell smoke coming from your fire.",
image:"images/smoke.jpg",
choices:[
{text:"Add more water",next:"trail",karma:1},
{text:"Ignore it",next:"fire",karma:-5}
]
},

// ending
fire:{
text:"Soon after leaving, a forest fire begins behind you.",
image:"images/fire.webp",
choices:[
{text:"Restart",next:"start",karma:0},
{text:"",next:"",karma:0}
]
},

trail:{
text:"You reach a split in the trail.",
image:"images/trail.jpg",
choices:[
{text:"Keep walking",next:"lost",karma:-2},
{text:"Check your map",next:"forest",karma:2}
]
},

lost:{
text:"You wander off the trail.",
image:"images/lost.jpg",
choices:[
{text:"Go back",next:"moreLost",karma:-1},
{text:"Stay still",next:"findWay",karma:2}
]
},

findWay:{
text:"Using landmarks you find the trail again.",
image:"images/findway.jpg",
choices:[
{text:"Continue hiking",next:"forest",karma:+1},
{text:"Continue hiking",next:"forest",karma:+1}
]
},

moreLost:{
text:"You cannot find the trail anymore.",
image:"images/morelost.jpg",
choices:[
{text:"Keep moving",next:"noises",karma:-3},
{text:"Stop walking",next:"found",karma:1}
]
},

// ending
found:{
text:"A ranger eventually finds you and guides you out.",
image:"images/found.jpg",
choices:[
{text:"Restart",next:"start",karma:0},
{text:"",next:"",karma:0}
]
},

noises:{
text:"You hear footsteps behind you.",
image:"images/noises.avif",
choices:[
{text:"Turn around",next:"getGot",karma:-2},
{text:"Keep going",next:"noises2",karma:1}
]
},

noises2:{
text:"The footsteps get closer.",
image:"images/noises2frfr.jpeg",
choices:[
{text:"Investigate",next:"investigate",karma:0},
{text:"Keep going",next:"getgot",karma:0}
]
},

//ending
getGot:{
text:"Something sprints at you from the trees.",
image:"images/noises2.jpeg",
choices:[
{text:"Restart",next:"start",karma:0},
{text:"",next:"",karma:0}
]
},

//ending
investigate:{
text:"You see something like a deer but horribly wrong.",
image:"images/investigate.webp",
choices:[
{text:"Restart",next:"start",karma:0},
{text:"",next:"",karma:0}
]
},

forest:{
text:"You peel an orange while hiking.",
image:"images/forest.jpg",
choices:[
{text:"Leave peel on trail",next:"rocks",karma:-2},
{text:"Pack it with trash",next:"rocks",karma:2}
]
},

rocks:{
text:"You see stacked rocks by the river.",
image:"images/rocks.jpg",
choices:[
{text:"Add a rock",next:"water",karma:-2},
{text:"Knock them down",next:"water",karma:2}
]
},

water:{
text:"The river water looks clear.",
image:"images/water.jpg",
choices:[
{text:"Filter it",next:"dinner",karma:1},
{text:"Drink it",next:"sick",karma:-3}
]
},

// ending
sick:{
text:"You become very sick from the water.",
image:"images/sick.jpg",
choices:[
{text:"Restart",next:"start",karma:0},
{text:"",next:"",karma:0}
]
},

dinner:{
text:"While cooking dinner you hear a friend scream.",
image:"images/dinner.jpg",
choices:[
{text:"Ignore it",next:"leftovers",karma:0},
{text:"Run to them",next:"getgot2",karma:0}
]
},


//ednig 
getgot2:{
text:"The shadow waiting there is not your friend.",
image:"images/getgot2.jpg",
choices:[
{text:"Restart",next:"start",karma:0},
{text:"",next:"",karma:0}
]
},

leftovers:{
text:"You have leftover food.",
image:"images/leftovers.jpg",
choices:[
{text:"Leave it in tent",next:"bears",karma:-4},
{text:"Hang it in tree",next:"gg",karma:2}
]
},

//ending
gg:{
text:"You sleep peacefully. Good ending.",
image:"images/inside_tent.webp",
choices:[
{text:"Restart",next:"start",karma:0},
{text:"",next:"",karma:0}
]
},

//ending
bears:{
text:"You wake up with a bear in your tent.",
image:"images/bears.jpg",
choices:[
{text:"Restart",next:"start",karma:0},
{text:"",next:"",karma:0}
]
}

}

// Display story node
function showNode(nodeName){    
    // try except block
    try{
        const node = story[nodeName];
        if(!node){
        throw new Error("Node not found");
        }
        currentNode = nodeName;
        cap.textContent = node.text;
        img.src = node.image;
        opt1.textContent = node.choices[0].text;
        opt2.textContent = node.choices[1].text;
    }catch(error){
        console.error(error);
        cap.textContent = "error occurred";
}

}

// update karma display
function updateKarmaDisplay(){
    karmaDisplay.textContent = "Karma: " + karma;
}



// Handle player choices
function handleChoice(choiceIndex){
    const choice = story[currentNode].choices[choiceIndex];
    karma += choice.karma;
    updateKarmaDisplay();

    if(choice.next !== ""){
        showNode(choice.next);
    }
}

// Restart game
function restartGame(){
    karma = 0;
    updateKarmaDisplay();
    showNode("start");
}

// Preload images
function preloadImages(){
    for(const node in story){
        const imgPreload = new Image();
        imgPreload.src = story[node].image;
    }
}

// event listeners 

// user choices handled
opt1.addEventListener("click", ()=> handleChoice(0));
opt2.addEventListener("click", ()=> handleChoice(1));

// enlarges button when mouse hovers over it
opt1.addEventListener("mouseover", ()=> opt1.style.transform="scale(1.05)");
opt1.addEventListener("mouseout", ()=> opt1.style.transform="scale(1)");
opt2.addEventListener("mouseover", ()=> opt2.style.transform="scale(1.05)");
opt2.addEventListener("mouseout", ()=> opt2.style.transform="scale(1)");

// lowers the opacity of the image when hoved over
img.addEventListener("mouseover", ()=> img.style.opacity=.9);
img.addEventListener("mouseout", ()=> img.style.opacity=1);

// 1 and 2 keys can be used to select option
document.addEventListener("keydown",function(e){
    if(e.key==="1"){
        opt1.click()
    } else if(e.key==="2"){
        opt2.click()
    } 
})

// GAME START
preloadImages()
updateKarmaDisplay()
showNode("start")