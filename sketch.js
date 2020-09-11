var wall,thickness;
var bullet,speed,weight;
function setup(){
  createCanvas(1600,400);
  bullet=createSprite(20,20,10,10);
  bullet.shapeColor="white";
  var thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  var speed=random(223,321);
  var weight=random(30,52);
}

function draw(){
  background(255,255,255);
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10)
    
    {
      
    wall.shapeColor=color(255,0,0);

    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}