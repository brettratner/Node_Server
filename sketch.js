
// Keep track of our socket connection
// var socket;

function setup() {
  createCanvas(400,400);
  background(0);
  // Start a socket connection to the server
  //socket = io.connect('http://localhost:8080');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
//  socket.on('mouse',
    // When we receive data
//     function(data) {
//       console.log("Got: " + data.x + " " + data.y);
//       // Draw a blue circle
//       fill(255,144,30);
//       noStroke();
//       rect(data.x,data.y,20,20);
//     }
//   );
 }

function draw() {
  // Nothing
 
}

function mouseDragged() {
  // Draw some white circles
  fill(30,144,255);
  noStroke();
  rectMode(CENTER);
  rect(mouseX,mouseY,20,20);
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);
  
  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
 // socket.emit('mouse',data);
}