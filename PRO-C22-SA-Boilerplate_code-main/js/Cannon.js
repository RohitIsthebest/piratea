class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannon_base = loadImage("./assets/cannonBase.png")
    this.cannon_top = loadImage("./assets/canon.png")
  }
  
  display(){
    //Code for cannon top
    push()
    imageMode(CENTER)
    image(this.cannon_base,this.x,this.y,this.width,this.height)
    pop()

    //Code for cannon bottom
    image(this.cannon_top,70,20,200,200)
    noFill()
  }
}
