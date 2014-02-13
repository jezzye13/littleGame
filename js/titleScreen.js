//vars
var levelName0 = "";

var clickscreen = false;

//bg
var bg = "";
var Sprite;

//level1
function titleScreen(level, bg) {
    Sprite = new Image();
    Sprite.src = bg;
    levelName0 = level;
    document.title = "Little Game | Click!";
}

function renderL0() {
    //ctx.drawImage(Sprite, 0, 0);
    ctx.fillText("@" + levelName0, width / 2, height / 2);
}

function updateL0() {
    if (clickscreen) {
    	sleep(750);
    	click = false;
    	gameState = 1;
    }

    ball.x = wall.x;
}

//click
canvas.addEventListener("click", getPosition, false);

function getPosition(event) {
    clickscreen = true;
}
