const somColidiu = new Audio('app/sons/colidiu.mp3');
const somPonto = new Audio('app/sons/pontos.wav');
const somTrilha = new Audio('app/sons/trilha.mp3');

//Function toca som
function tocaSom(som,loop){
    som.play();
    som.loop = loop;
}

//Tocando a trilha do jogo
tocaSom(somTrilha,true);