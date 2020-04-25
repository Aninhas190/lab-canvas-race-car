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
    this.drawGame();
    //this.road.loop();
  }

  drawGame() {
    this.road.drawBackground();
    this.car.drawCar();

  }
  /*
  loop = () => {
    let y = this.road.y++;
    const backgroundImage = this.road.backgroundImage.height;
    
    if (backgroundImage) {
      y = y % backgroundImage;
    }
    console.log(y);
    //this.road.drawBackground();
    this.clearCanvas();
    this.drawGame();
    setTimeout(this.loop, 1000 / 400);
  }*/
  

  runLogic() {
    this.car.runLogic();
    this.road.loop();
  }

}