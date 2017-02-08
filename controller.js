$(document).ready(function(){
  function buildTable() {
    //variable keeps track of current row
    var currentRow = 0;
    var column = 0
    //for loop creates 100 cell table
    for(var i = 0; i <100; i++){
      // if counter%10 is 0, make a new row
      if ( i % 10 == 0 ){
        currentRow = i/10; //update current row
        $("#board").append('<tr id="row' + currentRow + '"</tr>'); //create a new table row with id "row<currentRow>"
        }
        $("#row"+ currentRow).append("<td data-index = " + i + "></td>"); //makes a new table cell with id "index<i>" under "row<currentRow"
       }
  }
  // call function to build the table
  buildTable();
  placeShips();
  var clickCounter = 0;
  // create an onclick event to torpedo a ship
  $("td").on("click", function(){
    $(this).addClass("torpedo");
    // we need to call a var that refers to the rows/columns in the html
    var squared = $(this).data("index").toString();

    var row = squared[0];
    var col = squared[1];
    // and then plug the var into hitShip
    hitShip(row, col);
    if (clickCounter < 25) {
      clickCounter = clickCounter + 1;
    }
    console.log(clickCounter);
  });
  console.log(board);

});//doc.ready


// Counter for torpedo
// Each time the player clicks, subtract 1 from 25 counter.

  // function torpedoCount(){
  //   var counter = 0
  //   while (counter <= 25) {
  //     console.log(counter++);
  //       $("torpedoCount").html("You have " + counter + "torpedos!")
  //   }
  // }

    //
    // $("td").on("click",function(){
    //   var counter = 0
    //     function torpedoCount(){
    //       if (counter <= 25) {
    //         console.log(counter++);
    //           $("torpedoCount").html("You have " + counter + "torpedos!")
    //       } else {
    //         console.log(counter)
    //       }
    //     }
    //   });
    // torpedoCount();


//what we want:
//everytime we click on an index (box) we want 1) the color to change 2)the counter to count that try
