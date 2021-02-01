var r1,r2;
function setup() {
  createCanvas(800,400);
  r1=createSprite(400, 200, 50, 50);
  r1.shapeColor="blue";
  r2=createSprite(300,200,50,50);
  r2.shapeColor="blue";
  r3=createSprite(200,200,50,50)
  r3.shapeColor="yellow";
  r4=createSprite(100,200,50,50)
  r4.shapeColor="yellow";
  r4.velocityX=4;
  r5=createSprite(500,200,50,50)
  r5.shapeColor="pink";
  r5.velocityX=-4;
}

function draw() {
  background(0); 
  r1.x=mouseX ;
  r1.y=mouseY;
if(isTouching(r1,r3)){
  r1.shapeColor="green";
  r3.shapeColor="green";
}else {
  r1.shapeColor="blue";
  r3.shapeColor="yellow"; 
}
bounceoff(r4,r5);
  drawSprites();
}
function isTouching(r1,r2){
  if(r1.x-r2.x<r1.width/2+r2.width/2&&r2.x-r1.x<r1.width/2+r2.width/2
    &&r1.y-r2.y<r1.height/2+r2.height/2&&r2.y-r1.y<r1.height/2+r2.height/2){
   return true;
  }
  else{
   return false;
  }
}
function bounceoff(b1,b2){
if(b1.x-b2.x<b2.width/2+b1.width/2&&b2.x-b1.x<b1.width/2+b2.width){
  b1.velocityX=-b1.velocityX;
  b2.velocityX=-b2.velocityX;
}
if(b1.y-b2.y<b2.height/2+b1.height/2&&b2.y-b1.y<b1.height/2+b2.height){
  b1.velocityY=-b1.velocityY;
  b2.velocityY=-b2.velocityY;

}
}