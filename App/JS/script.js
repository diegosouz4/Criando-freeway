const canvas = document.querySelector('canvas');
const brush = canvas.getContext('2d');

//Variáveis Jogador
let xPlayer = 270;
let yPlayer = 370;
let movimento = 10;
const larguraPlayer = 30;
const alturaPlayer = larguraPlayer;

//Variáveis dos carros
let xCarroVerde = 650;
let yCarroVerde = 45;

//Funções do Player
function mostraJogador() {
    desenhaImagem(imagemPlayer,xPlayer,yPlayer,larguraPlayer,alturaPlayer);
}

//Funções dos carros
function mostraCarros() {
    desenhaImagem(imagemCarroVerde,xCarroVerde,yCarroVerde,50,30);
}

function moveCarro() {
    xCarroVerde -= 2;
    if(xCarroVerde < -50) {
        xCarroVerde = 650;
    }
}

//Carregando as imagens
const imagemEstrada = new Image();
const imagemPlayer = new Image();
const imagemCarroVerde = new Image();
imagemEstrada.src = 'app/sprits/estrada.png';
imagemPlayer.src = 'app/sprits/ator.png';
imagemCarroVerde.src = 'app/sprits/carro-1.png';

function desenhaImagem(imagem,x,y,xFinal,yFinal) {
    brush.drawImage(imagem,x,y,xFinal,yFinal);
}

//Funções de Jogabilidade
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

//Funções genéricas
function criaRetangulo(cor,xInit,yInit,xFinal,yFinal){
    brush.fillStyle = cor;
    brush.fillRect(xInit,yInit,xFinal,yFinal);
}

function limpaCanvas(){
    brush.clearRect(0,0,600,400);
}

function mostraEstrada() {
    desenhaImagem(imagemEstrada,0,0,600,400);
}

criaRetangulo('black',0,0,600,400);

//Função Draw
function atualizaCanvas() {
    limpaCanvas();
    mostraEstrada();
    mostraJogador();
    mostraCarros();
    moveCarro();
}

setInterval(atualizaCanvas, 20);