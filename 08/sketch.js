var pezN1 = [];
var numeroc = 300;

var pezN2 = [];

var Estre = [];

var PezR = [];

var Muta = []


function setup() {
  createCanvas(800, 400);

    
  for (var i = 0; i < numeroc; i++) {
    pezN1[i] = new Pez1();
    pezN2[i] = new Pez2();
    Estre[i] = new Estrella(); 
    PezR[i] = new Pezrarito();
    Muta[i] = new MUT();
  }
}

function draw() {
  background(255, 255, 255);
  for (var j = 0; j < numeroc; j++) {
    pezN1[j].dibujarse();
    pezN1[j].moverse();
    pezN1[j].crecerse();
    pezN2[j].dibujo();
    Estre[j].dibujarse();
    PezR[j].dibujarse();
    Muta[j].dibujarse();
    
    var disCentro1;
    disCentro1 = dist(mouseX, mouseY, pezN2[j].x, pezN2[j].y);
    if (mouseIsPressed) {
      if (disCentro1 < 10) {
        pezN2[j].girar();
      }
    }
    var disCentro;
    disCentro = dist(mouseX, mouseY, pezN1[j].x, pezN1[j].y);
    var distanteC;
    distanteC = dist(pezN2[j].x, pezN2[j].y, pezN1[j].x, pezN1[j].y);
    if (disCentro < 10) {
      pezN1[j].morirse();
    }
    if (distanteC < 5) {
      pezN2[j].muerte();
    }
  }
}


//PEZ 1

function Pez1() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tam = 10;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva) {
      
      fill(255,78,0);
      strokeWeight(1);
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x+1.65, this.y-1.65);
      vertex(this.x+6.31, this.y-2.99);
      vertex(this.x+4.35, this.y-1.66);
      vertex(this.x+6.18, this.y-1.72);
      vertex(this.x+6.31, this.y-1.02);
      vertex(this.x+7.99, this.y-2.66);
      vertex(this.x+9.36, this.y);
      vertex(this.x+9.36, this.y);
      vertex(this.x+7.99, this.y+2.66);
      vertex(this.x+6.31, this.y+0.98);
      vertex(this.x+6.17, this.y+2);
      vertex(this.x+4.68, this.y+1.99);
      vertex(this.x+6.01, this.y+2.34);
      vertex(this.x+1.99, this.y+1.99);
      endShape(CLOSE);
      
      
    }
  }
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  this.crecerse = function() {
    this.tam = this.tam + random(-1, 1);
  }
  this.morirse = function() {
    this.viva = false;
  }
}


//PEZ 2

function Pez2() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tama = 10;
  this.existe = true;
  this.colR = random(0, 255);
  this.colG = random(0, 255);
  this.colB = random(0, 255);
  this.gir = false;

  this.dibujo = function() {
    if (this.existe) {
     
  fill(150,150,255);
  line(this.x,this.y,this.x+6.07,this.y)    
  triangle(this.x,this.y,this.x+3.33,this.y-2.57,this.x+3.61,this.y+2.09);
    
      
    }
  }
  this.girar = function() {
    this.gir = true;
  }

  this.muerte = function() {
    this.existe = false;
  }

}

//ESTRELLA MARINA
function Estrella() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tam = 10;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva) {
      
      fill(198,54,195, 120);
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x+3.39, this.y+1.39);
      vertex(this.x+6.84, this.y);
      vertex(this.x+6.84, this.y+3.74);
      vertex(this.x+9.17, this.y+6.71);
      vertex(this.x+5.64, this.y+7.69);
      vertex(this.x+3.46, this.y+10.73);
      vertex(this.x+1.41, this.y+7.98);
      vertex(this.x-2.26, this.y+6.71);
      vertex(this.x-1, this.y+3.95);
      endShape(CLOSE);
       
    }
  }
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  this.crecerse = function() {
    this.tam = this.tam + random(-1, 1);
  }
  this.morirse = function() {
    this.viva = false;
  }
}


// PEZ RARITO
function Pezrarito() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tam = 10;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva) {
   
   push();  
      
   stroke(71, 153, 104);
   fill(198,54,195,70);
   bezier(this.x, this.y, this.x-23.85, this.y-23.85, this.x-6.15, this.y-56.15, this.x+11.01, this.y+1.15);
   pop(); 
    }
  }
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  this.crecerse = function() {
    this.tam = this.tam + random(-1, 1);
  }
  this.morirse = function() {
    this.viva = false;
  }
}

// MUTACION PEZ RARO 
  function MUT() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.al = 12;
  this.an = 10;    
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva) {
   
   push();  
   fill(21,170,204);  
   line(this.x-9,this.y-0.18,this.x+9,this.y-0.32);
   line(this.x-9,this.y-9,this.x+9,this.y+9);   
   ellipse(this.x,this.y,this.al,this.an);
   
   
   
   pop(); 
    }
  }
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  this.crecerse = function() {
    this.tam = this.tam + random(-1, 1);
  }
  this.morirse = function() {
    this.viva = false;
  }
}

