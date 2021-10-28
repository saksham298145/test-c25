const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var arrow;
var baseimage;
var playerimage;
var PlayerArrows=[]
function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(
    340,
    playerBase.position.y - 112,
    120,
    120
  );

  arrow = new PlayerArrow(
    playerArcher.body.position.x,
    playerArcher.body.position.y,
    100,
    10
  );
}

function draw() {
  background(backgroundImg);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  Engine.update(engine);

  playerArcher.display();
  arrow.display();
  
  if (keyCode === 32) {
    arrow.shoot(playerArcher.body.angle);
  }

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
function keyPressed(){
  if (keyCode === 32) {
    var arrows = new PlayerArrow(playerArcher.x, playerArcher.y);
    Matter.Body.setAngle(arrows.body, playerArcher.angle);
  PlayerArrows.push(arrows)
}
function showArrows(){
  if(PlayerArrows.length>0){
    if (PlayerArrows[PlayerArrows.length-1].body.position.x<width-300||PlayerArrows[PlayerArrows.length-1]===undefined){

var arrow=new arrows(width,height-100,170,170)
PlayerArrows.push(arrows)
    }   
for(var i=0;i<PlayerArrows.length;i++){
if (PlayerArrows[i]){
  
  PlayerArrows[i].display()
}
}
  }else{
   var arrow=new arrows(width,height-60,170,170,-80)
   PlayerArrows.push(arrows)
  
}
}
}
function keyReleased(){
  if (keyCode === 32) {
   
      PlayerArrows[PlayerArrows.length-1].shoot()
    }
}
