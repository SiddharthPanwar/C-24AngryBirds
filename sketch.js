const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2 , ground1 , box3 , box4 , box5 , pig1 , log1 , pig2 , log2 , log3 , log4 , bird1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
     
    ground1 = new ground(600,580,1200,20);
    box1 = new Box (690,550,60,60);
    box2 = new Box (810,550,60,60);
    pig1 = new pig (750,550);
    log1 = new log (750,520,180,PI/2);

    box3 = new Box (690,480,60,60);
    box4 = new Box (810,480,60,60);
    pig2 = new pig (750,480);
    log2 = new log (750,440,180,PI/2);

    box5 = new Box (750,400,60,60);
    log3 = new log (725,400,120,PI/4);
    log4 = new log (775,400,120,3*PI/4); 
    bird1 = new bird(200,700);
}

function draw(){
    background(0,0,128);
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    pig2.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
    
}