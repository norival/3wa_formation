const sentence = "Bonjour tout le monde, vous aimez JS ?";

// String
// 1. Inverser la chaîne
const reversedSentence = sentence.split('').reverse().join('');
console.log(reversedSentence);

// 2.
const getWordsLen = (msg) => msg.split(' ').map(word => word.length);

console.log(getWordsLen(sentence));

// 3.
letters = new Set(sentence);
numbers = {};
for (letter of letters) {
    if (letter === ' ') {
        continue;
    };

    numbers[letter] = [ ...sentence ].filter(l => l === letter).length;
}
console.log(numbers);
