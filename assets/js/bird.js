const Bird = function(x,y,ctx)
{
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.velY = 0;
    this.width = 100;
    this.height = 100;
    this.ticks = 0;
    this.spriteIndex = 0;
    this.dead = false;


    this.sprites = [document.getElementById('bird1'),
                    document.getElementById('bird2'),
                    document.getElementById('bird3')];

    var self = this;


    document.addEventListener('keydown',function(e){
        if(e.keyCode === 32){
            self.velY = -16;
            console.log('spacebar');
        }
    });
};

Bird.prototype.update = function(pipes){

    this.y += this.velY;
    this.velY +=1.25;

    this.ticks++;
    this.detectCollisions(pipes);

    while(this.ticks<=15){

        this.spriteIndex = (this.spriteIndex+1)%this.sprites.length;
        this.ticks++;
    }
    
    if(this.ticks%15 === 0){
        this.spriteIndex = (this.spriteIndex+1)%this.sprites.length;
    };

};

Bird.prototype.render = function(){

    let renderX = this.x - this.width/2;
    let renderY = this.y - this.height/2;
    this.ctx.drawImage(this.sprites[this.spriteIndex],renderX,renderY);
};

Bird.prototype.detectCollisions = function(bird,pipes){
    
        for(var i=0; i<pipes.length;i++){
            let e=pipes[i];
            let highPipe =e.posY <=0;
            let x0 = e.posX;
            let x1 = e.posX + e.width;

            let alpha2 = this.x + 50;
            let beta2 = this.y;

            if(highPipe){
                let y0 = e.posY + e.length;
                let alpha = this.x;
                let beta = this.y;
                if(alpha >= x0 && alpha <= x1 && beta <= y0 || alpha2 < x0 && alpha2 < x1 && beta2 < y0){
    
                    return true;
                }
            }
            // else if(this.y >= canvas.height || this.y <= 0){
            //     return true;
            // }
            else{
                let y1 = e.posY;
                let a = this.x;
                let b = this.y;
                if(a >= x0 && a <= x1 && b >= y1 || alpha2 < x0 && alpha2 < x1 && beta2 > y0) return true;
            };
        };
    
        return false;
    };
