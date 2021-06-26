// Dog Years
// Dogs age at a faster rate than human beings. 
//  To convert human age from “human years” to “dog years”:

// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.

// state human age
const myAge = 24;

// calculate first 2 years of dog age
let earlyYears = 2;
earlyYears *= 10.5;

// account for first 2 years of dog age
let laterYears = myAge - 2;

// account for each following year of dog age
laterYears *= 4;

// console.log(earlyYears);
// console.log(laterYears);

// account for total years of dog age
let myAgeInDogYears = earlyYears + laterYears;

// human name is lower case.
myName = 'Norville "Shaggy" Rogers'.toLowerCase();
scoobyDoo = 'scooby-doo'.toUpperCase();

// statement to display human name and age in dog years. Use string interpolation.
console.log(`Mystery Solved!  ${myAge} year old ${myName} is ${myAgeInDogYears} years old in dog years!  ${myName} is a fictional character in the ${scoobyDoo} franchise. He is an amateur detective and cowardly slacker and the long-time best friend of his equally cowardly dog, ${scoobyDoo}.`)
// Output: Mystery Solved!  24 year old norville "shaggy" rogers is 109 years old in dog years!  norville "shaggy" rogers is a fictional character in the SCOOBY-DOO franchise. He is an amateur detective and cowardly slacker and the long-time best friend of his equally cowardly dog, SCOOBY-DOO.

// Check capitilization of first character
console.log('scooby-doo'.startsWith('S'));
// Output: false
console.log('scooby-doo'.startsWith('s')); 
// Output: true

/*To re-visit how to capitilize S and D of Scooby-Doo.*/ 
