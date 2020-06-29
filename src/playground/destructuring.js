// console.log('destructuring');

// const person = {
//     name: 'Sandeep',
//     age : 34,
//     location : {
//         city : 'Visakhapatnam',
//         temp : 92
//     }
// };


// const {name:firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if(city && temperature)
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title : 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher : {
//         // name: 'Penguin'
//     }
// };

// const {name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array restructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennysylvania', '19417'];
//const address = [];
//const [street, city, state, zip ] = address;
const [, city = 'Visakhapatnam', , zip ] = address;


console.log(`you are in ${city}`);


const items = ['coffee (hot)','$2.00','$2.50','$2.75'];
const [item, small, medium, large] = items;
console.log(`A medium ${item} is ${medium}`);