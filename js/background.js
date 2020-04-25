class Background {
  constructor(game) {
    this.game = game;
    this.y = 0;
    this.height = this.game.height;
    this.width = this.game.width;

    this.backgroundIMG = '/images/road.png';
    this.backgroundImage = new Image();
    this.backgroundImage.src = this.backgroundIMG;;
  }

  drawBackground(width, height) {
    const context = this.game.context;
    width = 500;
    height =  700;
    context.drawImage(this.backgroundImage, 0, this.y, width, height);
    context.drawImage(this.backgroundImage, 0, this.y - this.backgroundImage.height, width, height);
    context.drawImage(this.backgroundImage, 0, this.y - this.backgroundImage.height * 2, width,height);
    //window.addEventListener('load', (event) => {
      //context.drawImage(this.backgroundImage, 0, this.y, width, height);
    //});
    //context.drawImage(backgroundImage, x + backgroundImage.width, 0);
    //context.drawImage(backgroundImage, x + backgroundImage.width * 2, 0);
  } 
  
  loop = () => {
    let y = this.y++;
    const backgroundImage = this.backgroundImage.height;
    
    if (backgroundImage) {
      y = y % backgroundImage;
    }
    console.log(y);
    //this.road.drawBackground();
    this.game.clearCanvas();
    this.drawBackground();
    setTimeout(this.loop, 1000/ 240);
  }  
  
}
