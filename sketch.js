var ball,block1,block2,block3,block4;
var music;
var canvas

function preload()
{
music = loadSound("music.mp3");
}

function setup()
{

canvas = createCanvas(390,400);
block1 = createSprite(45,390,90,20);
block1.shapeColor = "red";

block2 = createSprite(145,390,90,20);
block2.shapeColor = "yellow";

block3 = createSprite(245,390,90,20);
block3.shapeColor = "blue";

block4 = createSprite(345,390,90,20);
block4.shapeColor = "green";

ball = createSprite(random(20,350),290,20,20);
ball.velocityX =  3;
ball.velocityY =  3;
}

function draw(){
background(0);
createEdgeSprites();
music.play();
if (ball.isTouching(block1)){
ball.shapeColor = "red";
}


if (block4.isTouching(ball) && ball.bounceoff(surface3))
  {
    ball.shapeColor = "green";
  }

if (block3.isTouching(ball) && ball.bounceoff(surface4))
  {
    ball.shapeColor = "blue";
  }

  if (block2.isTouching(ball) && ball.bounceoff(surface1))
  {
    ball.shapeColor = "yellow";
    ball.velocityY = 0;
    ball.velocityX = 0;
    music.stop();
  }



drawSprites();
ball.bounceOff(edges);
}