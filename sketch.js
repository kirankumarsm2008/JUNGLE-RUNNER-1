var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0;

var boy,boyRunning;
var bg,forestImg;

var obst1,obst2,obst3;

function preload(){
  forestImg = loadImage("images/background.png");

  boyRunning = loadAnimation("images/run 1.png","images/run 2.png","images/run 3.png","images/run 4.png","images/run 5.png","images/run 6.png","images/run 7.png","images/run 8.png","images/run 9.png","images/run 10.png","images/run 11.png","images/run 12.png","images/run 13.png","images/run 14.png","images/run 15.png",)
 
  obst1 = loadImage("images/obst 1.png");
  obst2 = loadImage("images/obst 2.png");
  obst3 = loadImage("images/obst 3.png");

}

function setup() {
createCanvas(769,440);

bg = createSprite(401,200);
bg.addImage("bg",forestImg);
bg.scale = 2


 boy = createSprite(740,420,50,50);
boy.addAnimation("running",boyRunning)
boy.scale = 0.5;


invisibleGround = createSprite(950,430,400,10);
invisibleGround.visible = false;

obstGroup = createGroup();

}

function draw() {
background(180)



  if (gameState === PLAY) {


  bg.velocityX = (1 + 1* score/500)

  //scoring
  score = score + Math.round(getFrameRate()/4);

  if (bg.x > 400){
  bg.x = bg.width/2;
  }
  
  if(keyDown("space")&& boy.y >= 100) {
  boy.velocityY = -10;
  }


  //add gravity
  boy.velocityY = boy.velocityY + 0.8;

  if(obstGroup.isTouching(boy)){
  gameState = END;  
  }

  } else if(gameState === END){


    bg.velocityX = 0;
    boy.velocityY = 0

    obstGroup.setLifetimeEach(-1);
    obstGroup.setLifetimeEach(-1);


  }

  boy.collide(invisibleGround);

drawSprites()
  //displaying score
  textSize(24)
  fill("red")
  text("Score: "+ score, 500,50);
}


