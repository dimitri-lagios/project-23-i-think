class Dropzone {
    constructor(x, y, width, height, angle) {
        var options = {
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        translate(this.body.position.x, this.body.position.y);
        fill(255);
        rect(0, 0, this.width, this.height);
      }
}


/*var bgImage function preload(){ bgImage = loadImage('sprites/bg.png') } 
function setup(){ 
var canvas = createCanvas(1200,400); 
engine = Engine.create(); 
world = engine.world; ground = new 
Ground(600,height,1200,20) box1 = new 
Box(700,320,70,70); 
box2 = new Box(920,320,70,70); pig1 = new Pig(810, 350); log1 = new Log(810,260,300, PI/2); box3 = new Box(700,240,70,70); box4 = new Box(920,240,70,70); pig3 = new Pig(810, 220); log3 =  new Log(810,180,300, PI/2); box5 = new Box(810,160,70,70); log4 = new Log(760,120,150, PI/7); log5 = new Log(870,120,150, -PI/7); bird = new Bird(100,100); } function draw(){ background(bgImage); Engine.update(engine); console.log(box2.body.position.x); console.log(box2.body.position.y); console.log(box2.body.angle); box1.display(); box2.display(); ground.display(); 
pig1.display();
*/