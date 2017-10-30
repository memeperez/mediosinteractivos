var name = "flipbook"; 
var x =[];
var y = []; 
var m = 0.7;

var bg;
var bg2;
var lx = 110;
var lym= 130;

var lx2 = 122;
var lym2= 150;


function setup() {
 bg = loadImage("data/fondos-flipbook1.jpg");
 bg2 = loadImage("data/fondos-flipbook2.jpg");
 
createCanvas (241, 198);
frameRate(4);

  
comienzo = millis();
print(comienzo); 
      
  
}

function draw() {
 
  millis1 = millis();
  

 if(millis1+comienzo>0 && millis1+comienzo<10000){
     background(bg);
   
     strokeWeight(2);
     stroke(0,0,0);
     line(lx,lym+m,lx,lym+1+m);
     line(lx+5,lym+m,lx+5,lym+1+m);
      lym=lym+m*3;    

      if ( lym > 350){
        m = -m;
      }

   }
    
     if(millis1+comienzo>10100 && millis1+comienzo<19000){
       
    background(bg2);
    strokeWeight(2);
     stroke(0,0,0);
     line(lx2,lym2+m-15,lx2,lym2-15+1+m);
     line(lx2+5,lym2+m-15,lx2+5,lym2+1+m-15);
      lym2=lym2+m*3;    

      if ( lym2 > 350){
        m = -m;
      }
     
 }  
  if (frameCount < 70) {
  saveCanvas(name+frameCount, 'jpg');
    
} 

}