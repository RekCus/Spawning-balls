class Ball {
    constructor(x,y,r,color) {
      this.x = x;
      this.y = 0;
      this.r = r;
      this.color = color;
      this.dir = rng(10);
    }

    draw(){
      ctx.beginPath();
      ctx.strokeStyle = "black";
      ctx.lineWidth = "3";
      ctx.fillStyle = this.color;
      ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
    update(){
        this.y+= this.dir;
    }
  }
  