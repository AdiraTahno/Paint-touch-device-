var canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext ("2d");
var lastPositionX = 0;
var lastPositionY = 0;
var width = screen.width;
var new_width = screen.width-70;
var new_height = screen.height-300;
if (width<992) {
  document.getElementById ("myCanvas").width = new_width;
  document.getElementById ("myCanvas").height = new_height;
  document.body.style.overflow = "hidden";
};
function mymousemove (e) {
  currentPositionOfX = e.clientX-canvas.offsetLeft;
  currentPositionOfY = e.clientY-canvas.offsetTop;
  if  (mouseEvent == "mousedown") { 
    if (X=="draw") {
      ctx.beginPath ();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 4;
    ctx.moveTo (lastPositionX,lastPositionY);
    ctx.lineTo (currentPositionOfX, currentPositionOfY);
    ctx.stroke (); 
    } else if (X == "erase") {
ctx.beginPath ();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 20;
    ctx.moveTo (lastPositionX,lastPositionY);
    ctx.lineTo (currentPositionOfX, currentPositionOfY);
    ctx.stroke (); 
    };
  };
  lastPositionX = currentPositionOfX;
  lastPositionY = currentPositionOfY;
};

function draw () {
  X = "draw";
};

function erase () {
  X = "erase"
};

function clear_canvas () {
  ctx.clearRect (0,0, ctx.canvas.width, ctx.canvas.height)
};