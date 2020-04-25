class Car {
  constructor(game) {
    this.game = game;
    this.y = 550;
    this.x = 230;
    this.carWidth = 50;
    this.carHeight = 100;
    //this.direction = 'left';
    this.carIMG = '/images/car.png';
    this.carImage = new Image();
    this.carImage.src = this.carIMG;
  }


  moveLeft() {
    if (this.x >= 5) {
      this.x -= 5;
      this.game.drawGame();
    }
  }

  moveRight() {
    if(this.x < 450) {
      this.x += 5;
      this.game.drawGame();
    }
  }

  runLogic() {
    this.moveLeft();
    this.moveRight();
  }

  drawCar() {
    const context = this.game.context;
    context.drawImage(this.carImage, this.x, this.y, this.carWidth, this.carHeight);
    window.addEventListener('load', (event) => {
      context.drawImage(this.carImage, this.x, this.y, this.carWidth, this.carHeight);
    });

  }
}
