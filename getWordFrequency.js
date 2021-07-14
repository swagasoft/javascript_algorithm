
const dictionary = {the: 1, be: 2, and: 3, of: 4, a: 5, in: 6, to: 7 /* ... */};

function getWordFrequency(dictionary, word) {
  return dictionary[word];
}

console.log(getWordFrequency(dictionary, 'the'));
console.log(getWordFrequency(dictionary, 'in'));