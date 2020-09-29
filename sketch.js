
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var particles = [];

function preload(){
  light1 = loadImage("images/1.png");
  light2 = loadImage("images/2.png");
  light3 = loadImage("images/2.png");
  light4 = loadImage("images/4.png");
}


function setup() {
  createCanvas(500, 800);

	engine = Engine.create();
  world = engine.world;

 man = new Man(300,400);
 
 
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  spawnLightning();

 man.display();
  
   particles.push(new Drop(random(0,500),2,2));

   particles.push(new Drop(random(0,500),2,2));

   particles.push(new Drop(random(0,500),2,2));

 for(var i=0 ; i<particles.length ; i++){
  particles[i].display();
  }

  for(var i=0 ; i<particles.length ; i++){
    particles[i].display();
  }  

  drawSprites();

}

function spawnLightning(){
  if(frameCount % 80 === 0 ){
    var lightning = createSprite(random(0,500),100,10,10);
    lightning.velocityY = -8;
    var rand = Math.round(random(0,4));
    switch(rand){
      case 1 : lightning.addImage(light1);
        break;
      case 2 : lightning.addImage(light2);
        break;
      case 3 : lightning.addImage(light3);
        break;
      case 4 : lightning.addImage(light4);  
        break;
      default : break;
    }
    lightning.scale = 0.5;
  }
}


  