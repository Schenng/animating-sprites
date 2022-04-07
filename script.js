const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 96;
const CANVAS_HEIGHT = canvas.height = 140;

const playerImage = new Image();
playerImage.src = './sheet.png'
const spriteWidth = 96
const spriteHeight = 140

let gameFrame = 0;
let staggerFrames = 40;

let x = 0;

function animate() {
  ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);

  ctx.drawImage(
    playerImage, //image
    spriteWidth/4 * x,       //source x
    0,          // source y  
    spriteWidth/4,
    spriteHeight/4,
    0,
    0,
    spriteWidth,
    spriteHeight      
    )

    if(gameFrame % staggerFrames === 0) {
      x++;
      if(x > 3) {
        x=0;
      }
    }

    gameFrame++;
  requestAnimationFrame(animate);
};

function slower() {
  if(staggerFrames < 60) {
    staggerFrames += 10;
  }
}

function faster() {
  if(staggerFrames > 10) {
    staggerFrames -= 10;
  }
}

animate();