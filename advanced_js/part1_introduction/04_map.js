const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
];

function getTtcPrice(priceHt, tva = 0.2)
{
    if (isNaN(parseInt(priceHt))) {
        return 'Bad number';
    }

    if (isNaN(parseFloat(tva))) {
        return 'Bad number';
    }

    return (priceHt + priceHt * tva).toFixed(2);
}

phonePrices = phones.map((phone) => {
    return { name: phone.name, priceHT: phone.priceHT, priceTTC: parseInt(getTtcPrice(phone.priceHT)) };
});

console.log(phonePrices);
