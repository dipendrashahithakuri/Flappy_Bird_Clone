const Pipe = function(xpos,ypos,length,speed,ctx){
    this.posX = xpos;
    this.posY = ypos;
    this.length = length;
    this.ctx = ctx;
    this.speed = speed;
    this.width = 150;
};

Pipe.prototype.update = function(){
    this.posX -= this.speed;

};

Pipe.prototype.render = function(){

    this.ctx.save();

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.posX,this.posY,this.width,this.length);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.posX+5,this.posY,this.width-10,this.length-5);
    this.ctx.restore();

};