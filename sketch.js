var landscape;
let pemain1, pemain2

function preload() {
  landscape = loadImage("START1.jpeg");
}


function setup() {
  createCanvas(600, 350);
  
  pemain1 = new Pemain(30, 230, "blue")
  pemain2 = new Pemain(30, height-60, "red")
}

function draw() {
  background(landscape);
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  pemain1.finish()
  pemain2.finish()
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    pemain1.maju()
  }
  else if(keyCode === RIGHT_ARROW) {
    pemain2.maju()
  }
}