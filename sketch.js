var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var jump;
var obsTop1,obsTop2


function preload(){
bgImg = loadImage("assets/bg.png")
jump = loadSound("assets/jump.mp3")
balloonImg = loadAnimation("assets/balloon1.png","assets/balloon1.png","assets/balloon1.png")
obsTop1 = loadImage("assets/obsTop1.png")
obsTop2 = loadImage("assets/obsTop2.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY= -6 ;
           // jump.play()
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY+2;
 spawnObsTop();

           
   
        drawSprites();
        
}
function spawnObsTop(){
  
  if (frameCount%60 ===0){
    obsTop = createSprite(400,200,50,50)
    obsTop.velocityX= -5 

    r= Math.round(random(1,2))
    switch(r){
      case 1: obsTop.addImage(obsTop1)
      break;
      case 2: obsTop.addImage(obsTop2)
      break;

    }
    obsTop.scale=0.1;
    obsTop.y=random(10,100)
    obsTop.lifetime=100;
  }
  
  
}

