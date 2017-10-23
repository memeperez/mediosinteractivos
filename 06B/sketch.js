var miImagen;
var miFiltro;

function preload(){
  miImagen = loadImage('assets/caballos.jpg');
miFiltro =loadImage('assets/filtro.png')
}

function setup() { 
  createCanvas(850, 599);
  
  miImagen.mask(miFiltro);
} 

function draw() { 
 background(255);
 image(miImagen, 0,0);
}