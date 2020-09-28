function exercise7() {
  // Exercise 7
  //
  // Life in the army is regimented!
  // Write a loop that will output every hour of the day (0 to 23) and
  // determine whether it is time to sleep, eat or train.
  //
  // These are the hours alloted to each activity.
  // - Sleep between 22h and 5h
  // - Eat at 6h, 12h and 18h
  // - The rest of the time is spent training.
  //
  // Expected Output
  // ...
  // It's 10h. Time to train!
  // It's 11h. Time to train!
  // It's 12h. Time to eat!
  // It's 13h. Time to train!
  // ...
  //
  // Use interpolation to build your output string
  // e.g. `It's ${number}h. Time to train!`
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
    for(let hr = 0; hr <= 23; hr++){
      let sleepTime = [22,23,0,1,2,3,4,5];
      let eatTime = [6,12,18];
      let result = "";
      if(sleepTime.includes(hr)){
        result += `It's ${hr}h. Time to sleep!`;
        console.log(result);
      } else if(eatTime.includes(hr)){
        result += `It's ${hr}h. Time to eat!`;
        console.log(result);
      } else{
        result += `It's ${hr}h. Time to train!`;
        console.log(result);
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
// yarn test exercise-7

module.exports = exercise7;
