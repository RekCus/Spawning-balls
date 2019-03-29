const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ball;
let balls=[];

//hier volgt het script
function animate(){
        ctx.fillStyle="black";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        for(let i=0;i<balls.length;i++){
            balls[i].draw();
            balls[i].update();
        }
        requestAnimationFrame(animate);
    }

function rng(max){
    return Math.floor(Math.random()*max+1);
}
var myVar = setInterval(myTimer, 1000);

function myTimer() {

}
for(let j=0;j<10;j++){
    balls[j] = new Ball(rng(canvas.width),rng(canvas.height),20,"yellow");
}
animate();