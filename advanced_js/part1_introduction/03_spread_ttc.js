function getTtcPriceSpread(price1, price2, price3, tva = 20)
{
    function getTtcPrice(priceHt, tva = 20)
    {
        return priceHt + priceHt * tva / 100;
    }

    totalTtc = getTtcPrice(price1, tva) + getTtcPrice(price2, tva) + getTtcPrice(price3, tva);

    return totalTtc;
}

console.log(getTtcPriceSpread(...[100, 200, 55]));
console.log(getTtcPriceSpread(...[100, 200, 55], 20));
console.log(getTtcPriceSpread(...[100, 200, 55], 5));
