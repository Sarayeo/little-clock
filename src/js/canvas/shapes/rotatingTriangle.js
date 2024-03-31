// RotatingTriangle.js
export class RotatingTriangle {
    constructor(x, y, size, startAngle, endAngle) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.vAngular = randomRange(-5, 5); // radian/second
    }

    update(elapsedTime, speed = 1) {
        this.startAngle += elapsedTime * this.vAngular * speed;
        this.endAngle += elapsedTime * this.vAngular * speed;
    }

    draw(context) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.startAngle);
        context.beginPath();
        context.moveTo(0, -this.size / 2);
        context.lineTo(this.size / 2, this.size / 2);
        context.lineTo(-this.size / 2, this.size / 2);
        context.closePath();
        context.stroke();
        context.restore();
    }
}