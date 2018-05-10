//
//  Object Destructuring
//

// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name: firstName = 'anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
//  Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New Your' ] = address;
// console.log(`You are in ${city} ${state}.`);

const menu = ['Coffee (cold)', '$2.00', '$2.30', '$2.70'];

const [item,,priceMedium] = menu;

console.log(`A medium ${item} costs ${priceMedium}`);