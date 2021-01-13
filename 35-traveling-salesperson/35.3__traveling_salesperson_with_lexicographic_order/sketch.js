let cities = [];
let totalCities = 5;

let totalPermutations;
let count = 0;

let order = [];

let recordDistance;
let bestEver;

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < totalCities; i++) {
        let v = createVector(random(width), random(height / 2));
        cities[i] = v;
        order[i] = i;
    }

    let d = calcDistance(cities, order);
    recordDistance = d;
    bestEver = order.slice();

    totalPermutations = factorial(totalCities);
}

function draw() {
    background(0);
    fill(255);
    for (let i = 0; i < cities.length; i++) {
        ellipse(cities[i].x, cities[i].y, 8, 8);
    }

    stroke(255, 0, 255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (let i = 0; i < order.length; i++) {
        let n = bestEver[i];
        vertex(cities[n].x, cities[n].y);
    }
    endShape();


    translate(0, height / 2);
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();
    for (let i = 0; i < order.length; i++) {
        let n = order[i];
        vertex(cities[n].x, cities[n].y);
    }
    endShape();

    let d = calcDistance(cities, order);
    if (d < recordDistance) {
        recordDistance = d;
        bestEver = order.slice();
    }

    textSize(32);
    fill(255);
    let percent = 100 * (count / totalPermutations);

    // nf is get two digits number only
    text(nf(percent, 0, 2) + "% completed", 20, height / 2 - 50)


    nextOrder();
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



function nextOrder() {
    count++;

    // algorithm step 1
    let largestI = -1;
    for (let i = 0; i < order.length - 1; i++) {
        if (order[i] < order[i + 1]) {
            largestI = i;
        }
    }

    if (largestI == -1) {
        noLoop();
    }

    // step 2
    let largestJ = -1;
    for (let j = 0; j < order.length; j++) {
        if (order[largestI] < order[j]) {
            largestJ = j;
        }
    }

    // step 3
    swap(order, largestI, largestJ)

    // step 4
    let endArray = order.splice(largestI + 1);
    endArray.reverse();
    order = order.concat(endArray);
}



function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}