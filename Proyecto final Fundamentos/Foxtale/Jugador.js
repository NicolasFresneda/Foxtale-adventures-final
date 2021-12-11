let puntos = 0;
let colPj = 2;
let filPj = 2;
let xPj = 100 + (200 * colPj);
let yPj = 100 + (200 * filPj);
let health = 3;
let cAttack = colPj;
let fAttack = filPj;
let xAttack = 100 + (200 * cAttack);
let yAttack = 100 + (200 * fAttack);

class Jugador {
  constructor(image) {
    this.image = image;
  }

  show() {
    imageMode(CENTER);
    image(this.image, xPj, yPj, 200, 200);
    imageMode(CORNER);

  }

  showhealth() {
    if (health > 0) {

      image(heart, 50, 1050, 100, 100);

    }

    else {
      Pantalla = 6;
    }

    if (health > 1) {

      image(heart, 150, 1050, 100, 100);

    }
    if (health > 2) {

      image(heart, 250, 1050, 100, 100);

    }
  }
}

function mostrarPersonaje() {
  noStroke();
  fill(255, 0, 0);
  Protagonista.show();
  stroke(0);
}

function mostrarAtaque() {
  if (ataque == 1) {
    noStroke();

    if (arma == 0) {

      fill(255, 255, 255);

    } else {
      fill(0, 0, 0);
    }

    switch (dirrection) {
      case 0:

        xAttack -= 200;

        if (arma == 0) {

          circle(xAttack, yAttack, 40);
        }

        if (arma == 1) {


          do {
            console.log(xAttack);

            cAttack = colPj - arco;
            fAttack = filPj;
            xAttack = 100 + (200 * (colPj - arco));
            yAttack = 100 + (200 * fAttack);
            verificarEnemy();
            verificarMinotauro();

            circle(xAttack, yAttack, 40);
            arco += 1;
          } while (colPj - arco >= 0 && mat[filPj][colPj - arco] === 0)

        }

        break;
      case 1:

        xAttack += 200;

        if (arma == 0) {
          circle(xAttack, yAttack, 40);
        }

        if (arma == 1) {
          do {
            console.log(xAttack);

            cAttack = colPj + arco;
            fAttack = filPj;
            xAttack = 100 + (200 * (colPj + arco));
            yAttack = 100 + (200 * fAttack);
            verificarEnemy();
            verificarMinotauro();

            circle(xAttack, yAttack, 40);
            arco += 1;
          } while (colPj + arco >= 0 && mat[filPj][colPj + arco] === 0)

        }

        break;
      case 2:

        yAttack -= 200;

        if (arma == 0) {
          circle(xAttack, yAttack, 40);
        }

        if (arma == 1) {
          do {
            console.log(xAttack);

            cAttack = colPj;
            fAttack = filPj - arco;
            xAttack = 100 + (200 * cAttack);
            yAttack = 100 + (200 * (filPj - arco));
            verificarEnemy();
            verificarMinotauro();

            circle(xAttack, yAttack, 40);
            arco += 1;
          } while (filPj - arco >= 0 && mat[filPj - arco][colPj] === 0)

        }
        break;
      case 3:

        yAttack += 200;

        if (arma == 0) {
          circle(xAttack, yAttack, 40);
        }

        if (arma == 1) {
          do {
            console.log(xAttack);

            cAttack = colPj;
            fAttack = filPj + arco;
            xAttack = 100 + (200 * cAttack);
            yAttack = 100 + (200 * (filPj + arco));
            verificarEnemy();
            verificarMinotauro();

            

            circle(xAttack, yAttack, 40);
            arco += 1;
          } while (filPj - arco >= 0 && mat[filPj - arco][colPj] === 0)

        }

        break;
    }

    stroke(0);
  }
}


