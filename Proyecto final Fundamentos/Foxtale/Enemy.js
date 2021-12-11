class Enemy {
  constructor(fila, columna, puntos = 50) {

    this.fila = fila;
    this.columna = columna;
    this.puntos = puntos;
    this.x = 100 + (200 * fila);
    this.y = 100 + (200 * columna);


  }

  show() {
    fill(255, 0, 0);
    image(goblin, this.x - 100, this.y - 100, 200, 200);
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

  getCol() {
    return this.columna;
  }

  getXFil() {
    return this.fila;
  }


  move() {

    let dir = parseInt(random(4));
    switch (dir) {
      case 0: // izquierda
        if (this.columna - 1 > 0 && mat[this.fila][this.columna - 1] === 0) {
          this.x -= 200;
          this.columna--;
        }
        break;
      case 1: // derecha
        if (this.columna + 1 < mat.length && mat[this.fila][this.columna + 1] === 0) {
          this.x += 200;
          this.columna++;
        }
        break;
      case 2: // arriba
        if (this.fila - 1 > 0 && mat[this.fila - 1][this.columna] === 0) {
          this.y -= 200;
          this.fila--;
        }
        break;
      case 3: // abajo
        if (this.fila + 1 < mat.length && mat[this.fila + 1][this.columna] === 0) {
          this.y += 200;
          this.fila++;
        }
        break;
    }

  }
}



let Spiders = [];
let Spiders2 = [];
let Spiders3 = [];
let Spiderturn = 0;
let SpiderImg;



class Spider {
  constructor(fila, columna, puntos = 50) {

    this.fila = fila;
    this.columna = columna;
    this.puntos = puntos;
    this.x = 100 + (200 * fila);
    this.y = 100 + (200 * columna);


  }

  show() {
    fill(0, 0, 0);
    image(SpiderImg, this.x - 60, this.y - 50, 106, 132);
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

  getCol() {
    return this.columna;
  }

  getXFil() {
    return this.fila;
  }


  move() {


    switch (Spiderturn) {
      case 0: // izquierda

        this.y -= 200;
        this.columna--;
        Spiderturn += 1;

        break;
      case 1: // derecha
        this.y -= 200;
        this.columna--;
        Spiderturn += 1;
        break;
      case 2: // arriba
        this.y -= 200;
        this.columna--;
        Spiderturn += 1;
        break;
      case 3: // abajo
        this.y += 600;
        this.columna--;
        this.columna--;
        this.columna--;

        Spiderturn = 0;
        break;

      case 4: // abajo

        break;
    }

  }
}

class Spider2 {
  constructor(fila, columna, puntos = 50) {

    this.fila = fila;
    this.columna = columna;
    this.puntos = puntos;
    this.x = 100 + (200 * fila);
    this.y = 100 + (200 * columna);


  }

  show() {
    fill(0, 0, 0);
    image(SpiderImg, this.x - 60, this.y - 50, 106, 132);
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

  getCol() {
    return this.columna;
  }

  getXFil() {
    return this.fila;
  }


  move() {


    switch (Spiderturn) {
      case 0: // izquierda

        this.y -= 200;
        this.columna--;
        Spiderturn += 1;

        break;
      case 1: // derecha
        this.y -= 200;
        this.columna--;
        Spiderturn += 1;
        break;
      case 2: // arriba
        this.y -= 200;
        this.columna--;
        Spiderturn += 1;
        break;
      case 3: // abajo
        this.y += 600;
        this.columna--;
        this.columna--;
        this.columna--;

        Spiderturn = 0;
        break;

      case 4: // abajo

        break;
    }

  }
}

class Spider3 {
  constructor(fila, columna, puntos = 50) {

    this.fila = fila;
    this.columna = columna;
    this.puntos = puntos;
    this.x = 100 + (200 * fila);
    this.y = 100 + (200 * columna);


  }

  show() {
    fill(0, 0, 0);
    image(SpiderImg, this.x - 60, this.y - 50, 106, 132);
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

  getCol() {
    return this.columna;
  }

  getXFil() {
    return this.fila;
  }


  move() {


    switch (Spiderturn) {
      case 0: // izquierda

        this.y -= 200;
        this.columna--;
        Spiderturn += 1;

        break;
      case 1: // derecha
        this.y -= 200;
        this.columna--;
        Spiderturn += 1;
        break;
      case 2: // arriba
        this.y -= 200;
        this.columna--;
        Spiderturn += 1;
        break;
      case 3: // abajo
        this.y += 600;
        this.columna--;
        this.columna--;
        this.columna--;

        Spiderturn = 0;
        break;

      case 4: // abajo

        break;
    }

  }
}

let number = 2;

function square(number) {
  return number * number;
}

function verificarSpider() {
  for (let index = 0; index < Spiders.length; index++) {
    const Spoders = Spiders[index];
    if (dist(xPj, yPj, Spoders.getX(), Spoders.getY()) < 50) {
      puntos += Spoders.getPuntos();
      Spiders.splice(index, 1);
      health -= 1;
      console.log(puntos);
      break;
    }
  }
}

function verificarSpider2() {
  for (let index = 0; index < Spiders3.length; index++) {
    const Spoders2 = Spiders3[index];
    if (dist(xPj, yPj, Spoders2.getX(), Spoders2.getY()) < 50) {
      puntos += Spoders2.getPuntos();
      Spiders3.splice(index, 1);
      health -= 1;
      console.log(puntos);
      break;
    }
  }
}

function verificarSpider3() {
  for (let index = 0; index < Spiders3.length; index++) {
    const Spoders3 = Spiders3[index];
    if (dist(xPj, yPj, Spoders3.getX(), Spoders3.getY()) < 50) {
      puntos += Spoders3.getPuntos();
      Spiders3.splice(index, 1);
      health -= 1;
      console.log(puntos);
      break;
    }
  }
}






function verificarEnemy() {
  for (let index = 0; index < agresive.length; index++) {
    const agressive = agresive[index];
    if (dist(xPj, yPj, agressive.getX(), agressive.getY()) < 50) {
      puntos += agressive.getPuntos();
      agresive.splice(index, 1);
      health -= 1;
      goblincount += 1;
      console.log(puntos);
      break;
    }

    if (dist(xAttack, yAttack, agressive.getX(), agressive.getY()) < 50 && ataque == 1) {
      puntos += agressive.getPuntos();
      agresive.splice(index, 1);
      goblincount += 1;
      console.log(goblincount);

    }
  }
}


let mino;
let minotaurs = [];
let minoHP = 10;
let minodir = 0;
let minodust;

class Minotauro {
  constructor(fila, columna, puntos = 50) {

    this.fila = fila;
    this.columna = columna;
    this.puntos = puntos;
    this.x = 100 + (200 * fila);
    this.y = 100 + (200 * columna);


  }

  show() {
    fill(255, 0, 0);
    image(mino, this.x - 160, this.y - 160, 300, 300);
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

  getCol() {
    return this.columna;
  }

  getXFil() {
    return this.fila;
  }


  move() {


    switch (minodir) {

      case -1:

        minodir = 0;



        break;
      case 0:

        minodir = 1;



        break;
      case 1:

        this.fila = 1;
        this.columna = 1;
        this.x = 100 + (200 * this.fila);
        this.y = 100 + (200 * this.columna);
        minodir = 2;

        break;
      case 2:

        this.fila = 1;
        this.columna = 3;
        this.x = 100 + (200 * this.fila);
        this.y = 100 + (200 * this.columna);
        minodir = 3;

        break;
      case 3:

        this.fila = 3;
        this.columna = 3;
        this.x = 100 + (200 * this.fila);
        this.y = 100 + (200 * this.columna);
        minodir = 4;

        break;
      case 4:

        this.fila = 3;
        this.columna = 1;
        this.x = 100 + (200 * this.fila);
        this.y = 100 + (200 * this.columna);
        minodir = 5;

        break;

      case 5:

        this.fila = 2;
        this.columna = 2;
        this.x = 100 + (200 * this.fila);
        this.y = 100 + (200 * this.columna);
        minodir = -1;

        break;
    }

    if (minodir > 0) {

      fill(0, 0, 0);

      image(minodust, this.x + 200, this.y - 50, 200, 200);

      if (dist(xPj, yPj, this.x + 200, this.y) < 50) {

        health -= 1;

      }

      image(minodust, this.x - 300, this.y - 50, 200, 200);

      if (dist(xPj, yPj, this.x - 200, this.y) < 50) {

        health -= 1;

      }

      image(minodust, this.x - 100, this.y + 200 - 50, 200, 200);

      if (dist(xPj, yPj, this.x, this.y + 200) < 50) {

        health -= 1;

      }

      image(minodust, this.x - 100, this.y - 200 - 50, 200, 200);

      if (dist(xPj, yPj, this.x, this.y - 200) < 50) {

        health -= 1;

      }

      image(minodust, this.x + 200, this.y + 200 - 50, 200, 200);

      if (dist(xPj, yPj, this.x + 200, this.y + 200) < 50) {

        health -= 1;

      }

      image(minodust, this.x + 200, this.y - 200 - 50, 200, 200);

      if (dist(xPj, yPj, this.x + 200, this.y - 200) < 50) {

        health -= 1;

      }

      image(minodust, this.x - 300, this.y + 200 - 50, 200, 200);

      if (dist(xPj, yPj, this.x - 200, this.y + 200) < 50) {

        health -= 1;

      }

      image(minodust, this.x - 300, this.y - 200 - 50, 200, 200);

      if (dist(xPj, yPj, this.x - 200, this.y - 200) < 50) {

        health -= 1;

      }

    }

  }
}


function mostrarEnemy(mat) {
  for (let index = 0; index < agresive.length; index++) {
    const agressive = agresive[index];
    agressive.show();
    if (frameCount % 60 == 0) {
      agressive.move(mat);
    }
  }
}

function mostrarSpider(mat) {
  for (let index = 0; index < Spiders.length; index++) {
    const Spoders = Spiders[index];
    Spoders.show();
    if (frameCount % 60 == 0) {
      Spoders.move(mat);
    }
  }
}

function mostrarSpider2(mat) {
  for (let index = 0; index < Spiders2.length; index++) {
    const Spoders2 = Spiders2[index];
    Spoders2.show();
    if (frameCount % 60 == 0) {
      Spoders2.move(mat);
    }
  }
}

function mostrarSpider3(mat) {
  for (let index = 0; index < Spiders3.length; index++) {
    const Spoders3 = Spiders3[index];
    Spoders3.show();
    if (frameCount % 60 == 0) {
      Spoders3.move(mat);
    }
  }
}


function mostrarMinotauro() {
  for (let index = 0; index < minotaurs.length; index++) {
    const minotoro = minotaurs[index];
    minotoro.show();
    if (frameCount % 80 == 0) {
      minotoro.move(mat);
    }
  }
}

function verificarMinotauro() {
  for (let index = 0; index < minotaurs.length; index++) {
    const minotoro = minotaurs[index];
    if (dist(xPj, yPj, minotoro.getX(), minotoro.getY()) < 50) {
      puntos += minotoro.getPuntos();


      if (colPj - 1 >= 0 && mat[filPj][colPj - 1] === 0) {

        colPj--;

        cAttack = colPj - 1;

        xPj = 100 + (200 * colPj);
      } else {

        if (colPj + 1 < mat.length && mat[filPj][colPj + 1] === 0) {

          colPj++;
          cAttack = colPj + 1;
          xPj = 100 + (200 * colPj);
        }

      }

      health -= 1;
      console.log(puntos);
      break;
    }
    if (dist(xAttack, yAttack, minotoro.getX(), minotoro.getY()) < 50 && ataque == 1) {
      puntos += minotoro.getPuntos();


      minoHP -= 1;
      console.log(minoHP);
      break;
    }

    if (minoHP < 0) {

      minotaurs.splice(index, 1);

      Pantalla++;

    }
  }
}

