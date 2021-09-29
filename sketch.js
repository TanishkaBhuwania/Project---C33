  Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particle; 
var plinkos = [];
var turn; 

var score =0;



function setup() {
  createCanvas(400, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,805,700,20);

  division1 = new Division(85,650,10,300);
  division2 = new Division(165,650,10,300);
  division3 = new Division(245,650,10,300);
  division4 = new Division(325,650,10,300);
  division5 = new Division(405,650,10,300);

  fill("white");
  text("500",45,550);



    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,60));
    }

    for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,160));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,260));
    }

     for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,360));
    }


    

    
}
 


function draw() {

  Engine.update(engine);

  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     }

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
}

