function calculateFitness() {
    for (let i = 0; i < population.length; i++) {
        let d = calcDistance(cities, population[i]);
        if (d < recordDistance) {
            recordDistance = d;
            bestEver = population[i]
        }
        fitness[i] = 1 / (d + 1);
    }
}

function normalizeFitness() {
    let sum = 0;
    for (let i = 0; i < fitness.length; i++) {
        sum += fitness[i];
    }
    for (let i = 0; i < fitness.length; i++) {
        fitness[i] = fitness[i] / sum;
    }
}

function nextGeneration() {
    let newPopulation = [];
    for (let i = 0; i < population.length; i++) {
        let order = pickOne(population, fitness);
        mutate(order);
        newPopulation[i] = order;
    }
    population = newPopulation;
}

function pickOne(list, prob) {
    let index = 0;
    let r = random(1);

    while (r > 0) {
        r = r - prob[index];
        index++;
    }
    index--;
    return [...list[index]];
}

function mutate(order, mutationRate) {
    let indexA = floor(random(order.length))
    let indexB = floor(random(order.length))
    swap(order, indexA, indexB)
}