// const person = {
//   name: 'Ryan',
//   age: 22,
//   location: {
//     city: 'San Jose',
//     temp: 60
//   }
// };

// const {name: firstname = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstname} is ${age}.`);

// const {city, temp: temperature} = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// let { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// const address = ['123 S 11th Street', 'San Jose', 'California', '95112'];

// // const [street, city, state, zip] = address;
// const [, city, state] = address;

// console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A Medium ${itemName} costs ${mediumPrice}.`);
