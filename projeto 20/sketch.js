const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var square;
var dwayneJohnson;


function setup() {
  
  createCanvas(800,800);
  engine = Engine.create();//criando o motor de física
  world = engine.world;//adicionando um mundo ao motor!!!!!!

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  var square_options = {
    restitution : 0.7,
    frictionAir : 0.1,
    friction: 0.01
  }

  var dwayneJhonson_options = {
    restitution : 1
  }

  dwayneJohnson = Bodies.circle(600,20,50, dwayneJhonson_options);
  World.add(world,dwayneJohnson);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(400,500,1000,20,ground_options);
  World.add(world,ground);

  square = Bodies.rectangle(350,50,100,100,square_options);
  World.add(world,square);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background ("purple");
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,1000,20);
 ellipse(dwayneJohnson.position.x,dwayneJohnson.position.y,50);
 rect(square.position.x,square.position.y,100,100);
}

