//Botones para colores//
var boton1x = 10;
var boton1y = 10;
var boton1tam = 20

var boton2x = 35;
var boton2y = 10;
var boton2tam = 20;

var boton3x = 60;
var boton3y = 10;
var boton3tam = 20;

var boton4x = 85;
var boton4y = 10;
var boton4tam = 20;

var boton5x = 110;
var boton5y = 10;
var boton5tam = 20;

var boton6x = 135;
var boton6y = 10;
var boton6tam = 20;

var boton7x = 160;
var boton7y = 10;
var boton7tam = 20;

var boton8x = 185;
var boton8y = 10;
var boton8tam = 20;

var boton9x = 210;
var boton9y = 10;
var boton9tam = 20;

var boton10x = 235;
var boton10y = 10;
var boton10tam = 20;

//borrador//
var botonbx = 260;
var botonby = 10;
var botonbtam = 40;

//Botones herramienras

var botonh1x = 10;
var botonh1y = 35;
var botonh1tam = 20

var botonh2x = 35;
var botonh2y = 35;
var botonh2tam = 20;

var botonh3x = 60;
var botonh3y = 35;
var botonh3tam = 20;

var botonh4x = 85;
var botonh4y = 35;
var botonh4tam = 20;

var botonh5x = 110;
var botonh5y = 35;
var botonh5tam = 20;

var botonh6x = 135;
var botonh6y = 35;
var botonh6tam = 20;

var botonh7x = 160;
var botonh7y = 35;
var botonh7tam = 20;

var botonh8x = 185;
var botonh8y = 35;
var botonh8tam = 20;

var botonh9x = 210;
var botonh9y = 35;
var botonh9tam = 20;

var botonh10x = 235;
var botonh10y = 35;
var botonh10tam = 20;



// color//

var colors = 0;

// herramienta //
var herramienta = 0;


//algunas posiciones//
var a = 10;
var b = 20;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
  //Recbanner//
  noStroke();
  fill(227, 227, 227, 90);
  rect(0, 0, 750, 60);

  //1
  fill(255, 251, 133);
  rect(boton1x, boton1y, boton1tam, boton1tam);

  //2
  fill(255, 212, 100);
  rect(boton2x, boton2y, boton2tam, boton2tam);

  //3
  fill(250, 91, 117);
  rect(boton3x, boton3y, boton3tam, boton3tam);

  //4
  fill(90, 54, 98);
  rect(boton4x, boton4y, boton4tam, boton4tam);

  //5
  fill(67, 44, 81);
  rect(boton5x, boton5y, boton5tam, boton5tam);

  //6
  fill(1, 56, 89);
  rect(boton6x, boton6y, boton6tam, boton6tam);

  //7
  fill(24, 94, 101);
  rect(boton7x, boton7y, boton7tam, boton7tam);

  //8
  fill(249, 204, 127);
  rect(boton8x, boton8y, boton8tam, boton8tam);

  //9
  fill(241, 92, 37);
  rect(boton9x, boton9y, boton9tam, boton9tam);

  //10
  fill(158, 22, 22);
  rect(boton10x, boton10y, boton10tam, boton10tam);

  //botones herramientas
  //1
  fill(0, 0, 0);
  rect(botonh1x, botonh1y, botonh1tam, botonh1tam);
  fill(255, 255, 255);
  arc(27, 38, 30, 30, HALF_PI, PI);


  //2
  fill(0, 0, 0);
  rect(botonh2x, botonh2y, botonh2tam, botonh2tam);
  fill(255, 255, 255);
  triangle(36, 51, 45, 37, 53, 51);

  //3
  fill(0, 0, 0);
  rect(botonh3x, botonh3y, botonh3tam, botonh3tam);
  fill(255, 255, 255);
  quad(64, 52, 65, 40, 76, 37, 75, 49);

  //4
  fill(0, 0, 0);
  rect(botonh4x, botonh4y, botonh4tam, botonh4tam);
  fill(0, 0, 255);
  strokeWeight(0, 2);
  beginShape();
  vertex(85, 42);
  vertex(89, 41);
  vertex(101, 47);
  vertex(104, 45);
  vertex(95, 41);
  vertex(85, 46);
  endShape();


  //5
  fill(0, 0, 0);
  rect(botonh5x, botonh5y, botonh5tam, botonh5tam);
  fill(255, 255, 255);
  strokeWeight(0, 2);
  beginShape();
  vertex(116, 39);
  vertex(115, 42);
  vertex(114, 45);
  vertex(118, 49);
  vertex(121, 49);
  vertex(124, 45);
  vertex(123, 42);
  vertex(121, 39);
  vertex(120, 42);
  vertex(118, 42);
  endShape();


  //6
  fill(0, 0, 0)
  rect(botonh6x, botonh6y, botonh6tam, botonh6tam);
  fill(255, 255, 255);
  strokeWeight(0, 2);
  beginShape();
  vertex(136, 43);
  vertex(139, 46);
  vertex(141, 46);
  vertex(143, 50);
  vertex(145, 48);
  vertex(146, 50);
  vertex(148, 46);
  vertex(151, 46);
  vertex(154, 43);
  vertex(148, 43);
  vertex(146, 45);
  vertex(145, 43);
  vertex(143, 45);
  vertex(142, 43);
  endShape();


  //7
  fill(0, 0, 0)
  rect(botonh7x, botonh7y, botonh7tam, botonh7tam);
  strokeWeight(1);
  stroke(255, 255, 255);
  line(161, 36, 177, 51);
  noStroke();

  //8
  fill(0, 0, 0)
  rect(botonh8x, botonh8y, botonh8tam, botonh8tam);
  strokeWeight(1);
  stroke(255, 255, 255);
  line(186, 44, 203, 44);
  noStroke();


  //9
  fill(0, 0, 0)
  rect(botonh9x, botonh9y, botonh9tam, botonh9tam);
  strokeWeight(1);
  stroke(255, 255, 255);
  line(227, 38, 212, 52);
  noStroke();


  //10
  fill(0, 0, 0)
  rect(botonh10x, botonh10y, botonh10tam, botonh10tam);
  strokeWeight(1);
  stroke(250, 91, 117);
  line(235, 35, 253, 44);
  line(235, 35, 255, 42);
  line(235, 35, 255, 40);

  noStroke();

  //botonb
  fill(255, 255, 255)
  rect(botonbx, botonby, botonbtam, botonbtam);


  if (mouseIsPressed) {

    //colores//
    if (colors == 0) {
      fill(255, 251, 133);
    }

    if (colors == 1) {
      fill(255, 212, 100);
    }

    if (colors == 2) {
      fill(250, 91, 117);
    }

    if (colors == 3) {
      fill(90, 54, 98);
    }

    if (colors == 4) {
      fill(67, 44, 81);
    }

    if (colors == 5) {
      fill(1, 56, 89);
    }

    if (colors == 6) {
      fill(24, 94, 101);
    }


    if (colors == 7) {
      fill(249, 204, 127);
    }


    if (colors == 8) {
      fill(241, 92, 37);
    }


    if (colors == 9) {
      fill(158, 22, 22);
    }


    //Herramientas


    if (herramienta == 1) {
      arc(mouseX, mouseY, 30, 30, HALF_PI, PI);
    }

    if (herramienta == 2) {
      triangle(mouseX, mouseY, mouseX + 18, mouseY - 55,
        mouseX + 46, mouseY);

    }

    if (herramienta == 3) {
      quad(mouseX, mouseY, mouseX + 48, mouseY - 11, mouseX + 31,
        mouseY + 32, mouseX - 8, mouseY + 46);

    }

    if (herramienta == 4) {

      fill(0, 0, 255);
      strokeWeight(0, 2);
      beginShape();
      vertex(mouseX, mouseY); //85 , 42
      vertex(mouseX + 4, mouseY + 1);
      vertex(mouseX + 16, mouseY + 5);
      vertex(mouseX + 19, mouseY + 3);
      vertex(mouseX + 10, mouseY + 1);
      vertex(mouseX, mouseY + 4);
      endShape();

    }

    if (herramienta == 5) {

      //fill(255,0,0);
      strokeWeight(0, 2);
      beginShape();
      vertex(mouseX, mouseY - 10);
      vertex(mouseX - 1, mouseY - 7);
      vertex(mouseX - 2, mouseY - 4);
      vertex(mouseX + 2, mouseY);
      vertex(mouseX + 5, mouseY);
      vertex(mouseX + 8, mouseY - 4);
      vertex(mouseX + 7, mouseY - 7);
      vertex(mouseX + 5, mouseY - 10);
      vertex(mouseX + 4, mouseY - 7);
      vertex(mouseX + 2, mouseY - 7);
      endShape();
    }

    if (herramienta == 6) {

      //fill(255,255,255);
      strokeWeight(0, 2);
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX + 7, mouseY + 7);
      vertex(mouseX + 13, mouseY + 7);
      vertex(mouseX + 18, mouseY + 16);
      vertex(mouseX + 22, mouseY + 11);
      vertex(mouseX + 25, mouseY + 16);
      vertex(mouseX + 30, mouseY + 8);
      vertex(mouseX + 37, mouseY + 8);
      vertex(mouseX + 43, mouseY);
      vertex(mouseX + 28, mouseY);
      vertex(mouseX + 25, mouseY + 5);
      vertex(mouseX + 22, mouseY - 1);
      vertex(mouseX + 18, mouseY + 4);
      vertex(mouseX + 14, mouseY);
      endShape();

    }

    if (herramienta == 7) {
      strokeWeight(1);
      stroke(255, 0, 0);
      line(mouseX, mouseY, mouseX + 16, mouseY + 15);

    }

    if (herramienta == 8) {
      strokeWeight(1);
      stroke(255, 0, 0);
      line(mouseX, mouseY, mouseX + 17, mouseY);
    }

    if (herramienta == 9) {
      strokeWeight(1);
      stroke(255, 0, 0);
      line(mouseX + 15, mouseY - 14, mouseX, mouseY);

    }

    if (herramienta == 10) {

      strokeWeight(1);
      stroke(250, 91, 117);
      line(mouseX - 20, mouseY - 20, 800, 200);
    }

    //botonb
    if (herramienta == 11) {
      fill(255, 255, 255)
      rect(0, 0, windowWidth, windowHeight);
    }

  }


  //colores
  noStroke();

  if (mouseX > boton1x && mouseX < boton1x + boton1tam &&
    mouseY > boton1y && mouseY < boton1y + boton1tam) {
    colors = 0;
  }

  if (mouseX > boton2x && mouseX < boton2x + boton2tam &&
    mouseY > boton2y && mouseY < boton2y + boton2tam) {
    colors = 1;
  }
  if (mouseX > boton3x && mouseX < boton3x + boton3tam &&
    mouseY > boton3y && mouseY < boton3y + boton3tam) {
    colors = 2;
  }

  if (mouseX > boton4x && mouseX < boton4x + boton4tam &&
    mouseY > boton4y && mouseY < boton4y + boton4tam) {
    colors = 3;
  }

  if (mouseX > boton5x && mouseX < boton5x + boton5tam &&
    mouseY > boton5y && mouseY < boton5y + boton5tam) {
    colors = 4;
  }

  if (mouseX > boton6x && mouseX < boton6x + boton6tam &&
    mouseY > boton6y && mouseY < boton6y + boton6tam) {
    colors = 5;
  }

  if (mouseX > boton7x && mouseX < boton7x + boton7tam &&
    mouseY > boton7y && mouseY < boton7y + boton7tam) {
    colors = 6;
  }

  if (mouseX > boton8x && mouseX < boton8x + boton8tam &&
    mouseY > boton8y && mouseY < boton8y + boton8tam) {
    colors = 7;
  }

  if (mouseX > boton9x && mouseX < boton9x + boton9tam &&
    mouseY > boton9y && mouseY < boton9y + boton9tam) {
    colors = 8;
  }

  if (mouseX > boton10x && mouseX < boton10x + boton10tam &&
    mouseY > boton10y && mouseY < boton10y + boton10tam) {
    colors = 9;
  }



  //herramientas//

  if (mouseX > botonh1x && mouseX < botonh1x + botonh1tam &&
    mouseY > botonh1y && mouseY < botonh1y + botonh1tam) {

    herramienta = 1;
  }

  if (mouseX > botonh2x && mouseX < botonh2x + botonh2tam &&
    mouseY > botonh2y && mouseY < botonh2y + botonh2tam) {

    herramienta = 2;
  }

  if (mouseX > botonh3x && mouseX < botonh3x + botonh3tam &&
    mouseY > botonh3y && mouseY < botonh3y + botonh3tam) {

    herramienta = 3;
  }

  if (mouseX > botonh4x && mouseX < botonh4x + botonh4tam &&
    mouseY > botonh4y && mouseY < botonh4y + botonh4tam) {

    herramienta = 4;
  }

  if (mouseX > botonh5x && mouseX < botonh5x + botonh5tam &&
    mouseY > botonh5y && mouseY < botonh5y + botonh5tam) {

    herramienta = 5;
  }

  if (mouseX > botonh6x && mouseX < botonh6x + botonh6tam &&
    mouseY > botonh6y && mouseY < botonh6y + botonh6tam) {

    herramienta = 6;
  }

  if (mouseX > botonh7x && mouseX < botonh7x + botonh7tam &&
    mouseY > botonh7y && mouseY < botonh7y + botonh7tam) {

    herramienta = 7;

  }

  if (mouseX > botonh8x && mouseX < botonh8x + botonh8tam &&
    mouseY > botonh8y && mouseY < botonh8y + botonh8tam) {

    herramienta = 8;
  }

  if (mouseX > botonh9x && mouseX < botonh9x + botonh9tam &&
    mouseY > botonh9y && mouseY < botonh9y + botonh9tam) {

    herramienta = 9;
  }

  if (mouseX > botonh10x && mouseX < botonh10x + botonh10tam &&
    mouseY > botonh10y && mouseY < botonh10y + botonh10tam) {

    herramienta = 10;
  }

  if (mouseX > botonbx && mouseX < botonbx + botonbtam &&
    mouseY > botonby && mouseY < botonby + botonbtam) {

    herramienta = 11;
  }


}