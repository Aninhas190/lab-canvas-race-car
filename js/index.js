const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

const road = new Background();
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  

  const startGame = () => {
    road.drawBackground();
  }
    
  const clearScreen = () => {
    context.clearRect(0, 0, $canvas.width, $canvas.height);
  }  
}  