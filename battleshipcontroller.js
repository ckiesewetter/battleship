$(document).ready(function(){

  function buildTable() {
    //variable keeps track of current row
    var row = 0;
    var column = 0
    //for loop creates 100 cell table
    for(var row = 0; row < 10; row++){
      //create a new table row with id "row<currentRow>"
      $("#board").append('<tr id="row' + row + '"</tr>');
      // create 10 <td>s for each <tr>
      for (var col = 0; col < 10; col++) {
        //makes a new table cell with id "index<i>" under "row<currentRow"
        $("#row"+ row).append("<td data-index=" + row + "-" + col + "></td>");
      }
    }
  }//closes buildTable

  // call function to build the table
  buildTable();
  placeShips();
  var clickCounter = 1;

  // create an onclick event to torpedo a ship
  $("td").on("click", function(){
    $(this).addClass("torpedo");
    $("#torpedoCount").text("You have used " + clickCounter + " Torpedos!")
    // fiveShips();


    // we need to call a var that refers to the rows/columns in the html
    // var squared = $(this).data("index").toString();
    //
    // var squaredRow = squared[0];
    // var squaredCol = squared[1];
    // // and then plug the var into hitShip
    // hitShip(squaredRow, squaredCol);
    if (clickCounter < 25) {
      clickCounter = clickCounter + 1;

    } else if (clickCounter == 25) {
      console.log("You lose, you don't have any tries left");
      // we will use jquery to show the 5 ships once the game is lost

        fiveShips()
        $("td").off("click");
      }
  })
    // console.log(clickCounter);
    ////^^^^ DON'T CHANGE ANYTHING ABOVE THIS LINE

    //
    // if (hitCounter < 5) {
    //   hitCounter = hitCounter + 1;
    // }

    console.log("You have clicked:" + clickCounter);

  });
  console.log(board);
  // console.log(board);


//doc.ready


// Counter for torpedo
// Each time the player clicks, subtract 1 from 25 counter.

  // function torpedoCount(){
  //   var counter = 0
  //   while (counter <= 25) {
  //     console.log(counter++);
        // $("torpedoCount").html("You have " + counter + "torpedos!")
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



//Show user the torpedoCount
