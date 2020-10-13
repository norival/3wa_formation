const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(number => number % 2 !== 0)
    .reduce((acc, curr) => curr + acc);

console.log(result);
