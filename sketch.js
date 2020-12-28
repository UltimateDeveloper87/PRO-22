//Hriday, the code of Physics Engine will be always there 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;

var helicopterIMG, helicopter, packageSprite,packageIMG;
var packageBody,ground

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
    
    //physics engine code 
    myEngine = Engine.create();
    myWorld = myEngine.world;
    

    rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
    World.add(myWorld, packageBody);
    
	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	 
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(myWorld, ground)
}


function draw() {
    Engine.update(myEngine)
    rectMode(CENTER);
    background(0);
    //v. important the sprite takes the position of the body
    packageSprite.x= packageBody.position.x 
    packageSprite.y= packageBody.position.y 

    drawSprites();
   
  }
  
  function keyPressed() {
   if (keyCode === DOWN_ARROW) {
      // Look at the hints in the document and understand how 
      //to make the package body fall only on
      //we use const Body for this 
      Matter.Body.setStatic(packageBody,false);
    }
  }