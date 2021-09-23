function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
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
  let chessboard = "";
  let size = 8;

  for (let i = 0; i < `${size}`; i++) {
    let poundUnderscore = i % 2 === 0;
    switch (poundUnderscore) {
      case true:
        chessboard += "#";
        break;
      case false:
        chessboard += "_";
        break;
    }
  }
  chessboard += "\n";

  console.log(chessboard);

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
