var estado = 0;

var INTRO = 1;
var JUEGO = 2;
var OUTRO = 3;


var colorFondo = 100;

var puntaje = 0;

var value = 0;

var myFont;

var Estre = [];

var numE = 100;

var Estre = [];

var Estre2;


var varx = 50;


var imagen;

var cancion;

var cancion2;




var contar = true;


function preload() {
  myFont = loadFont('assets/miso-regular.ttf');
  imagen = loadImage('assets/cohete.png');
  cancion = loadSound ('assets/puerta.mp3');
  cancion2 = loadSound ('assets/fondo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  estado = INTRO;

  Estre2 = new Cohete();
  cancion.play();
  cancion2.play();

  for (var i = 0; i < numE; i++) {

    Estre[i] = new Estrella1();
  }
  

}

function draw() {
  if (estado == INTRO) {
    background(0, 0, 0);
    fill(255);
    textAlign(CENTER);
    textSize(80);
    textFont(myFont);
    text("Anhelo II", width / 2, height / 2);
    noStroke();
    push();
    textSize(30);  
    text("Presiona las estrellas para matarlas el objetivo es acabar con todas!", width / 2, height / 2 + 40);
    pop();
    
  } else if (estado == JUEGO) {
    background(value);
    
   

    textAlign(LEFT);
    textSize(30);
    text("P " + puntaje, 10, 30);
    
    Estre2.dibujo();
    Estre2.moverse();
    cancion2.play();
    //cancion2.loop();

  
    
    for (var j = 0; j < numE; j++) {
      Estre[j].dibujarse();
      Estre[j].moverse();
  
      

    }

     
      
    if (puntaje > 30){
      estado = OUTRO;
      puntaje = 0;
      
    }
    
  } else {
    background(200);
    fill(255);
    textAlign(CENTER);
    textSize(60);
    text("¡¡¡¡¡GANASTE!!!!!", width / 2, height / 2);
    cancion.play();
  }
}

//esta funcion se activa cuando el dispositivo reconoce que se movio un toque en la pantalla
function touchMoved() {

  //recorre toda la lista de bolas
  for (var i = 0; i < numE; i++) {

    //revisa si se estaba tocando alguna bola y en tal caso la mata
    //se usa touches[0] porque se asume que solo hay un toque a la vez
    if (dist(touches[0].x, touches[0].y, Estre[i].x, Estre[i].y) < 20 && Estre[i].viva) {
      Estre[i].morirse();
      puntaje = puntaje+1;
    }
    
    
  }
  
  return false;
}



function touchStarted() {
  
  estado = JUEGO ; 
  // prevent default
  return false;
}
 


//COHETE
function Cohete() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tama = 10;
  this.existe = true;
  this.dirX = 1;
  this.dirY = 1;
  this.imagen = imagen;

  this.dibujo = function() {
    if (this.existe) {

      push();
      fill(255, 255, 255);
      stroke(255);
      strokeWeight(1);
      imageMode(CENTER);
      image(this.imagen,this.x,this.y,80,80);
      pop();

    }
  }

  this.muerte = function() {
    this.existe = false;
  }
  
  
  this.moverse = function() {


  this.x = mouseX
  this.y = mouseY
    
  }

  this.arrastrarse = function() {
    this.x = mouseX;
    this.y = mouseY;
  }

}



//Estrellas pequeñas
function Estrella1() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tam = 10;
  this.viva = true;
  this.col = fill(255, 255, 255);

  this.dibujarse = function() {
    if (this.viva) {

      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + 3.39, this.y + 1.39);
      vertex(this.x + 6.84, this.y);
      vertex(this.x + 6.84, this.y + 3.74);
      vertex(this.x + 9.17, this.y + 6.71);
      vertex(this.x + 5.64, this.y + 7.69);
      vertex(this.x + 3.46, this.y + 10.73);
      vertex(this.x + 1.41, this.y + 7.98);
      vertex(this.x - 2.26, this.y + 6.71);
      vertex(this.x - 1, this.y + 3.95);
      endShape(CLOSE);

    }
  }
  this.moverse = function() {
    this.x = this.x + random(-0.8, 0.8);
    this.y = this.y + random(-0.8, 0.8);
  }
  
  this.morirse = function() {
    this.viva = false;

  }

}

