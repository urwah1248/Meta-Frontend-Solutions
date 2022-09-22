// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (const d of dairy) {
        console.log(d);
    }
}// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (const key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}
// Task 3
function animalCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}
logDairy();
birdCan();
animalCan();