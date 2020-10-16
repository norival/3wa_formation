const add = number => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(parseFloat(number))) {
                reject(number);
                return;
            }
            resolve(number);
        }, 1000);
    });
}

add(1)
    .then(num => {
        let sum = num;
        return sum;
    })
    .then(sum => console.log(sum + 2))
    .catch(num => console.error(`${num} is not a number`));

add(1)
    .then(num => {
        let sum = num;
        return sum;
    })
    .then(sum => console.log(sum + 2))
    .catch(num => console.error(`${num} is not a number`));
