function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the grid
  // there is either an "_" or a "#" character. The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
const row = function(everOrOdd) {
  let line = "";
  let arr = [0,1,2,3,4,5,6,7];
    for(n in arr){
      if(n  % 2 === everOrOdd){
        line += "#";
      } else {line += "_" ;}
    }
    return line
  }
  const grid = function(height){
    let board = "";
    let idx = 0
    for(col = 0; col < height; col++){
      if(idx === 0){
        board += `${row(0)},`;
        idx = 1;
      } else {
        board += `${row(1)},`;
        idx = 0;
      }
    }
    return board.slice(0, board.length - 1);
  }
  console.log(grid(8));
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
// yarn test exercise-11

module.exports = exercise11;
