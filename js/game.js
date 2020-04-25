class Game {   
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');

    this.width = $canvas.width;
    this.height = $canvas.height;
  }
  
  
  
  
  startGame () {
    this.road = new Background(this);
    this.car = new Car(this);
    this.road.drawBackground(this.width, this.height);
    this.car.drawCar();
  }

}