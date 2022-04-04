function fizzBuzz(number) {
  // for n, return an array that contains numbers 1 to n in order
  // if % 3 === 0 return 'Fizz',
  // if % 5 === 0 return 'Buzz',
  // if % 3 === 0 && % 5 === 0 return 'FizzBuzz',

  let arr = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }

  return arr;
}

console.log(fizzBuzz(16));
