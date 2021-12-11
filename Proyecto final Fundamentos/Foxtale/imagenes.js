class Imagenes {
    constructor(image){
        this.image = image;
    }
    
    show(){
        imageMode(CENTER);
        image(this.image, xPj, yPj, 200, 200);
        imageMode(CORNER);
    }
    getPicture() {
        return this.image;
      }
}
