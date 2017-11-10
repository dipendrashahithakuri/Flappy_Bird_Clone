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

    },2600);

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

        bird.update(pipes);
        bird.render();

        // if(detectCollisions(bird,pipes,canvas)){
        //     window.alert("You Lose!!");
        //     // window.location = '/';
        // }
        
        window.requestAnimationFrame(gameLoop);
    };


};

function generateRandomPipes(ctx,canvasWidth,canvasHeight){
    let lengthTop = Math.round(Math.random()*400+50);
    let lengthBottom = canvasHeight- 180 - lengthTop;
    let returnVal = {top: '', bottom:''};
    returnVal.top = new Pipe(canvasWidth , -5 , lengthTop , 4 , ctx);
    returnVal.bottom = new Pipe(canvasWidth , canvasHeight + 5 - lengthBottom , lengthBottom , 4 , ctx);
    return returnVal;
};