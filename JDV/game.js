// iniciar as variaveis
let bord = ['','','','','','','','','',];
let playerTime = 0;
let gameOver = false;
let draw = false;
let symbols = ['x','o'];

let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
];

function handleMove(position){

    if(gameOver){
        return
    }

    if (bord[position] == '') {
    bord[position] = symbols[playerTime];

    gameOver = isWin();
    verifyBord();

    if (gameOver == false) {
        
        playerTime = (playerTime == 0) ? 1 : 0

  }
 }
 return gameOver;
}

function isWin(){

    for(var i = 0; i<winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (bord[pos1] == bord[pos2] && 
            bord[pos1] == bord[pos3] &&
            bord[pos1] != '' ){
            
                return true;
        }

    }
    return false;
}

function verifyBord(){
    let cont = 0;
    bord.forEach(item =>{
        if(item != '') cont++
    });
    if(cont == bord.length){
        draw = true;
        gameOver = true;
    }
}