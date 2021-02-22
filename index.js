var wakeDog = function wakeDog(name, breed) {
    console.log(`Wake ${name} the ${breed}`);
    return `Wake ${name} the ${breed}`
}

var leashDog = function leashDog (name, breed) {
    console.log(`Leash ${name} the ${breed}`);
    return `Leash ${name} the ${breed}`
}

var walkToPark = function walkToPark(name, breed) {
    console.log(`Walk to the park with ${name} the ${breed}`);
    return `Walk to the park with ${name} the ${breed}`
}

var throwFrisbee = function throwFrisbee(name, breed) {
    console.log(`Throw the frisbee for ${name} the ${breed}`);
    return `Throw the frisbee for ${name} the ${breed}`
}

var walkHome = function walkHome(name, breed) {
    console.log(`Walk home with ${name} the ${breed}`);
    return `Walk home with ${name} the ${breed}`
}

var unleashDog = function unleashDog(name, breed) {
    console.log(`Unleash ${name} the ${breed}`);
    return `Unleash ${name} the ${breed}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
function exerciseDog(name, breed) {
    return routine.map(fn => fn(name, breed))
}