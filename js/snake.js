/*
	Snake game based in part on tutorial from http://www.andrespagella.com/snake-game
*/

//global variables

//canvas variables
var canvas = document.getElementById('game-area'),
	ctx = canvas.getContext('2d'),
//game variables
	score = 0,
	level = 0;

//functions

//cleras the canvas, redraws the frame
function drawGame() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawMain();
}

//draws the frame of the game
function drawMain() {
	//draw a border around the edge of the canvas element
	ctx.lineWidth = 2;
	ctx.strokeStyle = "black";
	ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);

	//display the score and level
	ctx.font = '14px sans-serif';
	ctx.fillText('Score: ' + score + ' - Level: ' + level, 2, 12);
}

drawGame();

