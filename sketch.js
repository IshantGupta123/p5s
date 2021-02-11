const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world;
var box1,ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world

ground=new Ground(200,380,400,30);
  
}

function draw() {
  background(0); 
  Engine.update(engine);

ground.display();
  
}
