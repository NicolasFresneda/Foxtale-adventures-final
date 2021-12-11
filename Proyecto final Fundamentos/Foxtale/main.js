// Variables mapa
let Terrain = [];
let Level1 = [];
let Level2 = [];
let Level3 = [];
let Level4 = [];
let Terrainlide;
let Level1lide;
let Level2lide;
let Level3lide;
let Level4lide;

let heart;
let Gameover;
let Gameoveropacity;
let Gameover2;
let fondo;
let titulo;
let Protagonista;
let boton = [];
let movimiento = 0;
let dirrection;
let ataque;
let arma;
let arco;
let start;
let zona;
let zona1;
let zona2;
let zona3;
let zona4;
let pies = [];
let pieslide;
let feet;
let enemigos1;
let enemigos2;
let enemigos3;
let enemigos4;
let enemigos5;
let Ftree;
let goblin;
let goblincount;

let switch1;
let switch2;
let keyobtained;
let keyimg;
let keydeal;
let wall;

class Trofeo {
  constructor(fila, columna, puntos = 50) {

    this.fila = fila;
    this.columna = columna;
    this.puntos = puntos;
    this.x = 100 + (200 * fila);
    this.y = 100 + (200 * columna);


  }

  show() {
    fill(255, 255, 0);
    image(keyimg, this.x - 100, this.y - 50, 200, 200);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getPuntos() {
    return this.puntos;
  }

  move(mat) {

  }


}




let collectables = [];
let agresive = [];


let mat = [
  [0, 0, 0, 0, 0], // 0
  [0, 0, 1, 0, 0], // 1
  [1, 0, 1, 0, 1], // 2
  [1, 0, 0, 0, 1], // 3
  [1, 1, 0, 1, 1], // 4
];

let Pantalla = 1;



class Escenario {
  constructor(image) {
    this.image = image;
  }

  show() {
    imageMode(CENTER);
    image(this.image, 500, 500, 1000, 1000);
    imageMode(CORNER);
  }

}

class Decoracion {
  constructor(image) {
    this.image = image;
  }

  show() {
    imageMode(CENTER);
    image(this.image, xPj, yPj, 1000, 1000);
    imageMode(CORNER);
  }
}

function Attack() {

  fill(0, 0, 0);

  switch (dirrection) {
    case 0:

      circle(xPj - 200, yPj, 40);

      break;
    case 1:

      circle(xPj + 200, yPj, 40);

      break;
    case 2:

      circle(xPj, yPj - 200, 40);

      break;
    case 3:

      circle(xPj, yPj + 200, 40);

      break;
  }

}



function setup() {
  createCanvas(1000, 1200);

  dirrection = 2;
  ataque = 0;
  arma = 0;
  arco = 1;
  movimiento = 0;
  start == false;
  zona = loadImage("./images/Grass.png");
  Gameover = loadImage("./images/Game over.png");
  Gameover2 = loadImage("./images/To be continued_.png");
  mino = loadImage("./images/Minotauro1.png");
  minodust = loadImage("./images/Polvo.png");
  zona1 = 0;
  zona2 = 0;
  zona3 = 0;
  zona4 = 0;
  pieslide = 1;
  feet = 0;
  Gameoveropacity = 300;
  heart = loadImage("./images/Heart.png");
  SpiderImg = (loadImage("./images/Spider.png"));
  enemigos1 = 0;
  enemigos2 = 0;
  enemigos3 = 0;
  enemigos4 = 0;
  enemigos5 = 0;
  enemigos6 = 0;
  switch1 = 0;
  switch2 = 0;
  keyobtained = 0;
  keyimg = (loadImage("./images/Key.png"));
  goblin = (loadImage("./images/Goblin.png"));
  goblincount = 0;
  keydeal = 0;
  wall = (loadImage("./images/Wall.png"));
  Ftree = (loadImage("./images/Ftree.png"));


  chaquetaslide = 1;
  pieslide = 0;

  Protagonista = new Jugador(loadImage("./images/Character.png"));



  pies[0] = new Imagenes(loadImage("./images/Feet.png"));
  pies[1] = new Imagenes(loadImage("./images/Feet1.png"));
  pies[2] = new Imagenes(loadImage("./images/Feet2.png"));


  Level1lide = 0;

  Level1[0] = new Escenario(loadImage("./images/Forest0.png"));
  Level1[1] = new Escenario(loadImage("./images/Forest1.png"));
  Level1[2] = new Escenario(loadImage("./images/Forest2.png"));
  Level1[3] = new Escenario(loadImage("./images/Forest3.png"));
  Level1[4] = new Escenario(loadImage("./images/Forest4.png"));
  Level1[5] = new Escenario(loadImage("./images/Forest5.png"));
  Level1[6] = new Escenario(loadImage("./images/Forest6.png"));
  Level1[7] = new Escenario(loadImage("./images/Forest7.png"));

  Level2lide = 0;

  Level2[0] = new Escenario(loadImage("./images/Cave1.png"));
  Level2[1] = new Escenario(loadImage("./images/Cave2.png"));
  Level2[2] = new Escenario(loadImage("./images/Cave3.png"));
  Level2[3] = new Escenario(loadImage("./images/Cave4.png"));
  Level2[4] = new Escenario(loadImage("./images/Cave5.png"));
  Level2[5] = new Escenario(loadImage("./images/Cave6.png"));


  Level3lide = 0;

  Level3[0] = new Escenario(loadImage("./images/Lava1.png"));
  Level3[1] = new Escenario(loadImage("./images/Dungeon1.png"));
  Level3[2] = new Escenario(loadImage("./images/Dungeon2.png"));
  Level3[3] = new Escenario(loadImage("./images/Dungeon3.png"));




  Level4lide = 0;

  Level4[0] = new Escenario(loadImage("./images/Lava1.png"));
  Level4[1] = new Escenario(loadImage("./images/Lava2.png"));


  titulo = new Titulo(loadImage("./images/Titulo.png"))
  fondo = new Imagenes(loadImage("./images/Fondo.jpg"));
  cuerpo = new Imagenes(loadImage("./images/Cuerpo.png"));

  console.log(mat);



  fondo = new Imagenes(loadImage("./images/Rectangle1.png"));

  Background = new Escenario(loadImage("./images/Forest1.png"));





  for (let i = 0; i < 4; i++) {
    boton[i] = new Array(4);
    for (let j = 0; j < 4; j++) {
      boton[i][j] = new Boton((720 * i) + 220, (80 * j) + 330, 50);
    }
  }
}

function draw() {
  background(255);

  switch (Pantalla) {

    case 0:

      mostrarMenu();
      startbotton();
      exitbotton();

      break;

    case 1:

      ///////////////////////////////////////////////// Nivel 1

      mostrarTerreno();
      mostrarPersonaje();

      mostrarCollectables(mat);
      verificarInteraccion();
      verificarSpider();
      pies[pieslide].show();
      pieslide = 0;
      Level1[Level1lide].show();
      mostrarSpider(mat);
      mostrarMinotauro();
      mostrarAtaque();



      //Animacion de caminar

      if (yPj < 100 + (200 * filPj)) {
        yPj += 10;
        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }

      }

      if (yPj > 100 + (200 * filPj)) {

        yPj -= 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }
      }

      if (xPj > 100 + (200 * colPj)) {

        xPj -= 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }
      }

      if (xPj < 100 + (200 * colPj)) {

        xPj += 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;


        }
        if (feet > 20) {
          feet = 1;
        }
      }

      ///////////////////////////////////////////////// Mapa nivel 1

      switch (zona1) {
        case 0:



          Level1lide = 0;
          mat = [
            [1, 1, 0, 1, 1], // 0
            [1, 1, 0, 1, 1], // 1
            [1, 1, 0, 1, 1], // 2
            [1, 1, 0, 1, 1], // 3
            [1, 1, 1, 1, 1], // 4
          ];

          if (colPj == 2 && filPj == 0) {

            zona1 = 1;
            colPj = 2;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }


          break;
        case 1:





          Level1lide = 1;
          mat = [
            [1, 1, 0, 1, 1], // 0
            [1, 0, 0, 0, 1], // 1
            [0, 0, 0, 0, 0], // 2
            [1, 0, 0, 0, 1], // 3
            [1, 1, 0, 1, 1], // 4
          ];

          if (colPj == 0 && filPj == 2 && dirrection == 0) {

            zona1 = 3;
            colPj = 4;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }


          if (colPj == 2 && filPj == 0 && dirrection == 2) {

            zona1 = 5;
            colPj = 2;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if (colPj == 4 && filPj == 2 && dirrection == 1) {

            zona1 = 2;
            colPj = 0;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }



          break;
        case 2:

          if (switch1 == 1) {

            Level1lide = 2;



            mat = [
              [1, 0, 1, 0, 1], // 0
              [1, 0, 0, 0, 1], // 1
              [0, 1, 0, 1, 1], // 2
              [0, 0, 0, 0, 0], // 3
              [1, 0, 1, 0, 1], // 4


            ];

          } else {



            image(Ftree, 400, 300, 200, 300);

            Level1lide = 2;

            mat = [
              [1, 0, 0, 0, 1], // 0
              [1, 0, 0, 0, 1], // 1
              [0, 1, 1, 1, 1], // 2
              [0, 0, 0, 0, 0], // 3
              [1, 0, 1, 0, 1], // 4


            ];

          }





          if (colPj == 0 && filPj == 2 && dirrection == 0) {

            zona1 = 1;
            colPj = 4;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if (colPj == 2 && filPj == 1) {

            switch2 = 1;


          }

          if (switch2 == 1) {

            Level1lide = 6;

          }




          break;
        case 3:
          Level1lide = 3;

          mostrarPersonaje();
          pies[pieslide].show();
          mat = [
            [0, 1, 0, 1, 0], // 0
            [1, 1, 0, 1, 1], // 1
            [1, 1, 0, 1, 1], // 2
            [1, 1, 0, 1, 1], // 3
            [1, 0, 0, 0, 0], // 4
          ];

          if (colPj == 2 && filPj == 0) {

            zona1 = 4;
            colPj = 2;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if (colPj == 4 && filPj == 4 && dirrection == 1) {

            zona1 = 1;
            colPj = 0;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }
          break;
        case 4:

          if (enemigos5 == 0) {

            agresive.push(new Enemy(0, 0));
            agresive.push(new Enemy(0, 0));

            enemigos5 = 1;

          }

          verificarEnemy();
          mostrarEnemy(mat);



          switch1 = 1;

          Level1lide = 4;
          mat = [
            [0, 0, 0, 0, 0], // 0
            [0, 1, 0, 1, 0], // 1
            [0, 0, 0, 0, 0], // 2
            [0, 1, 0, 1, 0], // 3
            [0, 0, 0, 0, 0], // 4
          ];

          if (colPj == 2 && filPj == 4 && dirrection == 3 && goblincount > 1) {

            zona1 = 3;
            colPj = 2;
            filPj = 1;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          break;
        case 5:

          mostrarPersonaje();
          pies[pieslide].show();

          if (enemigos4 == 0) {

            agresive.push(new Enemy(0, 0));

            enemigos4 = 1;

          }

          verificarEnemy();
          mostrarEnemy(mat);

          if (switch2 == 1 && goblincount > 2) {

            Level1lide = 7;

            mat = [
              [0, 0, 0, 0, 0], // 0
              [1, 1, 0, 1, 1], // 1
              [0, 0, 0, 0, 0], // 2
              [0, 0, 0, 0, 0], // 3
              [1, 1, 0, 1, 1], // 4
            ];

          } else {

            Level1lide = 5;

            mat = [
              [0, 0, 0, 0, 0], // 0
              [1, 1, 1, 1, 1], // 1
              [0, 0, 0, 0, 0], // 2
              [0, 0, 0, 0, 0], // 3
              [1, 1, 0, 1, 1], // 4
            ];

          }


          if (colPj == 2 && filPj == 4 && dirrection == 3) {

            zona1 = 1;
            colPj = 2;
            filPj = 1;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if (colPj == 2 && filPj == 0 && dirrection == 2) {

            Pantalla = 2;


            colPj = 2;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }
          break;
      }


      break;


    case 2:


      ///////////////////////////////////////////////// Level 2


      mostrarTerreno();
      mostrarCollectables(mat);
      verificarInteraccion();
      verificarEnemy();
      pieslide = 0;
      Level2[Level2lide].show();
      mostrarPersonaje();
      mostrarAtaque();
      pies[pieslide].show();
      mostrarEnemy(mat);



      //Animacion de caminar

      if (yPj < 100 + (200 * filPj)) {
        yPj += 10;
        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }

      }

      if (yPj > 100 + (200 * filPj)) {

        yPj -= 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }
      }

      if (xPj > 100 + (200 * colPj)) {

        xPj -= 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }
      }

      if (xPj < 100 + (200 * colPj)) {

        xPj += 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;


        }
        if (feet > 20) {
          feet = 1;
        }
      }

      ///////////////////////////////////////////////// Mapa nivel 2

      switch (zona2) {
        case 0:
          Level2lide = 0;
          mat = [
            [1, 1, 0, 1, 1], // 0
            [1, 1, 0, 1, 1], // 1
            [1, 1, 0, 1, 1], // 2
            [1, 1, 0, 1, 1], // 3
            [1, 1, 1, 1, 1], // 4
          ];

          if (colPj == 2 && filPj == 0) {

            zona2 = 1;
            colPj = 2;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }


          break;
        case 1:


          if (enemigos3 == 0) {

            agresive.push(new Enemy(1, 1));
            agresive.push(new Enemy(2, 1));

            enemigos3 = 1;

          }

          verificarEnemy();



          Level2lide = 1;
          mat = [
            [0, 1, 0, 0, 1], // 0
            [0, 0, 0, 0, 1], // 1
            [1, 0, 0, 0, 0], // 2
            [0, 0, 0, 1, 0], // 3
            [0, 1, 0, 0, 0], // 4
          ];

          if (colPj == 2 && filPj == 0 && goblincount > 4)  {

            zona2 = 2;
            colPj = 2;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }



          break;
        case 2:


          if (enemigos6 == 0) {

            agresive.push(new Enemy(1, 2));
            agresive.push(new Enemy(2, 2));

            enemigos6 = 1;

          }

          verificarEnemy();




          mat = [
            [0, 0, 1, 0, 0], // 0
            [0, 1, 0, 1, 0], // 1
            [0, 0, 0, 0, 0], // 2
            [1, 0, 1, 0, 1], // 3
            [1, 0, 0, 1, 1], // 4


          ];




          Level2lide = 2;




          if (colPj == 0 && filPj == 0 && dirrection == 0 && goblincount > 6) {

            zona2 = 3;
            colPj = 4;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if (colPj == 4 && filPj == 0 && dirrection == 1 && goblincount > 6) {

            zona2 = 4;
            colPj = 0;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          break;
        case 3:
          Level2lide = 3;
          mat = [
            [0, 0, 0, 0, 0], // 0
            [1, 1, 1, 1, 0], // 1
            [0, 0, 0, 0, 0], // 2
            [0, 1, 1, 1, 1], // 3
            [0, 0, 0, 0, 0], // 4
          ];

          if (colPj == 4 && filPj == 4 && dirrection == 1) {

            zona2 = 2;
            colPj = 0;
            filPj = 0;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if (colPj == 0 && filPj == 0) {

            health = 3;

          }
          break;
        case 4:


          switch1 = 1;

          Level2lide = 4;
          mat = [
            [1, 0, 0, 0, 1], // 0
            [1, 0, 0, 0, 1], // 1
            [1, 0, 0, 0, 1], // 2
            [0, 1, 0, 1, 0], // 3
            [0, 0, 0, 0, 0], // 4
          ];

          if (colPj == 2 && filPj == 0 && dirrection == 2) {

            zona2 = 5;
            colPj = 2;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          break;
        case 5:



          mat = [
            [1, 0, 0, 0, 1], // 0
            [1, 0, 0, 0, 0], // 1
            [1, 0, 0, 0, 1], // 2
            [1, 0, 0, 0, 1], // 3
            [1, 0, 0, 0, 1], // 4
          ];

          Level2lide = 5;

          if (colPj == 2 && filPj == 4 && dirrection == 3) {

            zona2 = 4;
            colPj = 2;
            filPj = 0;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if (colPj == 4 && filPj == 1 && dirrection == 1) {

            Pantalla = 3;
            colPj = 0;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }
          break;
      }






      break;



    case 3:


      ///////////////////////////////////////////////// Level 3

      Level3[Level3lide].show();
      mostrarPersonaje();
      mostrarAtaque();
      verificarEnemy();

      pies[pieslide].show();
      pieslide = 0;

      mostrarEnemy(mat);

      mostrarMinotauro();



      //Animacion de caminar

      if (yPj < 100 + (200 * filPj)) {
        yPj += 10;
        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }

      }

      if (yPj > 100 + (200 * filPj)) {

        yPj -= 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }
      }

      if (xPj > 100 + (200 * colPj)) {

        xPj -= 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }
      }

      if (xPj < 100 + (200 * colPj)) {

        xPj += 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;


        }
        if (feet > 20) {
          feet = 1;
        }
      }

      ///////////////////////////////////////////////// Mapa nivel 3

      switch (zona3) {
        case 0:
          Level3lide = 0;
          mat = [
            [1, 1, 1, 1, 1], // 0
            [1, 1, 1, 1, 1], // 1
            [0, 0, 0, 0, 0], // 2
            [1, 1, 1, 1, 1], // 3
            [1, 1, 1, 1, 1], // 4
          ];

          if (colPj == 4 && filPj == 2) {

            zona3 = 1;
            colPj = 0;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }


          break;
        case 1:



          if (enemigos1 == 0) {

            Spiders.push(new Spider(1, 1));
            Spiders2.push(new Spider2(2, 2));
            Spiders3.push(new Spider3(3, 3));



            enemigos1 = 1;

          }



          Level3lide = 1;
          mat = [
            [1, 1, 1, 1, 1], // 0
            [0, 0, 0, 0, 0], // 1
            [0, 0, 0, 0, 0], // 2
            [1, 0, 0, 0, 1], // 3
            [1, 1, 1, 1, 1], // 4
          ];

          if ((colPj == 4 && filPj == 2 && dirrection == 1) || (colPj == 4 && filPj == 1 && dirrection == 1)) {

            zona3 = 2;
            colPj = 0;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }



          mostrarSpider(mat);
          verificarSpider();
          mostrarSpider2(mat);
          verificarSpider2();
          mostrarSpider3(mat);
          verificarSpider3();

          image(wall, 0, 0, 1000, 1000);



          break;
        case 2:



          mat = [
            [1, 0, 1, 1, 1], // 0
            [0, 0, 0, 0, 1], // 1
            [0, 0, 0, 0, 0], // 2
            [1, 0, 0, 0, 1], // 3
            [1, 1, 1, 1, 1], // 4
          ];

          switch2 = 1;

          mostrarCollectables(mat);
          verificarInteraccion();

          if (keydeal == 0) {

            collectables.push(new Trofeo(4, 2));

            keydeal = 1

          }

          Level3lide = 2;









          if (colPj == 1 && filPj == 0 && dirrection == 2) {

            zona3 = 3;
            colPj = 1;
            filPj = 4;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if ((colPj == 0 && filPj == 1 && dirrection == 0) || (colPj == 0 && filPj == 2 && dirrection == 0)) {

            zona3 = 1;
            colPj = 4;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if ((colPj == 4 && filPj == 2 && dirrection == 0) || (colPj == 0 && filPj == 2)) {

            keyobtained = 1;

          }


          break;
        case 3:
          Level3lide = 3;

          if (keyobtained == 1) {

            mat = [
              [1, 1, 1, 1, 1], // 0
              [1, 1, 1, 1, 1], // 1
              [1, 0, 0, 0, 0], // 2
              [1, 0, 1, 1, 1], // 3
              [1, 0, 1, 1, 1], // 4
            ];

          } else {

            mat = [
              [1, 1, 1, 1, 1], // 0
              [1, 1, 1, 1, 1], // 1
              [1, 0, 0, 0, 1], // 2
              [1, 0, 1, 1, 1], // 3
              [1, 0, 1, 1, 1], // 4
            ];

          }


          if (colPj == 4 && filPj == 2) {

            Pantalla = 4;
            colPj = 0;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }

          if (colPj == 1 && filPj == 4 && dirrection == 3) {

            zona3 = 2;
            colPj = 1;
            filPj = 0;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }
          break;
      }


      break;


    case 4:

      ///////////////////////////////////////////////// Level 4


      Level4[Level4lide].show();
      mostrarPersonaje();
      mostrarAtaque();
      mostrarCollectables(mat);
      verificarInteraccion();
      verificarEnemy();
      pies[pieslide].show();
      pieslide = 0;

      mostrarEnemy(mat);

      verificarMinotauro();

      mostrarMinotauro();
      



      //Animacion de caminar

      if (yPj < 100 + (200 * filPj)) {
        yPj += 10;
        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }

      }

      if (yPj > 100 + (200 * filPj)) {

        yPj -= 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }
      }

      if (xPj > 100 + (200 * colPj)) {

        xPj -= 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;
          console

        }
        if (feet > 20) {
          feet = 1;
        }
      }

      if (xPj < 100 + (200 * colPj)) {

        xPj += 10;

        if (feet < 10) {
          pieslide = 1;
          feet++;
        }
        else {
          pieslide = 2;
          feet++;


        }
        if (feet > 20) {
          feet = 1;
        }
      }

      ///////////////////////////////////////////////// Mapa nivel 4

      switch (zona4) {
        case 0:
          Level4lide = 0;
          mat = [
            [1, 1, 1, 1, 1], // 0
            [1, 1, 1, 1, 1], // 1
            [0, 0, 0, 0, 0], // 2
            [1, 1, 1, 1, 1], // 3
            [1, 1, 1, 1, 1], // 4
          ];

          if (colPj == 4 && filPj == 2) {

            zona4 = 1;
            colPj = 0;
            filPj = 2;
            xPj = 100 + (200 * colPj);
            yPj = 100 + (200 * filPj);

          }


          break;
        case 1:

          if (enemigos2 == 0) {


            minotaurs.push(new Minotauro(4, 2));

            enemigos2 = 1;

          }




          Level4lide = 1;
          mat = [
            [1, 1, 0, 1, 1], // 0
            [0, 0, 0, 0, 0], // 1
            [0, 0, 0, 0, 0], // 2
            [0, 0, 0, 0, 0], // 3
            [1, 1, 0, 1, 1], // 4
          ];




          break;

      }



      break;


    case 5:

      ///////////////////////////////////////////////// Victory screen


      fill(255, 255, 255);

      rect(0, 0, 1200, 1200);

      fill(0, 0, 0);

      textSize(70);
      text("Puntaje", 200, 650);
      text(puntos, 500, 650);

      fill(255, 255, 255, Gameoveropacity);

      image(Gameover2, 100, 200, 800, 300);

      rect(0, 0, 1200, 1200);

      if (Gameoveropacity > 0) {
        Gameoveropacity--;
      }



      break;


    case 6:

      ///////////////////////////////////////////////// Game over screen


      fill(0, 0, 0);

      rect(0, 0, 1200, 1200);

      fill(255, 255, 255);

      textSize(70);
      text("Puntaje", 200, 750);
      text(puntos, 500, 750);

      fill(0, 0, 0, Gameoveropacity);

      image(Gameover, 100, 200, 800, 400);

      rect(0, 0, 1200, 1200);

      if (Gameoveropacity > 0) {
        Gameoveropacity--;
      }




      break;


    default:
    // code block
  }

  fill(0);

  rect(0, 1000, 1200, 200);

  Protagonista.showhealth();

  if (Pantalla < 5) {

    fill(255, 255, 255);

    textSize(30);
    text(puntos, 800, 1125);

  }




  ataque = 0;
  arco = 1;
  xAttack = 100 + (200 * colPj);
  yAttack = 100 + (200 * filPj);

}

function mousePressed() {



}

function mousePressed() {

  if (dist(300, 700, mouseX, mouseY) < 50) {
    Pantalla++;
  }
}

function mostrarCollectables(mat) {
  for (let index = 0; index < collectables.length; index++) {
    const colectable = collectables[index];
    colectable.show();
    if (frameCount % 60 == 0) {
      colectable.move(mat);
    }
  }
}







function seleccionarColor(fila, columna) {
  switch (mat[fila][columna]) {
    case 0:
      // libre
      noStroke();
      fill(255, 255, 255, 20);
      break;
    case 1:
      // obstaculo
      fill(0, 0, 0, 20);
      break;
    case 2:
      // protegido
      fill(255, 255, 0);
      break;
    default:
      break;
  }
}

function mostrarTerreno() {
  image(zona, 0, 0, 1000, 1000);

  for (let fila = 0; fila < mat.length; fila++) {
    for (let columna = 0; columna < mat[fila].length; columna++) {
      seleccionarColor(fila, columna);
      rect(columna * 200, fila * 200, 200, 200);
    }
  }


}

function mostrarMenu() {
  stroke(0);
  fill(255, 255, 255);

  rect(0, 0, 1000, 1000);

}

function startbotton() {

  stroke(0);
  fill(215, 122, 97);
  rect(300, 700, 400, 50);

}

function exitbotton() {

  stroke(0);
  fill(215, 122, 97);
  rect(300, 800, 400, 50);

}

function keyPressed() {

  switch (key) {
    case 'a': // izquierda

      dirrection = 0;
      if (colPj - 1 >= 0 && mat[filPj][colPj - 1] === 0) {

        colPj--;
        cAttack = colPj - 1;
      }
      break;
    case 'd':

      dirrection = 1;
      if (colPj + 1 < mat.length && mat[filPj][colPj + 1] === 0) {

        colPj++;
        cAttack = colPj + 1;
      }
      break;
    case 'w':
      dirrection = 2;
      if (filPj - 1 >= 0 && mat[filPj - 1][colPj] === 0) {

        filPj--;
        fAttack = filPj - 1;
      }
      break;
    case 's':
      dirrection = 3;
      if (filPj + 1 < mat.length && mat[filPj + 1][colPj] === 0) {

        filPj++;
        fAttack = filPj + 1;


      }

      break;

    case 'j':
      ataque = 1;

      break;

    case 'k':

      if (arma == 1 ) {
        arma = 0;
      } else {

        if (switch2 == 1) {

          arma = 1;

        }

      }

      break;

    case 'l':

      health = 0;

      break;

    case 'p':

      Pantalla++;
      break;
  }


}
let suma;

function sumar(xPj) {
  suma = x * 2
  console.log(suma);
  return suma
}

function verificarInteraccion() {
  for (let index = 0; index < collectables.length; index++) {
    const colectable = collectables[index];
    if (dist(xPj, yPj, colectable.getX(), colectable.getY()) < 50) {
      puntos += colectable.getPuntos();
      collectables.splice(index, 1);
      console.log(puntos);
      break;
    }
  }
}






