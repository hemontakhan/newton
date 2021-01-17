
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Roof(350,100,300,30);
	World.add(world,roof);
	
	bob1=new Bob(200,105,65);
	bob2=new Bob(220,105,65);
	bob3=new Bob(225,105,65);
	bob4=new Bob(235,105,65);
	bob5=new Bob(245,105,65);


	rope1=new Rope(bob1.body,roof.body);
	World.add(world,rope1);

	rope2=new Rope(bob2.body,roof.body);
	World.add(world,rope2);
	
	rope3=new Rope(bob3.body,roof.body);
	World.add(world,rope3);

    rope4=new Rope(bob4.body,roof.body);
	World.add(world,rope4);

	rope5=new Rope(bob5.body,roof.body);
	World.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  Engine.update(engine);
  
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

  roof.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-150,y:-30});

  }

}


