const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.update(engine);
	
	bob1 = new bob(300, 375, 25);
  bob2 = new bob(350, 375, 25);
  bob3 = new bob(400, 375, 25);
  bob4 = new bob(450, 375, 25);
  bob5 = new bob(500, 375, 25);

  roof1 = new roof(400, 175, 250, 25);

  rope1 = new rope(bob1.body, {x: 300, y: 175})
  rope2 = new rope(bob2.body, {x: 350, y: 175});
  rope3 = new rope(bob3.body, {x: 400, y: 175});
  rope4 = new rope(bob4.body, {x: 450, y: 175});
  rope5 = new rope(bob5.body, {x: 500, y: 175});

	Engine.run(engine);
}


function draw() 
{
  rectMode(CENTER);
  background(255);

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

  roof1.display();

  drawSprites();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  { 
    bob1.body.position.x = 50;
    bob1.body.position.y = 600;

    Matter.Body.setStatic(bob1.body, false);
  }
}




