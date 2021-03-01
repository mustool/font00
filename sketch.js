var font;

function preload(){
  //font = loadFont('cbm-64.ttf', 20);
  font = loadFont('cbm-64.ttf');
}

function setup() {
  createCanvas(500,560);

}

function draw() {
  background(0);
  stroke(255);
  fill(255);
  textFont(font);
  textSize(40);
  text("WELCOME TO THE \nWEBPAGE OF MUS", 10, 100);
}
