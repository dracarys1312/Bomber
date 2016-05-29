/**
 * Created by Son Nui on 5/16/2016.
 */
var context;
window.onload = function () {
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    // context.fillStyle = "#FFFFFF";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    // // gameDrawer(context);
    gameStart();
    // drawMap(context);
    //
    // initSocketClient();
    gameDrawer(context);
    setInterval(gameLoop, 17);

};
var player;
function gameStart() {
    player = new Bomber(0, 0);
}

var gameLoop = function () {
    gameUpdate();
    gameDrawer(context);
};

function gameDrawer(context) {
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = 'white';
    player.draw(context);
}

function gameUpdate() {
    player.update();
}

window.onkeydown = function (e) {
    switch (e.keyCode) {
        case 65:
            player.move(3);
            break;
        case 68:
            player.move(4);
            break;
        case 87:
            player.move(1);
            break;
        case 83:
            player.move(2);
            break;
        case 32:
            player.shot();
            break;
    }
};

window.onkeyup = function (e) {
    switch (e.keyCode){
        case 65://a
            if(player.speedX < 0){
                player.speedX = 0;
            }
            break;
        case 68://d
            if(player.speedX > 0){
                player.speedX = 0;
            }
            break;
        case 83://s
            if(player.speedY > 0){
                player.speedY = 0;
            }
            break;
        case 87://w
            if(player.speedY < 0){
                player.speedY = 0;
            }
            break;
    }
};