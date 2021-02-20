const canvas = document.querySelector('canvas');
const brush = canvas.getContext('2d');

//Funções genéricas
function criaRetangulo(cor,xInit,yInit,xFinal,yFinal){
    brush.fillStyle = cor;
    brush.fillRect(xInit,yInit,xFinal,yFinal);
}
function limpaCanvas(){
    brush.clearRect(0,0,600,400);
}

criaRetangulo('black',0,0,600,400);

//Função Draw
function atualizaCanvas() {
    limpaCanvas();
}

setInterval(atualizaCanvas, 20);