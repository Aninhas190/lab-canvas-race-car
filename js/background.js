class Background {
  constructor (game) {
    this.game = game;
  }
  
  drawBackground (x, y) {
    const backgroundIMG = '/images/road.png';
    const backgroundImage = new Image();
    backgroundImage.src = backgroundIMG;
    
    const context = this.game.context;

    context.drawImage(backgroundImage, 0, 0, x, y);
    window.addEventListener('load', (event) => {
      context.drawImage(backgroundImage, 0, 0, x, y);
    });
    //context.drawImage(backgroundImage, x + backgroundImage.width, 0);
    //context.drawImage(backgroundImage, x + backgroundImage.width * 2, 0);
    
  }
}