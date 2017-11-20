var pezN1 = [];

var numeroc = 100;

var pezN2 = [];

var Estre = [];

var PezR = [];

var numR = 50;

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


  }

  for (var j = 0; j < numeroc; j++) {

    pezN2[j].dibujo();

  }


  for (var j = 0; j < numeroc; j++) {
    Estre[j].dibujarse();
    Estre[j].moverse();


    for (var b = 0; b < numR; b = b + 1) {
      
      //enferma a las estrellas//
      var distcentro = dist(PezR[b].x, PezR[b].y, Estre[j].x, Estre[j].y);

      if (distcentro < 3) {
        Estre[j].color2();
      }
    }

  }

  for (var j = 0; j < numR; j++) {

    PezR[j].dibujarse();
    PezR[j].moverse();
    
 //mata a los peces rojos//
    
  }


  for (var j = 0; j < numeroc; j++) {
    Muta[j].dibujarse();
    Muta[j].moverse();
    
     
    for (var c = 0; c < numR; c = c + 1) {
     var dcentro = dist(PezR[c].x, PezR[c].y, Muta[j].x, Muta[j].y);

      if (dcentro < 4) {
        pezN2[pezN2.length] = new Pez2();
        Muta[j].morirse();
        
      }
    }
    
    for (var a = 0; a < numR; a = a + 1) {
      var distCentro = dist(PezR[a].x, PezR[a].y, pezN1[j].x, pezN1[j].y);

      if (distCentro < 3) {
        pezN1[j].morirse();
      }
    }
  }


  //AQUI ACABA EL DRAW//
}



//PEZ 1

function Pez1() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tam = 10;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva) {

      fill(255, 78, 0);
      strokeWeight(1);
      beginShape();
      vertex(this.x, this.y);
      vertex(this.x + 1.65, this.y - 1.65);
      vertex(this.x + 6.31, this.y - 2.99);
      vertex(this.x + 4.35, this.y - 1.66);
      vertex(this.x + 6.18, this.y - 1.72);
      vertex(this.x + 6.31, this.y - 1.02);
      vertex(this.x + 7.99, this.y - 2.66);
      vertex(this.x + 9.36, this.y);
      vertex(this.x + 9.36, this.y);
      vertex(this.x + 7.99, this.y + 2.66);
      vertex(this.x + 6.31, this.y + 0.98);
      vertex(this.x + 6.17, this.y + 2);
      vertex(this.x + 4.68, this.y + 1.99);
      vertex(this.x + 6.01, this.y + 2.34);
      vertex(this.x + 1.99, this.y + 1.99);
      endShape(CLOSE);


    }
  }
  this.moverse = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
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


  this.dibujo = function() {
    if (this.existe) {

      fill(150, 150, 255);
      line(this.x, this.y, this.x + 6.07, this.y)
      triangle(this.x, this.y, this.x + 3.33, this.y - 2.57, this.x + 3.61, this.y + 2.09);


    }
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
  this.col = fill(198, 54, 195, 120);

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
    this.x = this.x + random(-0.5, 0.5);
    this.y = this.y + random(-0.5, 0.5);
  }

  this.morirse = function() {
    this.viva = false;
  }

  this.color1 = function() {
    this.col = fill(198, 54, 195, 120);
  }
  this.color2 = function() {
    this.col = fill(255, 0, 0, 120);
  }
}


// PEZ RARITO
function Pezrarito() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tam = 10;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva) {

      push();

      stroke(71, 153, 104);
      fill(198, 54, 195, 120);
      bezier(this.x, this.y, this.x - 23.85, this.y - 23.85, this.x - 6.15, this.y - 56.15, this.x + 11.01, this.y + 1.15);
      pop();
    }
  }
  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX * 4);
    }
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY * 4);
    }

    this.x = this.x + (this.dirX * random(0, 4));
    this.y = this.y + (this.dirY * random(0, 4));
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
  this.dirX = 1;
  this.dirY = 1;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva) {

      push();
      fill(21, 170, 204);
      line(this.x - 9, this.y - 0.18, this.x + 9, this.y - 0.32);
      line(this.x - 9, this.y - 9, this.x + 9, this.y + 9);
      ellipse(this.x, this.y, this.al, this.an);



      pop();
    }
  }


  this.moverse = function() {
    this.x = this.x + random(-0.5, 0.5);
    this.y = this.y + random(-0.5, 0.5);
  }
  

  this.morirse = function() {
    this.viva = false;
  }
}