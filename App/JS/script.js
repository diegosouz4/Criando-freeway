const canvas = document.querySelector('canvas');
const brush = canvas.getContext('2d');

//Funções genéricas
function criaRetangulo(cor,xInit,yInit,xFinal,yFinal){
    brush.fillStyle = cor;
    brush.fillRect(xInit,yInit,xFinal,yFinal);
}

function criaStroke(x,y,w,h){
    brush.strokeStyle = 'red';
    brush.strokeRect(x,y,w,h);
}

function criaTexto(cor,align,baseLine,texto,x,y) {
    brush.fillStyle = cor;
    brush.font = 'bold 25px sans-serif';
    brush.textAlign = align;
    brush.textBaseline = baseLine;
    brush.fillText(texto,x,y);
}

function limpaCanvas(){
    brush.clearRect(0,0,600,400);
}

criaRetangulo('black',0,0,600,400);

//Função Draw
function atualizaCanvas() {
    limpaCanvas();
    mostraEstrada();
    mostraJogador();
    mostraCarros();
    moveCarro();
    colideCarro();
    voltaPosicaoCarro();
    mostraPontos();
    marcaPonto();
}

setInterval(atualizaCanvas, 20);