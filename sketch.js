const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roof;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobDiameter = 80;

	//Create the Bodies Here.
	roof = new Roof(400,105,500,40);
	bobObject1 = new Bob(235,600);
	bobObject2 = new Bob(315,600);
	bobObject3 = new Bob(395,600);
	bobObject4 = new Bob(475,600);
	bobObject5 = new Bob(555,600);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background("lightgrey");
  	Engine.update(engine);
	
  	drawSprites();
	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	console.log(bobObject1.body.position.x,',',bobObject1.body.position.y);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-300,y:-45});
	}
}