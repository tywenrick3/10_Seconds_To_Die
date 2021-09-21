let temp = 0;
let timer = 10;
let start = false;

function setup() {
  createCanvas(500, 800);
}

function draw() {
  //color palette
  let dark = color('#15181C');
  let gray = color('#2C2728');
  let red = color('#C70016');
  let orange = color('#F54600');
  let yellow = color('#F56E00');

  //display temperture 
  background(gray);
  textSize(38);
  fill(orange);
  text(temp + '°C', width/2 - 20, height/2);

  //display timer
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(red);
  text(timer, width - 30, height - 30);

  if (frameCount % 60 == 0 && timer > 0 && start){
    timer--;
  }
  
}

function mousePressed(){
  keyEvent();
}

function keyEvent(){
  start = true;
  temp += 3;
  //displayArrow() //up arrow stays for a fraction of a second or so next to temp
}