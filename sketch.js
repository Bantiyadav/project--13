var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf , leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
} 
var select_sprites =Math.round(random(1,3));
if(frameCount% 80 == 0){
if(select_sprites ==1)
{createApples();}
else if (select_sprites ==2){      createApples();}
else{createApples();}  }
drawSprite();

var select_sprites = Math.round(random(1,3));
if(framecount % 100 == 0){
  if(select_sprites ==1)
  {createLeaves();}
  else if (select_sprites ==5){      
createLeaves();}
else{createLeaves();}  }
drawSprite();
  

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.1;
apple.velocityY = 5 ;
apple.lifetime = 150;
  
}

function createleaves() {
leaf = createSprite(random(50, 350),40, 10, 10);
leaf.addImage(leafImg);
leaf.scale=0.1;
leaf.velocityY = 5;
leaf.lifetime = 150;
}