const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

var framesPerSecond = 60;

function DrawRect(x, y, w, h, color)
{
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

// The game loop
function Update()
{

}

// Where all the elements will be drawn
function Render()
{

}

setInterval(Update, 1000 / framesPerSecond);
setInterval(Render, 1000 / framesPerSecond);
