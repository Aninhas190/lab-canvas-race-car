class Game {   
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');

    this.width = $canvas.width;
    this.height = $canvas.height;

    this.setKeyBindings();
  }
  
  setKeyBindings() {
    window.addEventListener('keydown', event => {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case 37:
          this.car.moveLeft();
          break;
        case 39:
          this.car.moveRight();
          break;
      }  
    });
  }
  
  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }
  
  startGame () {
    this.road = new Background(this);
    this.car = new Car(this);
    this.drawGame();
    this.runLogic();
  }

  drawGame() {
    this.road.drawBackground(this.width, this.height);
    this.car.drawCar();
  }
  /*loop(){
    this.runLogic();

    setTimeout(() => {
      this.loop();
    }, 300);

  }*/

  runLogic() {
    this.car.runLogic();
  }

}