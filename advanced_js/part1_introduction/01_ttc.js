#!/bin/node

function getTtcPrice(priceHt, tva = 0.2)
{
    if (isNaN(parseInt(priceHt))) {
        return 'Bad number';
    }

    if (isNaN(parseFloat(tva))) {
        return 'Bad number';
    }

    return Math.floor((priceHt + priceHt * tva) * 100) / 100;
}

console.log(getTtcPrice(10, 0.32113232124343));
// console.log(getTtcPrice(10, 20));
// console.log(getTtcPrice(10, 30));
// console.log(getTtcPrice(10, 5));
