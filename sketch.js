const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
var box;
var ball2;
var box2;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution:0.8,
        friction:0.3
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200,100,15,ball_options);
    World.add(world,ball);

    box = Bodies.rectangle(200,200,20,20,ball_options);
    World.add(world,box);
    
    ball2 = Bodies.circle(200,250,15,ball_options);
    World.add(world,ball2);

    box2 = Bodies.rectangle(200,50,20,20,ball_options);
    World.add(world,box2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,15,15);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,20,20);
    ellipse(ball2.position.x,ball2.position.y,15,15);
    rect(box2.position.x,box2.position.y,20,20);

}