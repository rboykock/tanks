import Player from "./player.js";

export default function Game(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
}

Game.prototype.update = function () {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0,0,this.width, this.height)

    this.player.draw(this.ctx)

    requestAnimationFrame(() => this.update())
}

Game.prototype.run = function () {
    let tankSprite = new Image()
    tankSprite.src = './assets/tank.png'

    console.log(tankSprite.width+' '+tankSprite.height);

    this.player = new Player("Rost", 100, 100, tankSprite)

    requestAnimationFrame(() => this.update())
}

Game.prototype.handleKey = function (event) {
    let key = event.key.toLowerCase();

    if (key === 'w' || key === 'arrowup') {
        this.player.moveUp();
    }

    if (key === 's' || key === 'arrowdown' ) {
        this.player.moveDown();
    }

    if (key === 'a' || key === 'arrowleft') {
        this.player.moveLeft();
    }

    if (key === 'd' || key === 'arrowright' ) {
        this.player.moveRight();
    }

    if (key === ' ') {
        console.log("FIRE")
    }
}

Game.prototype.handleMouse = function (event) {
   // console.log("X:"+event.pageX+" Y:"+event.pageY);
}