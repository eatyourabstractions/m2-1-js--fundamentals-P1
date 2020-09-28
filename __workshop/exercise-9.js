function exercise9() {
  // Exercise 9
  //
  // Write a program that goes through every number from 1 to 100, and follows the following rules:
  //   - If the number is divisible by 3 (eg. 6), print "Fizz"
  //   - If the number is divisible by 5 (eg. 10), print "Buzz"
  //   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
  //   - For all other numbers, print the number itself.
  // e.g.
  //
  // 1
  // 2
  // Fizz
  // 4
  // Buzz
  // Fizz
  // 7
  // 8
  // Fizz
  // Buzz
  // 11
  // Fizz
  // 13
  // 14
  // FizzBuzz
  // 16
  // ...
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
    for(let n = 1; n <= 100; n++){
      if(n % 15 === 0){
          console.log('FizzBuzz');
      }else if(n % 3 === 0){
          console.log('Fizz');
      }else if(n % 5 === 0){
          console.log('Buzz');
      }else{
          console.log(n);
      }
    }
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-9

module.exports = exercise9;
