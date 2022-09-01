
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,world,engine
var base,base2,base3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var balls_opitions={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2,
}


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base=new Ground(400,600,1000,10)
	base2= new Ground(550,550,10,92)
	base3=new Ground(700,550,10,92)

	ball= Bodies.circle(300,200,20,balls_opitions)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Matter.Bodies.circle(400,500, 40)
	base.display();
	base2.display()
	base3.display()
  ellipse(ball.position.x,ball.position.y,40,40)
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===32){
	Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
}



