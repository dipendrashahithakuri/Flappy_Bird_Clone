const Environment = function(canvas,ctx){
    this.canvas =canvas;
    this.ctx = ctx;
    this.bgpos = 0;
    this.fgpos = 0;
    this.bgwidth = 960;
    this.bgSpeed = 1;
    this.bgImg = document.getElementById("bgimg");
};

Environment.prototype.update = function(){

    this.bgpos -= this.bgSpeed;

    if(this.bgpos < -this.bgwidth)
    {
        this.bgpos = 0;
    }
};

Environment.prototype.render = function(){

    for(let i=0;i<this.canvas.width/this.bgwidth;i++)
    this.ctx.drawImage(this.bgImg,this.bgpos+i*this.bgwidth,0);
};