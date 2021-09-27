let temp = 0;
let timer = 10;
let start = false;

function preload() {
  
}

function setup() {
  createCanvas(500, 800);
  reset();
}

function draw() {
  //color palette
  let dark = color(21, 24, 28);
  let red = color('#C70016');
  let orange = color('#F54600');
  let yellow = color('#F56E00');
  let green = color('#72A603');

  //display temperture 
  textAlign(CENTER, CENTER);
  background(dark);
  textSize(38);
  fill(orange);
  text(temp + '°C', width/2, height/2);

  //display timer
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(red);
  text(timer, width - 30, height - 30);

  //reset prompt
  textAlign(CENTER, CENTER);
  fill(yellow);
  textSize(18);
  textFont('input-serif');
  text("Press Enter To Reset", width/2, 20);


  //timer and gameState
  if (frameCount % 60 == 0 && timer > 0 && start){
    timer--;
  }
  if (timer == 0 && temp > 40){
    background(dark);
    textSize(22);
    fill(red)
    text("LETHAL TEMP: THE PLANET DIES", width/2, height/2);
  }else if (timer == 0 && temp <= 40){
    background(dark);
    textSize(22);
    fill(green)
    text("THE PLANET IS HABITABLE!", width/2, height/2)
  }
  
}

function keyPressed() {
  if (keyCode === ENTER) {
    reset();
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

function reset(){
  temp = 0;
  timer = 10;
  start = false;
}