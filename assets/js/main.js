window.onload = function(){

    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");

    // const bird = new Image();
    // bird.src = 'assets/images/bird.png';

    // bird.onload = function()
    // {};
        // ctx.drawImage(document.getElementById("bird1"),100,100);
        // ctx.drawImage(document.getElementById("bird2"),200,100);
        // ctx.drawImage(document.getElementById("bird3"),300,100);

    // const bgpos = document.getElementById("bg");
    // bgpos.width = canvas.width;
    // bgpos.height = canvas.height;

    const env = new Environment(canvas,ctx);
    const bird = new Bird(200,200,ctx);
    const pipes = [];

    setInterval(function(){
        let pipeSet = generateRandomPipes(ctx,canvas.width,canvas.height);
        pipes.push(pipeSet.top , pipeSet.bottom);

    },3000);

    gameLoop();

    ctx.fillStyle = "white";

    //Main Game Loop

    function gameLoop(){
        
        ctx.fillRect(0,0,canvas.height,canvas.width);
        env.update();
        env.render();
              pipes.forEach(function(pipe1){
            pipe1.update();
            pipe1.render();
        });

        bird.update();
        bird.render();
        if(detectCollisions(bird,pipes)){
            window.alert("You Lose!!");
            // window.location = '/';
        }
        
        window.requestAnimationFrame(gameLoop);
    };


};

function generateRandomPipes(ctx,canvasWidth,canvasHeight){
    let lengthTop = Math.round(Math.random()*400+50);
    let lengthBottom = canvasHeight- 250 - lengthTop;
    let returnVal = {top: '', bottom:''};
    returnVal.top = new Pipe(canvasWidth , -5 , lengthTop , 4 , ctx);
    returnVal.bottom = new Pipe(canvasWidth , canvasHeight + 5 - lengthBottom , lengthBottom , 4 , ctx);
    return returnVal;
};

function detectCollisions(bird, pipes){

    for(var i=0; i<pipes.length;i++){
        let e=pipes[i];
        let highPipe =e.posY <=0;
        let x0 = e.posX;
        let x1 = e.posX + e.width;
        if(highPipe){
            let y0 = e.posY + e.length;
            let alpha = bird.x;
            let beta = bird.y;
            if(alpha >= x0 && alpha <= x1 && beta <= y0){

                return true;
            }
        }
        else{
            let y1 = e.posY;
            let a = bird.x;
            let b = bird.y;
            if(a >= x0 && a <= x1 && b >= y1) return true;
        };
    };

    return false;
};