//Variáveis Jogador
const posicaoInicial = [270,370]
let xPlayer = posicaoInicial[0];
let yPlayer = posicaoInicial[1];
let movimento = 10;
const diametroPlayer = 30;

//Funções do Jogador
function mostraJogador() {
    desenhaImagem(imagemPlayer,xPlayer,yPlayer,diametroPlayer,diametroPlayer);
}

//Movimentação do Jogador
const right = 37;
const up = 38;
const left = 39;
const down = 40;

//Verifica a Colisão
function colideCarro() {
    for(let i = 0; i < imagemCarros.length; i++ ) {
        if(verificaColisao(xCarros[i],yCarros[i])) {
            voltaPosicaoInicial();
        }
    }
}

//Reinicia a posição do Jogador
function voltaPosicaoInicial() {
    xPlayer = posicaoInicial[0];
    yPlayer = posicaoInicial[1];
}

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
    // console.log(yPlayer);
}