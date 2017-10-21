var miCancion;

var xa = 311;
var ya = 400;
var xb = 311;
var yb = 299;  

var lx = 0;
var ly = 62;
var lx2 = 0;
var ly2 = 62;
var w=0.5;


var lx3 = 800;
var ly3 = 334;
var lx23 = 800;
var ly23 =  334;

var m = 1;
var lym=188;

var colox = 255

function preload(){

  miCancion = loadSound ('assets/069 - akira ifukube - godzilla - main title (1954).mp3');
}


function setup() {
  

  createCanvas(800, 400);
  background(0, 0, 0);
  miCancion.play();
  comienzo = millis();
  print(comienzo); 

}

function draw() {
  background(0, 0, 0);
  millis1 = millis();
  
  
  //linea inferiores organizadas de izq a dere// 
  strokeWeight(5);
  stroke(255,255,255);
  //1
  line(xa,ya,xa,yb);
  //2
  line(xa+13,ya,xa+13,yb-12);
  //3
  line(xa+13*2,ya,xa+13*2,yb-12*2);
  //4
  line(xa+13*3,ya,xa+13*3,yb-12*3);
  //5
  line(xa+13*4,ya,xa+13*4,yb-12*2);
  //6
  line(xa+13*5,ya,xa+13*5,yb-12);
  //7
  line(xa+13*6,ya,xa+13*6,yb-12*2);
  //8
  line(xa+13*7,ya,xa+13*7,yb-12*3);
  //9
  line(xa+13*8,ya,xa+13*8,yb-12*2);
  //10
  line(xa+13*9,ya,xa+13*9,yb-12);
  //11
  line(xa+13*10,ya,xa+13*10,yb-12*2); 
  //12
  line(xa+13*11,ya,xa+13*11,yb-12*3);
  //13
  line(xa+13*12,ya,xa+13*12,yb-12*2);
  //14
  line(xa+13*13,ya,xa+13*13,yb-12);
  //15
  line(xa+13*14,ya,xa+13*14,yb);

  

//suben las lineas blancas
   if (millis1+comienzo > 0) {
   yb = yb-0.75 
       }
  
        
// lineas rojas
strokeWeight(3);
stroke(255,0,0);
  
line(lx,ly,lx2,ly2);
line(lx,ly+16,lx2,ly2+16);  
line(lx,ly+16*2,lx2,ly2+16*2);  
  // se mueven las lineas rojas
   lx2 = lx2+w;

  //lineas amarilla
strokeWeight(3);
stroke(255,245,0);  
line(lx3,ly3,lx23,ly23);
line(lx3,ly3+16,lx23,ly23+16);  
line(lx3,ly3+16*2,lx23,ly23+16*2);  
  // se mueven las lineas amarillas
   lx23 = lx23-w;  
  
  // tiembla 1
  if (millis1+comienzo > 2000  && millis1+comienzo < 30000) {
    if(millis1+comienzo>2000 && millis1+comienzo<3000)

    {
       w=-w;
      background(255, 242, 0, 100);
    }
    
  }
//linea que se mueve
    if(millis1+comienzo>4000 && millis1+comienzo<9000)

    {
     strokeWeight(3);
     stroke(colox,colox-50,colox-150);
     line(lx,lym+m,800,lym+m);
      lym=lym+m*3;    

      if ( lym > 350){
        m = -m;
      }
      
      else if(lym < 50)
      {

         m = -m;
      }
    }
    
    
 //tiembla 2
    if(millis1+comienzo>7000 && millis1+comienzo<8000)

    {

       w=-w;

      background(255, 242, 0, 100);
    }
    
    

    //tiembla 3 en blanco
    if(millis1+comienzo>17000 && millis1+comienzo<18000)

    {
       w=-w;
      background(255, 255, 255, 100);
       
       }
    
    //tiembla 5
    if(millis1+comienzo>22000 && millis1+comienzo<23000)

    {
       w=-w;
      background(255, 242, 0, 100);
      
    }
    
    //tiembla 6
    if(millis1+comienzo>28000 && millis1+comienzo<29000)

    {
       w=-w;
      background(255, 242, 0, 100);
    }
    
    //tiembla 7
    if(millis1+comienzo>33000 && millis1+comienzo<34000)

    {
       w=-w;
      background(255, 242, 0, 100);
    }
    
    //lineas azules  
    if(millis1+comienzo>17000 && millis1+comienzo<18000){
      
      for ( var blu = 1; blu < 11; blu = blu + 1){
    
      strokeWeight(6);
       stroke(0,0,255);
       line(40*blu+197, 400, 40*blu+197, 0);
       }
    }
      //linea en movimiento
          if(millis1+comienzo>24000 && millis1+comienzo<27000)

    {
     strokeWeight(3);
     stroke(colox,colox-50,colox-150);
     line(lx,lym+m,800,lym+m);
      lym=lym+m*3;    

      if ( lym > 350){
        m = -m;
      }
      
      else if(lym < 50)
      {

         m = -m;
      }

    }
}