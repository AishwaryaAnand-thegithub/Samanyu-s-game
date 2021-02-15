var bg,bgimg;
var player,playerAniR,playerAniL;
var playerimg;
var invisibleGround;

function preload(){

  bgimg = loadImage("game character folder/bg.png");
  playerimg = loadAnimation("game character folder/d9.png","game character folder/d9.png","game character folder/d9.png","game character folder/d9.png")

 playerAniR = loadAnimation("game character folder/r1.png","game character folder/r2.png","game character folder/r3.png","game character folder/r4.png","game character folder/r5.png","game character folder/r6.png","game character folder/r7.png","game character folder/r8.png","game character folder/r9.png")
 playerAniL = loadAnimation("game character folder/l1.png","game character folder/l2.png","game character folder/l3.png","game character folder/l4.png","game character folder/l5.png","game character folder/l6.png","game character folder/l7.png","game character folder/l8.png","game character folder/l9.png")
}


function setup() {
  createCanvas(500,500);

  bg = createSprite(250,250,1000,460)
  bg.addImage(bgimg);

  player = createSprite(250,430,30,50)
  player.addAnimation("face",playerimg);
  player.addAnimation("right",playerAniR);
  player.addAnimation("left",playerAniL);
  player.scale = 2;

  invisibleGround = createSprite(250,480,3000,10);
  invisibleGround.shapeColor = "white";
  invisibleGround.visible = false;

//bg.x = bg.width/4
}

function draw() {
  background(0); 
  
  if(keyDown(RIGHT_ARROW)){
player.changeAnimation("right",playerAniR)
player.x = player.x + 5;
  }
  else if (keyDown(LEFT_ARROW)){
    player.changeAnimation("left",playerAniL);
    player.x = player.x - 5;
}
  else{
    player.changeAnimation("face",playerimg)

  }

 
 

camera.position.x = player.x;
  player.collide(invisibleGround);
  
  drawSprites();
}