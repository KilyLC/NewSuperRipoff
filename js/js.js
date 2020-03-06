const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

var framesPerSecond = 60;

// It's like .fillRect but with color
function DrawRect(x, y, w, h, color)
{
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

// Rectangle object
function Rectangle(x = 0, y = 0, w = 0, h = 0, color = "white")
{
  // Constructors elements
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.color = color;

  // Other variables
  this.speed = 0;
}

// Player object
var player = new Rectangle(0, 0, 50, 50, "lightgreen");

// The game loop
function Update()
{

}

// Where all the elements will be drawn
function Render()
{
  // Resets the background color
  DrawRect(0, 0, 1000, 500, "white");

  DrawRect(player.x, player.y, player.width, player.height, player.color);
}

setInterval(Update, 1000 / framesPerSecond);
setInterval(Render, 1000 / framesPerSecond);
