function exercise6_3() {
  // Exercise 6.3
  //
  // Write a loop that will print to the console
  // all of the EVEN integers from 1 to 50.
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
    for(num = 1; num <= 50; num++){
      if(num % 2 === 0){
        console.log(num)
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
// yarn test exercise-6.3

module.exports = exercise6_3;
