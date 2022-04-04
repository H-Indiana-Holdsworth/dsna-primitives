function reverseWords(sentence) {
  // get all the letters in the words
  // split
  // reverse the order of those letters
  // .reverse
  // make them into a word again
  // .join
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWords('alchemy rocks gold'));
