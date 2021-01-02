let stars = [];
let speed;
let starLength = 800;

function setup() {
    createCanvas(800, 800);
    for (let i = 0; i < starLength; i++) {
        stars.push(new Star());
    }
}

function draw() {
    speed = map(mouseX, 0, width, 0, 50);
    background(0);
    translate(width / 2, height / 2)
    for (let i = 0; i < starLength; i++) {
        stars[i].update(speed);
        stars[i].show();
    }
}