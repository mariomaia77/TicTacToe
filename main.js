

var playerImages = {
  playerOne: null,
  playerTwo: null
};

var $playerSelect1 = $("#rocky1");
var $playerSelect2 = $("#oponent1");

// function gameMsg(x) {
//   return $(".gameBoard").text(x);
// }

// after selecting a rocky, the image moves to the center of page
var $rocky1Select = $( "#rocky1select" );
var $rocky2Select = $( "#rocky2select" );
var $rocky3Select = $( "#rocky3select" );
var $rocky4Select = $( "#rocky4select" );

// var selectImage = function () {
//   $rocky1Select.move({
//     width: "250px",
//     height: "250px",
//     right: "100px",
//   }, 1000);
// };
//   $("rocky1select").fadeout();
// $rocky1Select.on( "click", selectImage);

// $el.click ( function () {


// rocky1Select.move({bottom: $(window).height() / 2},2000);

// create a jquery variable for each id elated to the squares in the game board
var $square1 = $( "#square1" );
var $square2 = $( "#square2" );
var $square3 = $( "#square3" );
var $square4 = $( "#square4" );
var $square5 = $( "#square5" );
var $square6 = $( "#square6" );
var $square7 = $( "#square7" );
var $square8 = $( "#square8" );
var $square9 = $( "#square9" );

$(".leftContainer img").on("click", function() {
  $(this).animate({
    opacity: 0
  }, 500);
  var img = $(this).next().attr("src");
  img = "url(" + img + ")";
  playerImages.playerOne = img;
  localStorage.setItem("playerOneImage", img);
});

$(".rightContainer img").on("click", function() {
  $(this).animate({
    opacity: 0
  }, 500);
  var img = $(this).next().attr("src");
  img = "url(" + img + ")";
  playerImages.playerTwo = img;
  localStorage.setItem("playerTwoImage", img);
});


// when a player clicks on a square, the picture of its boxer shows up in the square if the square is empty
var showBoxer1 = function ($el) {
  if( $el.css("background-image") == "none") {
    console.log("showBoxer1 clicked");
    console.log($el);
    $el.css({
      opacity: "1",
      backgroundImage:
       localStorage.getItem("playerOneImage"),
       backgroundSize: "cover"
    });
  } else {
      alert('Hey Champ, choose another square!');
  }
};

var showBoxer2 = function ($el) {
  if( $el.css("background-image") == "none") {
  console.log("shadowBoxer2 clicked");
  console.log($el);
  $el.css({
    opacity: "1",
    backgroundImage: localStorage.getItem("playerTwoImage"),
    backgroundSize: "cover"
  });
} else {
    alert('You gotta move faster Champ, choose another square!');
}
};

// random selection of which player goes first >> nbot active yet as yoiu have to set the players (currently hard coded images...)
// var winRound = 0;
clickCount = 0;
turn = "";
function randomTurn() {
  var tossCoin =Math.floor( (Math.random () * 2) + 1);
  winRound =0;
  if (tossCoin == 1) {
    turn = player1;
    alert(player1 +", you give the first punch!");
    showBoxer1($element);
  } else{
    turn = player1;
    alert(player1 +", you give the first punch!");
    showBoxer2($element);
  }
}

// players alternating clicks on the board
var $squares = $(".boardSquare");
// var moveCount =0;
var playerOneMove = 1;
var displayBoxer = function () {
  console.log("displayBoxer clicked");
  var $element = $(this);
  // moveCount +=1;
    if (playerOneMove === 1) {
      showBoxer1($element);
      playerOneMove = 0;
    } else {
      showBoxer2($element);
      playerOneMove = 1;
      }
    };

$squares.on("click", displayBoxer);

// The function compares each image to see if there is a winner to the game or not
$squares.click ( function () {

  var $squareImage1 = $square1.css( "background-image" );
  var $squareImage2 = $square2.css( "background-image" );
  var $squareImage3 = $square3.css( "background-image" );
  var $squareImage4 = $square4.css( "background-image" );
  var $squareImage5 = $square5.css( "background-image" );
  var $squareImage6 = $square6.css( "background-image" );
  var $squareImage7 = $square7.css( "background-image" );
  var $squareImage8 = $square8.css( "background-image" );
  var $squareImage9 = $square9.css( "background-image" );

  if (
    ($squareImage1 == $squareImage2 && $squareImage1 == $squareImage3 && $squareImage1 !== "none")  ||
    ($squareImage4 == $squareImage5 && $squareImage4 == $squareImage6 && $squareImage4 !== "none" ) ||
    ($squareImage7 == $squareImage8 && $squareImage7 == $squareImage9 && $squareImage7 !== "none" ) ||

    ($squareImage1 == $squareImage4 && $squareImage1 == $squareImage7 && $squareImage1 !== "none" ) ||
    ($squareImage2 == $squareImage5 && $squareImage2 == $squareImage8 && $squareImage2 !== "none" ) ||
    ($squareImage3 == $squareImage6 && $squareImage3 == $squareImage9 && $squareImage3 !== "none" ) ||

    ($squareImage1 == $squareImage5 && $squareImage1 == $squareImage9 && $squareImage1 !== "none" ) ||
    ($squareImage3 == $squareImage5 && $squareImage3 == $squareImage7 && $squareImage3 !== "none" )
    ) {
      alert("KNOCKOUT!!!!!");
      clickCount =0;
      hasWinner = 1;
      // $("#playButton").text("Play again");
      // return true;
    } else {
      console.log("Keep fighting");
      // $("#playButton").text("Play again");
      // return false;
  }
});
