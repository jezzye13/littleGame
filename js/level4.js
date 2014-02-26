//vars
var levelName4 = "";
var colorbg = "#fff";

var mad = false;
var shoot = false;
var bossHit = 20;

var obj7 = new block(267, 200, 40, 60, "purple");
var obj8 = new block(obj7.x, 0, 35, 4, "yellow");
obj8.speed = 3.4;

//level1
function level4(level) {
    levelName4 = level;
}

function renderL4() {
    
    //bg
    ctx.fillStyle=colorbg;
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle="#000";
    ctx.fillText(levelName4 + " Boss: " + bossHit + "/20", 100, 20);
    
    //bulit
    ctx.fillStyle=ball.color;
    ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
    
    //player
    ctx.fillStyle=wall.color;
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    
    //obj8 boss ball obj
    ctx.fillStyle=obj8.color;
    ctx.fillRect(obj8.x, obj8.y, obj8.width, obj8.height);
    
    //obj7
    ctx.fillStyle=obj7.color;
    ctx.fillRect(obj7.x, obj7.y, obj7.width, obj7.height);
    
}

function updateL4() {
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
    
    if (ball.x > width + 10 && !mad) {
        click = false;
        ball.x = wall.x;
        tobad(levelName4);
    }
    //

    if (ball.x > width + 10) {
        click = false;
        ball.x = wall.x;
    }
    
    if(mad) {
       bouns(20, 330, 4.5, obj7);
       document.title = "Little Game | " + levelName4 + " | Boss: " + bossHit + "/20";
       document.getElementById('bosshitpoints').innerHTML = "Bosshealth:" + bossHit;
    } else {
       bouns(120, 190, 2, obj7);
       document.title = "Little Game | " + levelName4;
       colorbg = "#fff";
    }
    
    if (shoot && mad) {
        laser.play();
        obj8.x-=obj8.speed;
    } else {
        obj8.y = obj7.y + (obj7.height/2);
    }
    
    if (obj8.x < 0) {
        obj8.x = obj7.x;
    }
    
    if(collision(ball, obj7)) {
        bossHit--;
        mad = true;
        shoot = true;
    }
    
    if(collision(obj8, wall)) {
        tobad(levelName4);
    }
    
    if(bossHit <= 0 && mad) {
        bossHit = 0;
        bossWin.play();
        window.alert("You WON! \n Get to: End\n Press OK to continue");
        sleep(750);
        clickscreen = false;
        click = false;
        gameState = 0;
        document.getElementById('bosshitpoints').innerHTML = "";
    }
    
}

setInterval(function() {
    if(mad) obj7.color = "black";
    if(mad) colorbg = "red";
},175);

setInterval(function() {
    if(mad) obj7.color = "red";
    if(mad) colorbg = "white";
},150);
