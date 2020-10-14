let fruits =  ['Apple', 'Orange'];

let newFruits = fruits;

newFruits.push('Banana')

console.log(newFruits.length === fruits.length)

newFruits = [ ...fruits ];

fruits.push('Kiwi')

console.log(newFruits.length === fruits.length)


console.log('Question 2 ********************************************************');
const populations = [
    { "id": 0, "name": "Alan" },
    { "id": 1, "name": "Albert" },
    { "id": 2, "name": "Jhon" },
    { "id": 3, "name": "Brice" },
    { "id": 4, "name": "Alexendra" },
    { "id": 5, "name": "Brad" },
    { "id": 6, "name": "Carl" },
    { "id": 7, "name": "Dallas" },
    { "id": 8, "name": "Dennis" },
    { "id": 9, "name": "Edgar" },
    { "id": 10, "name": "Erika" },
    { "id": 11, "name": "Isaac" },
    { "id": 12, "name": "Ian" }
];

const populations2 = populations.map(pop => ({ ...pop }));

// const populations2 = JSON.parse(JSON.stringify(populations));
populations[0].name = 'ALAN';

console.log(populations2);
