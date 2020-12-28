
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var engine,world;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
for(var k=0; k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}
for(var j=40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75))
}
for(var j=15; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175))
}
for(var j=50; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,275))
}
}

function draw() {
  background(255,255,255);  
  drawSprites();
Engine.update(engine);
}
