let cities = [];

let totalCities = 12;
let popSize = 500;

let totalPermutations;
let recordDistance = Infinity;
let fitness = [];

let bestEver;
let currentBest;

let population = [];

let statusP;


function setup() {
    createCanvas(800, 800);
    let order = [];
    for (let i = 0; i < totalCities; i++) {
        let v = createVector(random(width), random(height / 2));
        cities[i] = v;
        order[i] = i
    }

    for (let i = 0; i < popSize; i++) {
        population[i] = shuffle(order);
    }

    statusP = createP('').style('font-size', '32px')
}

function draw() {
    background(0);

    // GA
    calculateFitness();
    normalizeFitness();
    nextGeneration();

    stroke(255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (let i = 0; i < bestEver.length; i++) {
        let n = bestEver[i];
        vertex(cities[n].x, cities[n].y);
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }
    endShape();

    translate(0, height / 2);
    stroke(255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (let i = 0; i < currentBest.length; i++) {
        let n = currentBest[i];
        vertex(cities[n].x, cities[n].y);
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }
    endShape();
}

function shuffle(a, num) {
    for (let i = 0; i < num; i++) {
        var indexA = floor(random(a.length))
        var indexB = floor(random(a.length))
        swap(a, indexA, indexB)

    }
}

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcDistance(points, order) {
    let sum = 0;
    for (let i = 0; i < order.length - 1; i++) {
        let cityAIndex = order[i];
        var cityA = points[cityAIndex];
        let cityBIndex = order[i + 1];
        let cityB = points[cityBIndex];
        let d = dist(cityA.x, cityA.y, cityB.x, cityB.y);
        sum += d;
    }
    return sum;
}
