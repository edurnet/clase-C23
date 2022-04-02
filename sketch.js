const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
var score = 0;
var balls= [];

// ejemplo de matriz
var arr=[1,2,3];
console.log(arr);

// ejemplo de matriz con diferentes tipos de datos 
var arr2=['sofia',2,true];
console.log(arr2);

// ejemplo de matriz con lista de matrices
var arr3=[[4,10],[12,8],[11,6]];
console.log(arr3[1]);

arr3.push([9,5])
console.log(arr3)

arr3.pop()
console.log(arr3)




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle=15;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
  cannonball=new CannonBall(cannon.x,cannon.y);
}

function draw() {

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();
 
  //crear ciclo repetitivo

for(i=0; i<balls.length; i++){
  showCannonBalls(balls[i],i)
}


  cannon.display();
 
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var cannonball =new CannonBall(cannon.x, cannon.y);
    balls.push(cannonball)
  }
}

function showCannonBalls(ball,i){
  if(ball){
    ball.display()
  }
}


