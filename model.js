function newGame(){
  var board = [
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0]
  ];

  var miss = -1;
  var ship = 1;
  return {
    torpedoCount: function(){
      var counter = 1;
        if (counter <= 25) {
        console.log("you have used " + (counter++) +  " " + "torpedos");
      } else {
        console.log(counter);
      }
      },
    returnBoard: function(){
      return board;
      },
    doubleShot: function(trythis) {
      if (trythis == ship) {
        alert ("You already hit the ship");
      } else if (trythis == miss) {
        alert ("You can't choose this square");
      }
      },
    placeShips: function() {
      for (var i = 0; i <= 5; i++) {
        // var random row = random number
        var row = Math.floor( (Math.random() * 9) + 1);
        // var random col = random number
        var column = Math.floor( (Math.random() * 9) + 1);
        // loop through board, check if each place has ship
        // For each index
        while (board[row][column] == 1) {
          row = Math.floor( (Math.random() * 9) + 1);
          column = Math.floor( (Math.random() * 9) + 1);
        }
        board[row][column] = ship;
      }
    }
  };
}
///stopped before #6
