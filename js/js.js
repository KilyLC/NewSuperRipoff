const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

var framesPerSecond = 60;

// It's like .fillRect but with color
function DrawRect(x = 0, y = 0, w = 0, h = 0, color = "white")
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
  this.speed = 5;
  this.gravity = 15;
  this.moveLeft = false;
  this.moveRight = false;
  this.isGrounded = false;
  this.sprite = new Image();

  // Methods
  this.Move = Move;
}

// Rectangle function
function Move(x = 0, y = 0)
{
  this.x += x;
  this.y += y;
}

// Var to check if the jump key is down
var jumpIsDown = false;

// Function to get the key (down)
function ManageKeyDown(e)
{
  e = e || window.event;

  // "W" Key
  if (e.keyCode == "87")
  {
    jumpIsDown = true;

    if (player.isGrounded)
    {
      gravity = player.gravity;
      player.isGrounded = false;
    }
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

  // "W" Key
  if (e.keyCode == "87")
  {
    jumpIsDown = false;
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

// Background object
var background = new Rectangle(0, 0, canvas.width, canvas.height);
background.sprite.src = "img/background.jpg";

// Temp gravity
var gravity = player.gravity;

// The game loop
function Update()
{
  if (player.moveLeft)
  {
    player.Move(-player.speed);
  }
  if (player.moveRight)
  {
    player.Move(player.speed);
  }

  // Ground collision
  if (player.y >= canvas.height - player.height)
  {
    player.isGrounded = true;
    player.y = canvas.height - player.height;
  }

  if (jumpIsDown && player.isGrounded)
  {
    player.isGrounded = false;
  }

  if (!player.isGrounded)
  {
    player.y -= gravity;
    gravity--;
    console.log(gravity);
  }
}

// Where all the elements will be drawn
function Render()
{
  // Draws the background
  ctx.drawImage(background.sprite, background.x, background.y, background.width, background.height);

  DrawRect(player.x, player.y, player.width, player.height, player.color);
}

setInterval(Update, 1000 / framesPerSecond);
setInterval(Render, 1000 / framesPerSecond);
