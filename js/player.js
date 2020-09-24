import Vector from "./vector.js";

export default function Player(name, posX, posY, sprite) {
    this.name = name;
    this.pos = new Vector(posX, posY);
    this.angle = 0.0;

    this.moveVelocity = new Vector(2, 5);
    this.angleVelocity = 2;

    this.sprite = sprite
}

Player.prototype.draw = function (ctx) {
    ctx.save()

    ctx.translate(this.pos.x, this.pos.y)
    ctx.rotate(this.angle * Math.PI / 180)
    ctx.translate(-this.sprite.width/2, -this.sprite.height/2)
    ctx.drawImage(this.sprite, 0, 0)

    ctx.restore()
}

Player.prototype.moveUp = function () {
    //this.pos.y = this.pos.y - this.moveVelocity
    this.pos = this.pos.add(this.moveVelocity);
}

Player.prototype.moveDown = function () {
    //this.pos.y = this.pos.y + this.moveVelocity
    this.pos = this.pos.sub(this.moveVelocity);
}

Player.prototype.moveLeft = function () {
    //this.pos.x = this.pos.x - this.velocity
    this.angle = this.angle - this.angleVelocity;
}

Player.prototype.moveRight = function () {
    //this.pos.x = this.pos.x + this.velocity
    this.angle = this.angle + this.angleVelocity;
}