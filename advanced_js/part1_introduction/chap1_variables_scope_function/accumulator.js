function accumulator(numbers, acc = 0)
{
    acc += numbers.shift();

    if (numbers.length > 0) {
        acc = accumulator(numbers, acc);
    }

    return acc;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(accumulator(numbers));
