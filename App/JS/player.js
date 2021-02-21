//Variáveis Jogador
let xPlayer = 270;
let yPlayer = 370;
let movimento = 10;
const larguraPlayer = 30;
const alturaPlayer = larguraPlayer;

//Funções do Jogador
function mostraJogador() {
    desenhaImagem(imagemPlayer,xPlayer,yPlayer,larguraPlayer,alturaPlayer);
}

//Movimentação do Jogador
const right = 37;
const up = 38;
const left = 39;
const down = 40;

document.onkeydown = movimentaPlayer;

function movimentaPlayer(event){
    if(event.keyCode == right){
        xPlayer -= movimento;
    }
    if(event.keyCode == up){
        yPlayer -= movimento;
    }
    if(event.keyCode == left){
        xPlayer += movimento;
    }
    if(event.keyCode == down){
        yPlayer += movimento;
    }
    console.log(yPlayer);
}