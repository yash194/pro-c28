
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyimg;
const Constraint=Matter.Constraint;
function preload()
{
	boyimg=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1500, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 boy = createSprite(200,650,10,10);
 boy.addImage(boyimg);
boy.scale=0.1;
groundObject=new ground(width/2,720,width,20);

t1=new tree(1090,700);
m1=new Paper(1050,270,60);
m2=new Paper(1050,350,60);
m3=new Paper(1200,240,60);
m4=new Paper(1200,340,60);
m5=new Paper(925,330,60);
m6=new Paper(1140,210,60);
s1=new stone(150,595,40);

l1=new launch(s1.body,{x:150,y:592});



Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(220,150,255);

  drawSprites();
  groundObject.display();
  t1.display();
  m1.display(); 
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  s1.display();

  l1.display();
  colli(s1,m1);
  colli(s1,m2);
  colli(s1,m3);
  colli(s1,m4);

  colli(s1,m5);
  colli(s1,m6);
  text("press space to get back the stone",200,200)
}

function mouseDragged(){
  Matter.Body.setPosition(s1.body,{x:mouseX,y:mouseY});
  
  }
  
  function mouseReleased(){
  l1.fly();
  
  }
  
  function keyPressed(){
    if(keyCode===32){
    
       Matter.Body.setPosition(s1.body,{x:150,y:592}); 
        l1.attach(s1.body);
    }
    
    }
  function collid(lstone,lmango){

m=lmango.body.position;
s=lstone.body.position;

var distance=dist(s.x,s.y,m.x,m.y);
if(distance<=lmango.r+lstone.r)

  
{
Matter.Body.setStatic(lmango.body,false);
}
  }
  function colli(lstone,lmango){
    /*var collision = Matter.SAT.collides(lstone,lmango);
    if(collision.collided){
      console.log("collided");
      Matter.Body.setStatic(lmango,false);	
    }*/
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    //console.log(distance)
   // console.log(lmango.r+lstone.r)
      if(distance<=lmango.radius+lstone.radius)
      {
        //console.log(distance);
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }


  