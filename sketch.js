let temp = 0;

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


  background(gray);
  textSize(38);
  fill(orange);
  text(temp + '°C', width/2 - 20, height/2);
  
}

function mousePressed(){
  keyEvent();
}

function keyEvent(){
  temp += 3;
  //displayArrow() //up arrow stays for a fraction of a second or so next to temp
}