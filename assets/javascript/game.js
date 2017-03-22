console.log("connected");



// when the app opens, the game begins
// randomly generate 4 numbers and assign 1 to each of the buttons
// make a variable for wins: wins
// make a variable for losses: losses
// make a variable for points accumulated and set equal to 0: accumPoints
// make four crystal variables, a variable for randomly generated numbers for each ofthe crystals: cryst1 through 4
// make a variable for a target number that is the same as random generated number: targetNum

// create buttons for each of the crystals

// randomly generate a number to be the target
// the random number must be higher than or equal to the total of the value of the crystals

// LEFT OFF HERE BECAUSE I DON'T HAVE THE FIRST CLUE...SOMETHING TO DO WITH ON CLICK...I'M LOOKING IT UP

// when user clicks a button, add the button value to the value in accumPoints
// display button value on button
// repeat as needed when each button is clicked


// determine if win or loss
// if accumPoints is > targetNum, loss
// else, if accumPoints is = targetNum, win
// else nothing--still playing


// if win, increment wins
// if loss, increment losses
// ask if user wants to play again
// if true, start over with first action but don't zero-out all variables
// if false, close app

var accumPoints;
var wins;
var losses;
var cryst1 = Math.floor(Math.random() * (12-1) + 1);
var cryst2 = Math.floor(Math.random() * (12-1) + 1);
var cryst3 = Math.floor(Math.random() * (12-1) + 1);
var cryst4 = Math.floor(Math.random() * (12-1) + 1);
var targetNum = Math.floor(Math.random() * (120-19) + 1);


console.log(cryst1,cryst2,cryst3,cryst4,accumPoints,wins,losses,targetNum);



// function if else: if the number of points accumulated ===  target number, increment score, stop game
// else if the crystal points > target number, increment losses, stop game