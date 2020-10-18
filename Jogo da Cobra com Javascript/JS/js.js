let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] = {
    X: 8 * box ,
    Y: 8 * box 

}
let direction = "right";

function criarBG(){

    context.fillStyle = "lightgreen";
    context.fillRect( 0, 0, 16  *  box , 16  *  box );
}

function criarcobra(){
    for(i=0; i < snake.length; i++){
        context.fillStyle ="green";
        context.fillRect(snake[i].X, snake [i].Y, box, box);
    }

 }

 let direction = "right";
 let food = {
     X:Math.floor(Math.random() * 15 + 1 ) * box,
     Y: Math.floor(Math.random() * 15 + 1 ) * box
 }

 function drowfood(){
     context.fillStyle = "red";
     context.fillRect(food.x,food.y, box, box);

 }

 document.addEventListener('keydown', update);
  
 function update (event) {
       if(event.keyCode == 37 && direction !="right") direction = "left";
       if(event.keyCode == 38 && direction !="down")  direction = "up";
       if(event.keyCode == 39 && direction !="left")  direction = "right";
       if(event.keyCode == 40 && direction !="up")  direction = "down";


 }

 function iniciarjogo(){
    if(snake[0].x > 15 * box && direction== "right") snake[0]. x = 0 ;
    if(snake[0].x < 0  && direction == "left") snake[0]. x = 16 * box;
    if(snake[0].Y > 15 * box  && direction == "down") snake[0]. y = 0;
    if(snake[0].Y < 0  && direction == "up") snake[0]. y = 16 * box ;

    for(i=1; i < snake.length; i++){

        if(snake[0].X == snake[i].X && snake [0].y == snake[i].y){
           
            clearInterval(jogo);
            alert('game over :(');
            

        }
    }

    criarBG();
    criarcobra();
    drowfood();

    let snakeX = [0].X;
    let snakeY = [0].Y;
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up")  snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY !=food.Y){
        snake.pop();

    }
    else {food.x = Math.floor(Math.random() * 15 + 1 ) * box;
         food.Y = Math.floor(Math.random() * 15 + 1 ) * box ;
    
    }
    let newHead = {

        X: snakeX,
        Y: snakeY,
    }
     
    snake.unshift(newHead);
 }

  
 let jogo = setInterval(iniciarjogo, 100); 

 
