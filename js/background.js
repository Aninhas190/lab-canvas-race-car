class Background {
  constructor () {

  }
  
  drawBackground () {
    const backgroundIMG = '/images/road.png';
    const backgroundImage = new Image();
    backgroundImage.src = backgroundIMG;
    let x = 0;
    /*
    }*/
    window.addEventListener('load', (event) => {
      context.drawImage(backgroundImage, x, 0);
    });
    //context.drawImage(backgroundImage, x + backgroundImage.width, 0);
    //context.drawImage(backgroundImage, x + backgroundImage.width * 2, 0);
    
    


  }
}