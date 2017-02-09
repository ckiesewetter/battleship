var board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
  ];

var miss = -1;
var ship = 1;
var hit = 2;
var hitCounter = 0;
var fiveShips = [];


function placeShips(){
  for (var i = 0; i <= 5; i++) {
   // var random row = random number
   var row = Math.floor (Math.random() * 10);
   // var random col = random number
   var column = Math.floor (Math.random() * 10);
   // loop through board, check if each place has ship
   //commented out the while loop, it was giving us an extra 1 (ship).
    // while (board[row][column] == 1) {
    //   row = Math.floor (Math.random() * 10);
    //   column = Math.floor (Math.random() * 10);
    // }
   board[row][column] = ship;
   fiveShips.push( (row.toString() + column.toString()) );
   console.log(fiveShips);
 }
}
    function returnBoard(){
    return board;
  }

function hitShip(row, col){
  //place a var inside this that represents the square we hit
    if ( board[row][col] === 0) {
      //reassign the empty square to a miss (-1)
       board[row][col] = miss;
      alert ("You miss!");
    } else if (board[row][col] == 1) {
      //reassign the 1 to a hit which we can call 2
      board[row][col] = hit;
      hitCounter = hitCounter + 1;
      console.log("You've hit :" + hitCounter);
      alert ("You torpedoed a ship!! Awesome!");
    } else if (board[row][col] == -1){
      alert("You already tried here, there's no ship!");
    } else if (board[row][col] == 2) {
      alert ("You already torpedoed this ship, yo!");
    }
    if (hitCounter == 5) {
      alert("You win!");
    // } else if (clickCounter == 25 && hitCounter < 5)
  }
}



///this might nedd to go in jquery
