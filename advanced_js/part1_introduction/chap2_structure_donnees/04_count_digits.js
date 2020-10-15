const phrase = '8790:bonjour le monde:8987:7777:Hello World:9007';

re = new RegExp('\\d', 'g');
const digits = phrase.match(re);

console.log(digits);
