
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var player;
var left_button, right_button; 

function preload(){
bgImg= loadImage("background.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  
 player= new Player(750,500,200,200)
 left_button= createImg ("letf.png")
 left_button.position(50,50)
   left_button.size(50,50)
   left_button.mouseClicked(move)

   right_button= createImg ("right.png")
 right_button.position(300,300)
   right_button.size(50,50)
   right_button.mouseClicked(moveLeft)
}


function draw() 
{
  background(bgImg);
  Engine.update(engine);
  fill("#FFFF");
  textAlign("center");
  textSize(20);
  text("BECOMING STRONGER", width/2, 50);

player.display ()

}

function move(){
  Matter.Body.applyForce(player,{x:0,y:0},{x:0.03,y:0});
}


function moveLeft(){
  Matter.Body.applyForce(player,{x:0,y:0},{x:-0.3,y:0});
}