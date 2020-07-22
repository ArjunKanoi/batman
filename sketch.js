var bg;
var rand;
var batman,batmanidle, batmankick;
var joker;
function preload(){
  //bg=loadImage("background.png");
  batmanIdle=loadAnimation("pics/batman1.png");
  batmankick=loadAnimation("pics/batman3.png","pics/batman1.png");
  batmankick=loadAnimation("pics/batman3.png","pics/batman3.png","pics/batman3.png","pics/batman1.png");

}
function setup() {
  createCanvas(displayWidth,640);
  rand=Math.round(random(1,2));
  if(rand===1){
    bg=loadImage("pics/gothambackground.png");

  }

  else {
    bg=loadImage("pics/gothambackground3.jpg");
  }
  batman=createSprite(50,600);
  batman.addAnimation("batmanIdle",batmanIdle);
  batman.addAnimation("batmanKicking",batmankick);
 
}

function draw() {
  background(bg);
  if(keyWentDown(RIGHT_ARROW)){
    batman.changeAnimation("batmanKicking");
    batman.x+=5;
  } 
  //if(keyWentUp(RIGHT_ARROW)){
   // batman.changeAnimation("batmanIdle");
  //}   
  drawSprites();
}