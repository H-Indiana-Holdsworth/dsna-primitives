function oddishOrEvenish(number) {
  // make it into string
  // split up the numbers
  // sum the numbers
  // if even (true), return 'Evenish'
  // if odd (false) return 'Oddish'
  const sumOfDigits = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce((sum, num) => sum + num, 0);

  return sumOfDigits % 2 === 0 ? 'Evenish' : 'Oddish';
}

console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(41));
