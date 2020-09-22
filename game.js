export default function Game(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
}

Game.prototype.update = function () {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0,0,this.width, this.height)

    console.log("step")

    requestAnimationFrame(() => this.update())
}

Game.prototype.run = function () {

    requestAnimationFrame(() => this.update())
}