//canvas
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

//vars
var width = canvas.width;
var height = canvas.height;

var gameState = 0; //0 = title screen //1 = level1 //2 = level2 //3 = level3

var level1 = new level1("Level 1");
var level2 = new level2("Level 2");
var level3 = new level3("Level 3");
var titleScreen = new titleScreen("Click on the screen!", "null");

var wall = new block(width / 10, 0, 32, 32, "#000"); //player
var ball = new block(wall.x, 0, 4, 4, "red"); //bulit
var posMouse = new coord(0, 0); //mouse

//update
function update() {
    if(gameState === 0) updateL0();
    if(gameState === 1) updateL1();
    if(gameState === 2) updateL2();
    if(gameState === 3) updateL3();
}

//render
function render() {
    //cls
    ctx.clearRect (0 ,0 ,width , height);
    
    //levels render
    if(gameState === 0) renderL0();
    if(gameState === 1) renderL1();
    if(gameState === 2) renderL2();
    if(gameState === 3) renderL3();
    
    //reset
    ctx.fillStyle="#000";
}

//when fail
function tobad(level) {
    window.alert("To Bad! \n" + level + "\n Press OK to continue");
    sleep(750);
    clickscreen = false;
    click = false;
    gameState = 0;
}

//spleep function
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

//intervall
setInterval(function() {
    update();
    render();
}, 1000/60);