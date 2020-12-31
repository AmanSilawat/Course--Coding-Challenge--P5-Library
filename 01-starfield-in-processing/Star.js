class Star {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = width;
    }

    update() {
        this.z = this.z - 1;
    }
    show() {
        fill(255);
        noStroke();

        this.sx = map(this.x / this.z, 0, 1, 0, width);
        this.sy = map(this.y / this.z, 0, 1, 0, height);

        ellipse(this.sx, this.sy, 8, 8);
    }
}