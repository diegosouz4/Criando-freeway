//Carregando as imagens
const imagemEstrada = new Image();
const imagemPlayer = new Image();
const imagemCarroVerde = new Image();
const imagemCarroPreto = new Image();
const imagemCarroAmarelo = new Image();
const imagemCarros = [imagemCarroVerde, imagemCarroPreto, imagemCarroAmarelo];
imagemEstrada.src = 'app/sprits/estrada.png';
imagemPlayer.src = 'app/sprits/ator.png';
imagemCarroVerde.src = 'app/sprits/carroVerde.png';
imagemCarroPreto.src = 'app/sprits/carroPreto.png';
imagemCarroAmarelo.src = 'app/sprits/carroAmarelo.png';

//Função para desenhar as imagens no canvas
function desenhaImagem(imagem,x,y,xFinal,yFinal) {
    brush.drawImage(imagem,x,y,xFinal,yFinal);
}

//Desenhar a estrada
function mostraEstrada() {
    desenhaImagem(imagemEstrada,0,0,600,400);
}