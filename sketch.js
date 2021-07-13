const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.body;

var particles = [];
var divisionHeight = 300;
var plinkos = [];
var divisions = [];

function Preload()
{
}




function setup() {

  createCanvas(1920,930);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000,930,2000,20);

  for (var i = 0; i<=width; i = i + 128) {
    divisions.push(new Division(i,height-divisionHeight/2, 10, 450));
  }
   
  for (var j = 100; j <=width; j=j+85){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 50; j <=width-10; j=j+85) {
    plinkos.push(new Plinko(j,175));
  } 
  for (var j = 100; j <=width; j=j+85){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 50; j <=width-10; j=j+85) {
    plinkos.push(new Plinko(j,375));
  }
  for (var j = 100; j <=width; j=j+85) {
  plinkos.push(new Plinko(j,475));
  }
  
  Engine.run(engine);
}





function draw() {
  background("Black");
  Engine.update(engine);

  drawSprites();

  for (var n = 0; n<divisions.length; n++){
    divisions[n].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(20, 1890), 20,20));
  }

  for (var h = 0; h<particles.length; h++){
    particles[h].display();
  }

  for (var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }

ground.display();

}