var bow, bowI
var arrow, arrowI
var redB,redI
var blueB,blueI
var greenB,greenI
var pinkB,pinkI
var bg;
var arrowG,redG,blueG,greenG,pinkG
var score=0

function preload(){
 //load your images here 
  blueI = loadImage("blue_balloon0.png");
  redI = loadImage("red_balloon0.png");
  greenI = loadImage("green_balloon0.png");
  pinkI = loadImage("pink_balloon0.png");
  bowI = loadImage("bow0.png");
 arrowI = loadImage("arrow0.png");
  bg = loadImage("background0.png");
}

function setup() {
  createCanvas(600, 600);
  
  background= createSprite(0,0)
   background.addImage(bg)
   background.scale= 2.5
  
  
  bow= createSprite(480,280);
   bow.addImage(bowI)
  
  arrowG= new Group();
  redG= new Group();
  greenG= new Group();
  blueG= new Group();
  pinkG= new Group();
  
}
  function draw(){

 background.velocityX=-3;
  if(background.x<0){
    background.x=background.width/2
  }
  
  bow.y=mouseY;
  
  
  if(keyDown("space")){
    spawnArrow();
    
  }
    
    if(arrowG.isTouching(redG)) {
      redG.destroyEach();
      arrowG.destroyEach();
      score=score+1;
    }
    
   else if(arrowG.isTouching(greenG)) {
      greenG.destroyEach();
      arrowG.destroyEach();
      score=score+2;
    }
    
  else  if(arrowG.isTouching(pinkG)) {
      pinkG.destroyEach();
      arrowG.destroyEach();
      score=score+3;
    }
    
   else if(arrowG.isTouching(blueG)) {
      blueG.destroyEach();
      arrowG.destroyEach();
      score=score+4;
    }
    
  var selectBalloon=Math.round(random(1,4))
    if(frameCount%80===0){
       if(selectBalloon===1){
         spawnRed();
          
          }
      else if(selectBalloon===2){
         spawnGreen();
          
          }
     else  if(selectBalloon===3){
         spawnBlue();
          
          }
      else{
         spawnPink();
          
          }
       
       }
  drawSprites();
  textSize(20)
    text("score: "+score,500,50)
}

function spawnArrow(){
  arrow=createSprite(bow.x,bow.y)
  arrow.addImage(arrowI)
  arrow.scale=0.3
  arrow.velocityX=-6
  arrow.lifetime=200
  arrowG.add(arrow)
}



function spawnBlue(){
  blueB=createSprite(0,Math.round(random(20,370)))
  blueB.addImage(blueI)
  blueB.scale=0.1
  blueB.velocityX=3
  blueB.lifetime=200
  blueG.add(blueB)
}

function spawnRed(){
  redB=createSprite(0,Math.round(random(20,370)))
  redB.addImage(redI)
  redB.scale=0.1
  redB.velocityX=3
  redB.lifetime=200
  redG.add(redB)
  
}

function spawnPink(){
  pinkB=createSprite(0,Math.round(random(20,370)))
  pinkB.addImage(pinkI)
  pinkB.scale=1.2
  pinkB.velocityX=3
  pinkB.lifetime=200
  pinkG.add(pinkB)
}

function spawnGreen(){
  greenB=createSprite(0,Math.round(random(20,370)))
  greenB.addImage(greenI)
  greenB.scale=0.1
  greenB.velocityX=3
  greenB.lifetime=200
  greenG.add(greenB)
  
  
}

