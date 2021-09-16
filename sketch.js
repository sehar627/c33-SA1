var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var car1,car2,cars;
var car1_img,car2_img

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img=loadImage("assests/car1.png");
  car2_img=loadImage("assests/car2.png")


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  
}

function draw() {
  background(backgroundImage);
  if(gameState===1){
    game.play()
  }
}
