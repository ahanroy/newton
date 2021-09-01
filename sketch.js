const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var rope1
var rope2
var rope3
var rope4
var rpoe5
var ball1
var ball2
var ball3
var ball4 
var ball5 

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

     var ball_options={
		 restitution:1,
		 density:0.8
	 }



	roof = Bodies.rectangle(400,200,230,20,roof_options);
    World.add(world,roof);

    ball1 = Bodies.circle(320,380,20,ball_options);
    World.add(world,ball1);

	ball2 = Bodies.circle(360,380,20,ball_options);
    World.add(world,ball2);

	ball3 = Bodies.circle(400,380,20,ball_options);
    World.add(world,ball3);

	ball4 = Bodies.circle(440,380,20,ball_options);
    World.add(world,ball4);

	ball5 = Bodies.circle(480,380,20,ball_options);
    World.add(world,ball5);

	rope1=new rope (ball1,roof,-80,0) 
	rope2=new rope (ball2,roof,-40,0)
	rope3=new rope (ball3,roof,0,0)
	rope4=new rope (ball4,roof,40,0)
	rope5=new rope (ball5,roof,80,0)
	

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);

  rope1.show()
  rope2.show()
  rope3.show()
  rope4.show()
  rope5.show()


  //create ellipse shape for multiple bobs here
 ellipse(ball1.position.x,ball1.position.y,40,40)
 ellipse(ball2.position.x,ball2.position.y,40,40)
 ellipse(ball3.position.x,ball2.position.y,40,40)
 ellipse(ball4.position.x,ball2.position.y,40,40)
 ellipse(ball5.position.x,ball2.position.y,40,40)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
 function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1,ball1.position,{x:-50,y:0})
	}



 }