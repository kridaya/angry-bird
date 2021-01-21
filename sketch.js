const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box,box1;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var box2,box3,box4; 
var bird1;
function setup() {
 
 
  createCanvas(1200,400);
 // createSprite(200, 200, 50, 50);
 engine = Engine.create();
 world= engine.world;
 ground=new Ground(600,height,1200,30);
 box=new Box(700,320,70,70);
 box1=new Box(920,320,70,70); 
 pig1=new pig(810,350);
 log1=new log(810,250,300,PI/2)
 box2=new Box(700,240,70,70);
 box3=new Box(920,240,70,70);
 pig2=new pig(810,220);
 log2=new log(810,180,300,PI/2);
 box4=new Box(810,160,70,70);
 log3=new log(790,120,150,PI/7);
 log4=new log(830,120,150,-PI/7);
 bird1=new bird(100,100);
}

function draw() {
  background(0); 
  Engine.update(engine);
 box.display();
 box1.display();
 ground.display();
 pig1.display();
 log1.display();
box2.display();
box3.display();
pig2.display();
log2.display();
box4.display();
log3.display();
log4.display();
bird1.display();




}