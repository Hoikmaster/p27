
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var holder;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	holder = new Ground(390,100,400,50)
	bob1 = new Bob(230,400,75)
	bob2 = new Bob(305,400,75)
	bob3 = new Bob(380,400,75)
	bob4 = new Bob(455,400,75)
	bob5 = new Bob(530,400,75)

	rope1 = new Rope(bob1.body,holder.body,-155,0);
	rope2 = new Rope(bob2.body,holder.body,-80,0);
	rope3 = new Rope(bob3.body,holder.body,0,0);
	rope4 = new Rope(bob4.body,holder.body,70,0);
	rope5 = new Rope(bob5.body,holder.body,150,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  holder.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:50});
	}

}

