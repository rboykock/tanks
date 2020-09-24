export default function Vector (x,y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function (another) {
    return new Vector(this.x + another.x, this.y + another.y);
}

Vector.prototype.sub = function (another) {
    return new Vector(this.x - another.x, this.y - another.y);
}