let temp = 0;
let timer = 10;
let start = false;
let arrow;
let currmillis;
let intervol;

function preload() {
  arrow = loadImage('assets/arrow_icon.png');
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
  let green = color('#00BA00');


  //display temperture 
  textAlign(CENTER, CENTER);
  background(dark);
  textSize(38);
  fill(orange);
  text(temp + '°C', width/2, height/2);

  //display timer
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(orange);
  text(timer, width - 40, height - 40);

  //reset prompt
  textAlign(CENTER, CENTER);
  fill(green);
  textSize(18);
  textFont('input-serif');
  text("Press Enter To Reset", width/2, 30);


  arrow.resize(0, 30);
  
  if (currmillis < intervol){
  	image(arrow, width/2 + 55, height/2 - 45);
    currmillis = millis();
  }

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
  currmillis = millis();
  intervol = millis() + 100;
  keyEvent();
}

function keyEvent(){
  start = true;
  temp += 3;
}


function reset(){
  temp = 0;
  timer = 10;
  start = false;
}