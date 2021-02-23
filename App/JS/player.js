//Variáveis Jogador
const posicaoInicial = [270,370]
let xPlayer = posicaoInicial[0];
let yPlayer = posicaoInicial[1];
let movimento = 10;
const diametroPlayer = 30;
let meusPontos = 0;

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
            tocaSom(somColidiu,false);
            if(meusPontos > 0){
                meusPontos -= 1;
            }
        }
    }
}

//Reinicia a posição do Jogador
function voltaPosicaoInicial() {
    xPlayer = posicaoInicial[0];
    yPlayer = posicaoInicial[1];
}

//Pontos
function mostraPontos(){
    criaTexto('#d90429','center','middle',meusPontos,canvas.width / 5,20);
}

function marcaPonto() {
    if(yPlayer < 15) {
        meusPontos++;
        voltaPosicaoInicial();
        tocaSom(somPonto,false);
    }
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
        if(podeDescer()) {
            yPlayer += movimento;
        }
    }
}

function podeDescer() {
    return yPlayer <  posicaoInicial[1];
}