
// Iteration 8: Making scoreboard functional

var urlParams = new URLSearchParams(window.location.search);
var score = urlParams.get("score");


var scoreBoard = document.getElementById("score-board");

var playAgaininButton = document.getElementById("play-again-button")

scoreBoard.innerHTML = score;

playAgaininButton.onclick = () => {
    location.href = "./game.html";
}