//vars
var levelName2 = "";

var obj2 = new block(140, 0, 20, 30, "purple") //obj 2
var obj3 = new block(180, 0, 20, 30, "purple") //obj 3

var bo1 = false;
var bo2 = false;

//level1
function level2(level) {
    levelName2 = level;
}

function renderL2() {
    document.title = "Little Game | " + levelName2;
    ctx.fillText("@" + levelName2, 100, 10);
    
    //bulit
    ctx.fillStyle=ball.color;
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
    
    //player
    ctx.fillStyle=wall.color;
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    //obj2
    ctx.fillStyle=obj2.color;
    ctx.fillRect(obj2.x, obj2.y, obj2.width, obj2.height);
    
    //obj5
    ctx.fillStyle=obj3.color;
    ctx.fillRect(obj3.x, obj3.y, obj3.width, obj3.height);
}

function updateL2() {
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
        tobad(levelName2);
    }
    //

    if(bo1 && bo2) {
        window.alert("Level " + gameState + " Achieved! \nPress OK to continue");
        ball.x = wall.x;
        sleep(750);
        click = false;
        gameState = 3;
    }

    if(collision(ball, obj2)) bo1 = true;
    if(collision(ball, obj3)) bo2 = true;
    
    bouns(100, 300, 2, obj2);
    bouns(100, 300, 2.5, obj3);
    
}
