const Pipe = function(xpos,ypos,length,speed,ctx){
    this.posX = xpos;
    this.posY = ypos;
    this.length = length;
    this.ctx = ctx;
    this.speed = speed;
};

Pipe.prototype.update = function(){
    this.posX -= this.speed;

};

Pipe.prototype.render = function(){

    this.ctx.save();

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX,this.posY,150,this.length);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.posX+5,this.posY,140,this.length-5);
    this.ctx.restore();

};