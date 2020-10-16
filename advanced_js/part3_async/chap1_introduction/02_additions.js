let acc = 0;

const add = (number, callback, errorCallback) => {
    setTimeout(() => {
        if (isNaN(parseFloat(number))) {
            errorCallback(number);
            return ;
        }
        callback(number);
    }, 1000);
}

addCallback = number => {
    console.log(acc += number);
}

addErrorCallback = (number) => console.error(`${number} is not a number`);
addErrorCallback2 = (number) => {
    throw new Error(`${number} is not a number`);
}

add(1, addCallback, addErrorCallback);
add(2, addCallback, addErrorCallback);
add('NA', addCallback, addErrorCallback);
add('NA', addCallback, addErrorCallback2);
