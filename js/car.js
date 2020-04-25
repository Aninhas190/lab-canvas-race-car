class Car {
  constructor(game) {
    this.game = game;

    
  }

  drawCar(x, y) {
    const carIMG = '/images/car.png';
    const carImage = new Image();
    carImage.src = carIMG;
    x = 50;
    y = 100;
    const context = this.game.context;
    context.drawImage(carImage, 230, 350, x, y);
    window.addEventListener('load', (event) => {
      context.drawImage(carImage, 250, 350, x, y);
    });
  }
}
