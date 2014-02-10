//canvas
var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

//vars
var levelName2 = "";

var width = canvas.width;
var height = canvas.height;

var click = false;
var ballSpeed = 10;

var wall = new block(width / 10, 0, 32, 32, "#000"); //player
var ball = new block(wall.x, 0, 4, 4, "red"); //bulit
var obj0 = new block(100, 0, 20, 30, "purple") //obj 0
var posMouse = new coord(0, 0); //mouse

//level1
function level2(level) {
    levelName2 = level;
}

function renderL2() {
    ctx.fillText("@" + levelName2, 100, 10);
    
    //bulit
    ctx.fillStyle=ball.color;
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
    
    //player
    ctx.fillStyle=wall.color;
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    //obj0
    ctx.fillStyle=obj0.color;
    ctx.fillRect(obj0.x, obj0.y, obj0.width, obj0.height);
    
}

function updateL2() {
    if (posMouse.y > height) posMouse.y = height - wall.height; 
    if (posMouse.y > height - wall.height) posMouse.y = height - wall.height;
    
    wall.y = posMouse.y - (wall.height / 2);
    
    if (wall.y < 0) wall.y = 0;
    if (wall.y > height) wall.y = height;
    
    if (click) {
        ball.x+=ballSpeed;
    } else {
      ball.y = wall.y + (wall.height/2);  
    }
    
    if (ball.x > width + 10) {
        click = false;
        ball.x = wall.x;
    }
    
    obj0.y++;
    if(obj0.y > height) obj0.y = 0;
}

//mouse coords event
function mouse(event) {
  posMouse.x = event.clientX
  posMouse.y = event.clientY
}

//collision return true or false
function collision(first, second) {
	return !(first.x > second.x + second.width ||
		first.x + first.width < second.x ||
		first.y > second.y + second.height ||
		first.y + first.height < second.y);
}

//click
window.addEventListener("click", getPosition, false);

function getPosition(event) {
    click = true;
}

//entity
function block(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
}

//x, y
function coord(x, y) {
    this.x = x;
    this.y = y;
}