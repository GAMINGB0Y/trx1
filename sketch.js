
var trex ,trex_running;
var ground
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") 

}

function setup(){
  createCanvas(600,200)
  ground= createSprite(200,180,400,20)
  //create a trex sprite
 trex= createSprite(50,150,30,30)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
}

function draw(){
  background("white")
  drawSprites()

}
