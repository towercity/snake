/*
	Snake game based in part on tutorial from http://www.andrespagella.com/snake-game
*/

//declare canvas variables
var canvas = document.getElementById('game-area');
var ctx = canvas.getContext('2d');

//draw a border around the edge of the canvas element
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);

