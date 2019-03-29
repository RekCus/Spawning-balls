
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let myGameObjects = [];
let myImages = ['ball.png'];

yspeed = 10;

animate();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);
  
  if(Math.random()<0.1){
    let gameObject = {};
    gameObject.myImage = new Image();
    gameObject.myImage.src = myImages[0];
    gameObject.x = getRandomNumber(canvas.width);
    gameObject.y = -100;
    gameObject.scale = 0.7;
    myGameObjects.push(gameObject);
  }

  for(let i = 0; i<myGameObjects.length;i++){
    myGameObjects[i].y += yspeed*myGameObjects[i].scale;
    context.drawImage(myGameObjects[i].myImage,myGameObjects[i].x,myGameObjects[i].y,100*myGameObjects[i].scale, 100*myGameObjects[i].scale);
    if(myGameObjects[i].y>canvas.heigth){
      myGameObjects.splice(i,1);
    }
  }
}

function getRandomNumber(max){
  return Math.floor(Math.random()*max);
}


