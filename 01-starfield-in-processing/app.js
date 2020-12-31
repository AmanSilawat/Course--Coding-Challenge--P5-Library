let starts = [];

function setup() {
    createCanvas(400, 400);
    console.log(starts.length);
    for (let i = 0; i < 100; i++) {
        starts.push(new Star());
    }
    console.log(starts);
}

function draw() {
    background(0);
    translate(width / 2, height / 2)
    for (let i = 0; i < 100; i++) {
        starts[i].update();
        starts[i].show();
        
    }
}