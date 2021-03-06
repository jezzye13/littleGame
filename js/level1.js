//vars
var levelName1 = "";

var click = false;
var ballSpeed = 10;

//
var flag = false;

var obj1 = new block(120, 200, 25, 35, "purple") //obj 0

//level1
function level1(level) {
    levelName1 = level;
}

function renderL1() {
    document.title = "Little Game | " + levelName1;
    ctx.fillText(levelName1, 100, 20);
    
    //bulit
    ctx.fillStyle=ball.color;
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
    
    //player
    ctx.fillStyle=wall.color;
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    //obj1
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
        tobad(levelName1);
    }
    
    if(collision(ball, obj1)) {
        win.play();
        window.alert("Level " + gameState + " Achieved! \nPress OK to continue");
        sleep(750);
        click = false;
        ball.x = wall.x;
        gameState = 2;
    }
    
    bouns(100, 300, 2, obj1);
    
}

//mouse coords event
function mouse(event) {
  posMouse.x = event.clientX
  posMouse.y = event.clientY
}

//a = max top int; b = max down int e.x. bouns(100, 300, 2, obj1)
function bouns(pointA, pointB, speed, obj) {
    
    if (obj.y <= pointA) flag = true;
    if (obj.y >= pointB) flag = false;
    
    if (flag) {
        obj.y+=speed;
    } else {
        obj.y-=speed;
    }  
   
}

//collision return true or false
function collision(first, second) {
	return !(first.x > second.x + second.width ||
		first.x + first.width < second.x ||
		first.y > second.y + second.height ||
		first.y + first.height < second.y);
}

//entity
function block(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 0;
}

//x, y
function coord(x, y) {
    this.x = x;
    this.y = y;
}