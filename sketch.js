
var bg, backgroundImg;
var ironman;
var stoneGroup,stoneImage;
var diamondGroup,diamonImage;
var diamondScore=0;

function preload() {
  bgImg = loadImage("images/bg.jpg");
 ironmanImg = loadImage("images/iron.png");
 stoneImage=loadImage("images/stone.png");
 diamondImage=loadImage("images/diamond.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(bgImg);
  bg.scale =2;
  bg.velocityY=10;

ground = createSprite(200,585,1700,10);
 ground.visible = false;
 stoneGroup=new Group();
 

ironman =createSprite(200,450,20,50);
ironman.addImage(ironmanImg);
ironman.scale=0.3;
diamondGroup=new Group();
}

function draw() {
  if(bg.y>500)
  bg.y=200;
  if(ironman.x<200){
    ironman.x=200;
  }

  if(ironman.y<50){
    ironman.y=50;
  }
  if(keyDown("up")){
  ironman.y -= 5;
  }
  
  if(keyDown("left")){
  ironman.x=ironman.x -5;
  }
  if(keyDown("right")){
  ironman.x=ironman.x +5;
  }
  if(keyDown("down")){
    ironman.y=ironman.y +5;
    }
  
  
  generateStones();
  for(var i = 0 ; i< (stoneGroup).length ;i++){
    var temp = (stoneGroup).get(i) ;
  
  if (ironman.isTouching(temp)) {
  ironman.collide(temp);
  
  }

}
 generateDiamonds();
  for(var i = 0 ; i<( diamondGroup).length ;i++){
  var temp = (diamondGroup).get(i) ;
  
  if (temp.isTouching(ironman)) {
  diamondScore++;
  temp.destroy();
  temp=null;
  }
}

  ironman.collide(ground);

    drawSprites();
    textSize(25);
  fill("yellow");
  text("Diamonds Collected: "+ diamondScore, 500,50);
}  

function generateStones(){
  if (frameCount % 70 === 0) {
    var stone = createSprite(1200,120,40,10);
    stone.x = random(100,650);
  stone.addImage(stoneImage);
    stone.scale = 0.5;
    stone.velocityY = +2;
    
    stone.lifetime =250;
    stoneGroup.add(stone);
}
}
function generateDiamonds() {
  if (frameCount % 50 === 0) {
   var diamond = createSprite(1200,120,40,10);
   diamond.x = random(50,900);
   //diamond.y =random (50,900);
  diamond.addImage(diamondImage);
    diamond.scale = 0.5;
    diamond.velocityY = +5;
    
    diamond.lifetime =1000;
  diamondGroup.add(diamond);
}
}
