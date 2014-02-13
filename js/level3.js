//vars
var levelName3 = "";

var obj4 = new block(140, 200, 20, 30, "purple") //obj 4
var obj5 = new block(180, 200, 20, 30, "purple") //obj 5
obj5.speed = 2;
var obj6 = new block(240, 200, 20, 30, "purple") //obj 6

var bo4 = false;
var bo5 = false;
var bo6 = false;

//level1
function level3(level) {
    levelName3 = level;
}

function renderL3() {
    document.title = "Little Game | " + levelName3;
    ctx.fillText("@" + levelName3, 100, 10);
    
    //bulit
    ctx.fillStyle=ball.color;
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
    
    //player
    ctx.fillStyle=wall.color;
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    //obj4
    ctx.fillStyle=obj4.color;
    ctx.fillRect(obj4.x, obj4.y, obj4.width, obj4.height);
    
    //obj5
    ctx.fillStyle=obj5.color;
    ctx.fillRect(obj5.x, obj5.y, obj5.width, obj5.height);
    
    //obj6
    ctx.fillStyle=obj6.color;
    ctx.fillRect(obj6.x, obj6.y, obj6.width, obj6.height);
}

function updateL3() {
    //do not touch
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
        tobad(levelName3);
    }
    //
    
    if(bo4 && bo5 && bo6) {
        window.alert("Level " + gameState + " Achieved! \nPress OK to continue");
        ball.x = wall.x;
        sleep(750);
        click = false;
        gameState = 0;
    }

    if(collision(ball, obj4)) bo4 = true;
    if(collision(ball, obj5)) bo5 = true;
    if(collision(ball, obj5)) bo6 = true;
    
    bouns(100, 300, 2, obj4);
    bouns(100, 300, 2, obj6);
    
    //obj5
    obj5.y+=obj5.speed;
    if(obj5.y > height + obj5.height + 3) obj5.y = 0;
    
}
