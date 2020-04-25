class Obstacle {
  constructor(game) {
    this.game = game;
    this.placeRandomly();
  }

  placeRandomly () {
    const width = this.game.width;
    this.x = Math.floor(Math.random() * width);

    /*const snake = this.game.snake;

    const blockThatIntersect = snake.blocks.find(block => {
      return block.x === this.x && block.y === this.y;
    });


    if (blockThatIntersect) {
      this.placeRandomly();
    }*/
  }
  
  draw () {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'red';
    context.fillRect(this.x, 0, 70, 30);
    context.restore();
  }
}