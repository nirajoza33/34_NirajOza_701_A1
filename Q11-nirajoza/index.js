// index.js

module.exports = {
  capitalize,
  reverseString,
  countVowels,
};

// Capitalizes first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverses a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Counts vowels in a string
function countVowels(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}
