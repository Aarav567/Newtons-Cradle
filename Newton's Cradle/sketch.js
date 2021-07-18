
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var roofObject;
var world;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var bobdiameter;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	bobdiameter = 40;

	roofObject=new roof(width/2,height/4,width/7,20);
	startbobposx = width/2
	startbobposy = height/4 + 500
	bob1 = new bob(startbobposx-bobdiameter*2,startbobposy,bobdiameter);
	bob2 = new bob(startbobposx-bobdiameter,startbobposy,bobdiameter);
	bob3 = new bob(startbobposx, startbobposy, bobdiameter);
	bob4 = new bob(startbobposx+bobdiameter, startbobposy,bobdiameter );
	bob5 = new bob(startbobposx+bobdiameter*2, startbobposy, bobdiameter);
	rope1 = new rope(bob1.body,roofObject.body,-bobdiameter*3,0);
	rope2 = new rope(bob2.body,roofObject.body,-bobdiameter*1, 0);
	rope3 = new rope(bob3.body,roofObject.body,0, 0);
	rope4 = new rope(bob4.body,roofObject.body,bobdiameter*1,0);
	rope5 = new rope(bob5.body,roofObject.body,bobdiameter*2, 0)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  text(mouseX+","+mouseY,mouseX,mouseY)
  roofObject.display();
  bob1.display();
  rope1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


  

  
 
}








