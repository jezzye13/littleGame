//canvas
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

//vars
var width = canvas.width;
var height = canvas.height;

var gameState = 0; //0 = title screen //1 = level1 //2 = level2

var level1 = new level1("Level-1");
var level2 = new level2("Level-2");
var titleScreen = new titleScreen("Click on the screen!", "null");

//update
function update() {
    if(gameState === 0) updateL0();
    if(gameState === 1) updateL1();
    if(gameState === 2) updateL2();
}

//render
function render() {
    //cls
    ctx.clearRect (0 ,0 ,width , height);
    
    //levels render
    if(gameState === 0) renderL0();
    if(gameState === 1) renderL1();
    if(gameState === 2) renderL2();
    
    //reset color
    ctx.fillStyle="#000";
}

//intervall
setInterval(function() {
    update();
    render();
}, 1000/60);