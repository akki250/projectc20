var car1,car2,car3,car4;
var options = {
  'restitution':0.8,
  'friction':0.3,
  'density':3.0
}
var engine,world;
var wall1,wall2,wall3,wall4;
var tar1,tar2,tar3,tar4;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  
  weight=random(400,1500);


  tar1= createSprite(1500, 50, 50, 70,options);
  tar1.shapeColor=(80,80,80);
  car1 = createSprite(50, 50, 50, 20,options);  
  car1.density=weight;
  speed1=random(55,90);  
  car1.velocityX=speed1;
  wall1= createSprite(800,100,1600,10,options);
  
  tar2= createSprite(1500, 150, 50, 70,options);
   tar2.shapeColor=(80,80,80);
  car2 = createSprite(50, 150, 50, 20,options); 
  car2.density=weight;
  speed2=random(55,90);  
  car2.velocityX=speed2;
  wall2= createSprite(800,200,1600,10,options);
   
  tar3= createSprite(1500, 250, 50, 70,options);
  tar3.shapeColor=(80,80,80);
   car3 = createSprite(50, 250, 50, 20,options);
    car3.density=weight;
    speed3=random(55,90);
   car3.velocityX=speed3;
   wall3= createSprite(800,300,1600,10,options);
   
   tar4= createSprite(1500, 350, 50, 70,options);
   tar4.shapeColor=(80,80,80);
   car4 = createSprite(50, 350, 50, 20,options); 
   car4.density=weight;
   speed4=random(55,90);  
   car4.velocityX=speed4;
   wall4= createSprite(800,390,1600,10,options);
   

}

function draw() {
  background("black");

  


  if (tar1.x-car1.x < (car1.width+tar1.width)/2){
    car1.velocityX=0;
    var deformation1=0.5*weight*speed1*speed1/22509;
    if (deformation1>180){
      car1.shapeColor=color(255,0,0);
    }
    if (deformation1<180 && deformation1>100){
      car1.shapeColor=color(230,230,0);
    }
    if (deformation1<100){
      car1.shapeColor=color(0,255,0);
    }
  }

  


   if (tar2.x-car2.x < (car2.width+tar2.width)/2){
    car2.velocityX=0;
    var deformation2=0.5*weight*speed2*speed2/22509;
    if (deformation2>180){
      car2.shapeColor=color(255,0,0);
    }
    if (deformation2<180 && deformation2>100){
      car2.shapeColor=color(230,230,0);
    }
    if (deformation2<100){
      car2.shapeColor=color(0,255,0);
    }
  }

  


  if (tar3.x-car3.x < (car3.width+tar3.width)/2){
    car3.velocityX=0;
    var deformation3=0.5*weight*speed3*speed3/22509;
    if (deformation3>180){
      car3.shapeColor=color(255,0,0);
    }
    if (deformation3<180 && deformation3>100){
      car3.shapeColor=color(230,230,0);
    }
    if (deformation3<100){
      car3.shapeColor=color(0,255,0);
    }
  }

  


  if (tar4.x-car4.x < (car4.width+tar4.width)/2){
    car4.velocityX=0;
    var deformation4=0.5*weight*speed4*speed4/22509;
    if (deformation4>180){
      car4.shapeColor=color(255,0,0);
    }
    if (deformation4<180 && deformation4>100){
      car4.shapeColor=color(230,230,0);
    }
    if (deformation4<100){
      car4.shapeColor=color(0,255,0);
    }
  }
    
  drawSprites();
}