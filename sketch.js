//var createSprite=createSprite(200,200)
var player,playerRunning
var banana,bananaImage
var obstacle,obstacleImage,obstacleGroup
var backg,backImage
var ground,groundImg

function preload(){
  backImage=loadImage("jungle.png")
  playerRunning=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  bananaImage=loadImage("Banana.png")
  obstacleImage=loadImage("stone.png")
  
}


function setup() {
  createCanvas(400,400);
 backg = createSprite(200,200,400,400);
    backg.velocityX=-2;
  backg.addImage("background",backImage)
  ground = createSprite(400,370,800,10);
  ground.velocityX=-4;
  ground.visible=false
  //player.addAnimation("player",playerRunning)

}

function draw() {
  
  ground.x=ground.width/2;
  background(255);
  bananas();
 rocks();
  //player.collide(ground);


score=Math.ceil(World.frameCount/frameRate());

  drawSprites();
    stroke("white")
  textSize(20);
  fill("white")
  text("Score"+score,500,50)
}
function bananas(){
   if (World.frameCount % 80 === 0) {
    var bananas = createSprite(400,random(120,200),40,10);
    bananas.y = random(280,320);
    bananas.addAnimation(bananaImage);
    bananas.scale = 0.05;
    bananas.velocityX = -3;
    bananas.lifetime = 134; 
    //bananaGroup.add(bananas);
   }
}
  
  function rocks(){
    if(World.frameCount % 300 === 0) {
    var rock = createSprite(400,365,10,40);
    rock.velocityX = -3;
    rock.scale = 0.2;
    rock.lifetime = 134;
    rockGroup.add(rock);
}
}