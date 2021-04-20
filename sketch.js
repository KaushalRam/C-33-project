const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles = [];
var plinkos  = [];
var divisions = [];
var ground = [];
var divisionHieght=300;
var engine,world;

function setup() {
  createCanvas(800,800);
  engine = Engine.create(); 
  world = engine.world; 
  ground = new Ground(width/2,height,width,20);
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, hieght=divisionHieght/2, 10, divisionHieght));
  } 
  for (var j = 75; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j, 175));
  }

}


function draw() {
  background(255,255,255);
  ground.display();
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display(); }
  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
    

  }
  for (var i = 0; i < plinkos.length; i++) {


    plinkos[i].display(); 


  }

  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10), 10,10));

  }
  drawSprites();
}
