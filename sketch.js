const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint

var engine,world
var ground
var box1,box2,box3,box4,box5
var pig1,pig2
var log1,log2,log3,log4
var bird,bg
var slingshot
//var constraintLog
function preload(){
bg=loadImage("sprites/bg.png")
}

function setup(){
createCanvas(1200,400)
engine=Engine.create();
world=engine.world;

platform=new Ground(150,305,300,170);
ground=new Ground(600,height,1200,20);
box1=new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,250,70,70);
box4=new Box(920,240,70,70);
box5=new Box(810,160,70,70);

pig1=new Pig(810,350);
pig2=new Pig(810,220);

log1=new Log(810,260,300,PI/2)
log2=new Log(810,180,300,PI/2)
log3=new Log(760,120,150,PI/7)
log4=new Log(870,120,150,-PI/7)
//constraintLog=new Log(200,200,100,PI/2)

bird=new Bird(200,200)

slingshot=new Slingshot(bird.body,{x:200,y:50})

}
function draw(){      
background(bg)
Engine.update(engine);
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
pig1.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display();
bird.display();
platform.display();
//constraintLog.display();
slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.release();
}
function keyPressed(){
if(keyCode===32){
slingshot.attach(bird.body);
}
}


