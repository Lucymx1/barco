var ship
var ship_moving
var sea 
var seaImage

function preload(){
  seaImage = loadImage("sea.png") 
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);

   
  // mar
  sea = createSprite(400,165,30,20);
  sea.addImage(seaImage);
  sea.scale = 0.5;
  
  // crear sprites barco
  ship = createSprite(200,230,20,50);
  ship.addAnimation("moving",ship_moving)
  ship.scale = 0.16;

   
}

function draw() {
  background("blue");
 
  //codigo para reiniciar el fondo
  if (sea.x <0)
  {
    sea.x=seawidth/2;
  }
 
  drawSprites();
}