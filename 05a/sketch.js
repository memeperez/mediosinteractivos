angulo =0;



function setup() { 
  createCanvas(900, 400, WEBGL);
  angleMode(DEGREES);
} 

function draw() { 
  background(220);
   millis1 = millis();
  
 
  if (millis1 > 1000  && millis1 < 3000) {
  
  push();
  translate(-50, -50);
  rotateX(angulo);
  //directionalLight(255,180,230,3,4,4);
  cylinder(25, 100); 
  pop();
  

  push();
  translate(50, -50);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
  
  push();
  translate(150, -50);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
  

  
  angulo = angulo+0.1;
  }
  
  
  if (millis1 > 4000  && millis1 < 8000) {
    
    //giran esferas//
     background(0);
     push();
     translate(-50, -50);
     rotateX(angulo);
     directionalLight(255,255,255,3,3,3);
     sphere(50);
     pop();
    
     push();
     translate(-10, -100);
     rotateX(angulo);
     directionalLight(255,255,255,3,3,3);
     sphere(20);
     pop();
    
     push();
     translate(-110, -10);
     rotateX(angulo);
     directionalLight(255,255,255,3,3,3);
     sphere(20);
     pop();
    
      angulo = angulo+0.1;      
    
  }
    
  if (millis1 > 9000  && millis1 < 14000) {
    
    background(255, 249, 86);
     //primera linea de cilindros//
    push();
  translate(-50, -50);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
  
  push();
  translate(50, -50);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
  
  push();
  translate(150, -50);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
    
    //segunda linea
  
     push();
  translate(-50, -150);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
  
  push();
  translate(50, -150);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
  
  push();
  translate(150, -150);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
    
    //tercera lineas
    
      push();
  translate(-50, 100);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
  
  push();
  translate(50, 100);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
  
  push();
  translate(150, 100);
  rotateX(angulo);
  cylinder(25, 100); 
  pop();
     

  angulo = angulo+0.2;
    
    
  }
  
   if (millis1 > 14000  && millis1 < 16000) {
     
   background(202,78,105); 
  push();

  translate(60, -50);
  rotateZ(angulo);
  //directionalLight(255,255,255,3,3,3);   
  cone(25, 100);
  pop();
     
     angulo = angulo+0.1;
   }

}