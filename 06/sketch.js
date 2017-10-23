var miImagen;

var x =0;
var y=0;

function preload(){
  miImagen = loadImage('assets/caballos.jpg');
}

function setup() { 
  createCanvas(850, 599);
  
  
} 

function draw() { 
   background(220);
  
  var pix = miImagen.get(x,y);
  print(pix);

  var miRojo = pix[0];
  var miVerde = pix[1];
  var miAzul = pix[2];
  var mitrans = pix[3];
  
  
   //if( miRojo >= 0 && miRojo < 100 ){

  pix[0] = 255;
  //pix[2] = 20;
 
   //}
  
  miImagen.set(x,y, pix);
  miImagen.updatePixels();
  
  tint(105, 100, 100);
  image(miImagen, 0,0);
  filter(INVERT);
  


  x = x + 1;
  
  if( x > miImagen.width){
    x = 0;
    y = y + 5;
    
    }

}