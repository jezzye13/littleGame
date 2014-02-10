//vars
var levelName1 = "";

var click = false;
var ballSpeed = 10;

var obj1 = new block(120, 0, 25, 35, "purple") //obj 0

//level1
function level1(level) {
    levelName1 = level;
}

function renderL1() {
    document.title = "Little Game | " + levelName1;
    ctx.fillText("@" + levelName1, 100, 10);
    
    //bulit
    ctx.fillStyle=ball.color;
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
    
    //player
    ctx.fillStyle=wall.color;
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    //obj0
    ctx.fillStyle=obj1.color;
    ctx.fillRect(obj1.x, obj1.y, obj1.width, obj1.height);
    
}

function updateL1() {
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
    
    if(collision(ball, obj1)) {
        window.alert("Level 1 Achieved! \nPress OK to continue");
        gameState = 2;
    }
    
    obj1.y++;
    if(obj1.y > height) obj1.y = 0;
    
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