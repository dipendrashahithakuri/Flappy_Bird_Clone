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
    const brd = new Bird(200,200,ctx);
    // const pipes = [];

    gameLoop();

    ctx.fillStyle = "white";

    //Main Game Loop

    function gameLoop(){
        
        ctx.fillRect(0,0,canvas.height,canvas.width);
        env.update();
        env.render();
        brd.update();
        brd.render();
        // pipe.update();
        // pipe.render();
        window.requestAnimationFrame(gameLoop);
    };


};

function generateRandomPipes(canvas,ctx,pipeStart){
    let lengthTop = Math.round(Math.random()*200+100);
    let lengthBottom = canvas.height- 180 - lengthTop;
    let returnVal = {top: '', bottom:''};
    returnVal.top = new Pipe(pipeStart,-5,lengthTop,3,ctx);
    returnVal.bottom = new Pipe(pipeStart,canvas.height+5-lengthBottom,lengthBottom,3,ctx);
};