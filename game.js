export default function Game(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
}

Game.prototype.draw = function () {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0,0,this.width, this.height)
}