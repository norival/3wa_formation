// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = numbers
//     .filter((number) => number % 2 === 0)
//     .map((number) => number ** 3);

// console.log(result);


// ****************************************************************************

const CounterV1 = {
    count: 0,
    counter: function counter() {
        setInterval(function () {
            this.count++;
            console.log(this.count);
        }, 1000);
    },
};
// CounterV1.counter();

const CounterV2 = {
    count: 0,
    counter: function counter() {
        setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 200);
    },
};
CounterV2.counter();
