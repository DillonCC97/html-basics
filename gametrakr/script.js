var playingTo = 0;
var player1Score = 0;
var player2Score = 0;
var gameOver = false;
// Use Selector methods to select the HTML elements needed below.
var scoreSetButton = document.querySelector("#score-set-button");
var playingToField = document.querySelector("#playing-to-field");
var setScoreTitle = document.querySelector("#set-score-title");
var resetButton = document.querySelector("#reset-button");

// p1 fields
var p1ScoreDisplay = document.querySelector("#p1-score");
var p1ScoreButton = document.querySelector("#add-p1-point");
// p2 fields
var p2ScoreDisplay = document.querySelector("#p2-score");
var p2ScoreButton = document.querySelector("#add-p2-point");
// This function sets the score the game is played to.
// It should:
// capture the value the user types into the form field
// Set the score title to "Playing to X." For whatever X the user types into the box
//
// BONUS: Add validation on this field making sure the user types in a positive number
var setPlayingTo = function() {
    if (playingTo == 0 && Number(playingToField.value) > 0) {
        playingTo = Number(playingToField.value); // captures the value the user types into the field as a string
        setScoreTitle.textContent = "Playing to " + playingTo + ".";
    }
}
// This function adds a point to Player 1.
// It should:
// increment player1Score
// update the display for player 1
// check to see if a player has won the game
// Do nothing if the winning score has not yet been set, or if the game is over.
var addPlayerOnePoint = function() {
    if (playingTo > 0 && gameOver == false) {
        player1Score++;
        p1ScoreDisplay.textContent = player1Score;
        checkScores();
    }
}
// This function adds a point to Player 2.
// It should work the same as the function above, but for Player 2
var addPlayerTwoPoint = function() {
    if (playingTo > 0 && gameOver == false) {
        player2Score++;
        p2ScoreDisplay.textContent = player2Score;
        checkScores();
    }
}
// This function checks to see if a player has won.
// If a player has reached the end score, it should:
// set the score display to green for the winning player
// set the score title to "Player X has won!"
// set gameOver to true
var checkScores = function() {
    if (player1Score == playingTo) {
        p1ScoreDisplay.style.color = "green";
        setScoreTitle.textContent = "Player 1 has Won!";
        gameOver = true;
    } else if (player2Score == playingTo) {
        p2ScoreDisplay.style.color = "green";
        setScoreTitle.textContent = "Player 2 has Won!";
        gameOver = true;
    }
}
// This function resets the Game back to a zero state
// It should:
// reset both player scores to 0
// set the score title back to "What are we playing to?"
// set gameOver back to false if it is true
var resetGame = function() {
    gameOver = false;
    setScoreTitle.textContent = "What are we playing to?";
    player1Score = 0;
    player2Score = 0;
    p1ScoreDisplay.textContent = player1Score;
    p2ScoreDisplay.textContent = player2Score;
    p1ScoreDisplay.style.color = "black";
    p2ScoreDisplay.style.color = "black";
    playingTo = 0;
    playingToField.value = "";
}
// Add Event Listeners to buttons and HTML elements
scoreSetButton.addEventListener('click', setPlayingTo);
resetButton.addEventListener('click', resetGame);
p1ScoreButton.addEventListener('click', addPlayerOnePoint);
p2ScoreButton.addEventListener('click', addPlayerTwoPoint);
