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
function Rectangle(x, y, w, h, color)
{
  // Constructors elements
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.color = color;

  // Other variables
  this.speed = 0;
  this.moveLeft = false;
  this.moveRight = false;
}

// Function to get the key (down)
function ManageKeyDown(e)
{
  e = e || window.event;

  // Space Key
  if (e.keyCode == "32")
  {

  }
  // "A" Key
  if (e.keyCode == "65")
  {
    player.moveLeft = true;
  }
  // "D" Key
  if (e.keyCode == "68")
  {
    player.moveRight = true;
  }
}

// Function to get the key (up)
function ManageKeyUp(e)
{
  e = e || window.event;

  // Space Key
  if (e.keyCode == "32")
  {

  }
  // "A" Key
  if (e.keyCode == "65")
  {
    player.moveLeft = false;
  }
  // "D" Key
  if (e.keyCode == "68")
  {
    player.moveRight = false;
  }
}

// Player object
var player = new Rectangle(0, canvas.height - 50, 50, 50, "lightgreen");

// The game loop
function Update()
{
  if (player.moveLeft)
  {

  }
  if (player.moveRight)
  {

  }
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
