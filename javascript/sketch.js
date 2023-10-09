let x = 200;
let y = 200;
let d = 50


function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  

  if (mouseY < 100) {
    // speed *= -1;
    fill(255, 0, 0);
    circle(random(0, 400), random(0, 100), 20);
  }  
  
  else if (mouseY < 200 && mouseY > 100) {
    fill(200, 255, 0);
    circle(random(0, 400), random(100, 200), 20);
  } 
  
  else if (mouseY < 300 && mouseY > 200) {
    fill(200, 10, 255);
    circle(random(0, 400), random(200, 300), 20);
  } 
  
  else {
    fill(20, 10, 255);
    circle(random(0, 400), random(300, 400), 20);
  } 
  
  


  
}

