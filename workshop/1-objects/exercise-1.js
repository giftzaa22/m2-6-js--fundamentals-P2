// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.


let myInfo = {
    name:{
        fName: 'hiba',
        sName: 'zaarour',
    },
    age: '34',
    city: 'montreal',
    siblings: 3,
    petName: 'NAN',
    monthOfBirth: 'July'
}
console.log(myInfo);
console.log(myInfo.siblings);
console.log(myInfo.monthOfBirth);
console.log(myInfo.age);

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

// A) console.log() your object.
// B) console.log() a few of the values in the object.

//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.
myInfo.favoriteTvShows = 'friends';
myInfo.favoritActress = 'Sandra Bullock';
myInfo.favoriteFood = 'Pizza';

console.log(myInfo);
//-------------------------------------------------

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  Title: 'the blind side',
  Director: 'John Lee Hancock',
  YearReleased: '2009',
  Rating: '5stars',
  Actors: ['Sandra Bullock','lily collins','Quinton Aaron' ]
};

//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = 'name';
const person = {
  name: 'Alyssa P. Hacker',
  age: 26,
  hometown: 'somewhere',
};

console.log(person.age); // => 26
console.log(person.key); // => "Alyssa P. Hacker"

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: 'Alyssa',
    middle: 'P.',
    last: 'Hacker',
  },
  age: 26,
};

function fullName(person) {
  return `${person.name.first},${person.name.middle},${person.name.last}` 
}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.



const rick = {
  name: {
    first: 'Rick',
    last: 'Sanchez',
  },
  age: 66,
};

function betterFullName(person) {
  if (person.name.middle) {
    return `${person.name.first} ${person.name.middle} ${person.name.last}`
  } else {
    return `${person.name.first} ${person.name.last}`
  }
  // Your code here
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
