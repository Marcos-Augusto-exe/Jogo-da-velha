document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    

    squares.forEach((squares) => {
        squares.addEventListener('click', handleClick);
    })

});

let player1 = document.getElementById("nomePlayerUm");
let player2 = document.getElementById("nomePlayerDois");

let nome = document.getElementById("nome");
let btn = document.getElementById("btn");
let placar = document.getElementById("placar");
let placar2 = document.getElementById("placar2");
let cont = 1;
let cont2 = 1;

btn.addEventListener('click', enviarNomes);


function enviarNomes() {
   
    if (nome.value != 0 && player1.innerText == "Player 1") {

        let string = nome.value; 
        player1.innerHTML = string[0].toUpperCase() +  
        string.slice(1); 
        nome.value = "";
        nome.placeholder = "Player 2"
    } else{
        let string = nome.value; 
        player2.innerHTML = string[0].toUpperCase() +  
        string.slice(1); 
        nome.style.display = "none"
        btn.style.display = "none"
    }

}




function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            if (draw) {
                document.getElementById("display").innerHTML = "O jogo empatou !";
                document.querySelectorAll(".p").forEach(p => p.style.display = "none");
                abrirJanela()

                return
            }
            playerTime = `${"Player " + (playerTime + 1)}`;
            
            if(playerTime == "Player 1" && player1.innerText > "" ){
                
                playerTime = player1.innerHTML
               
            }
            
            if(playerTime == "Player 2" && player2.innerText > "" ){
                    playerTime = player2.innerHTML
                }
            

            let display = document.getElementById("display").innerHTML = playerTime;
           console.log(player1);
           console.log(player2);
            if (display == player1.innerText) {
                  placar.innerText = cont ++
                  
               }
               
               if (display == player2.innerText) {
                placar2.innerText = cont2 ++
                
             }
            
           
            abrirJanela()

        }, 10);
    }
    updateSquare(position);
}



function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = bord[position];
    square.innerHTML = `<div class= '${symbol}'></div>`
}

function restart() {
    bord = ['', '', '', '', '', '', '', '', '',];
    playerTime = 0;
    gameOver = false;
    draw = false;
    document.querySelectorAll(".square").forEach(square => square.innerHTML = "");
};


function abrirJanela() {
    document.getElementById("janelaVencedor").style.display = "block";
    document.getElementById("fundo").style.display = "block";
    setTimeout(() => {
        document.getElementById("janelaVencedor").style.display = "none";
        document.getElementById("fundo").style.display = "none";

        document.querySelectorAll(".p").forEach(p => p.style.display = "block");
        restart()
    }, 1600);

}




