/*
	Snake game based in part on tutorial from http://www.andrespagella.com/snake-game
*/

//variables

var canvas = document.getElementById('game-area'),
	ctx = canvas.getContext('2d'),
	score = 0,
	level = 0,
	direction = 0;

var map = new Array(50);
for (var i = 0; i < map.length; i++) {
	map[i] = new Array(50);
}

var snake = new Array(3);

//functions

//clears the canvas, redraws the frame
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

function generateFood(map) {
	//Generates random x and y for food
	var rndX = Math.round(Math.random() * 19),
		rndY = Math.round(Math.random() * 19);

	//Assures food doesn't land on the snake's body
	while (map[rndX][rndY] === 2) {
		var rndX = Math.round(Math.random() * 19),
			rndY = Math.round(Math.random() * 19);
	}

	//places the food out there
	map[rndX][rndY] = 1;
	return map;
}

function generateSanke(map) {
	var rndX = Math.round(Math.random() * 19),
		rndY = Math.round(Math.random() * 19);

	//makes sure our hero isn't born outside our walled city
	//also makes sure his tail is inside the walls
	while ((rndX - snake.length) < 0) {
		rndX = Math.round(Math.random() * 19);
	}

	//draws our snake onto the map
	for (var i = 1; i < snake.length; i++) {
		snake[i] = {x: rndX - i, y: rndY};
		map[rndY - 1][rndY] = 2;
	}

	return map;
}

//canvas manipulation

map = generateFood(map);
map = generateSanke(map);
drawGame();

