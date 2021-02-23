//Variáveis dos carros
let yCarros = [45,100,155,215,270,325];
let xCarros = [600,600,600,600,600,600];
let velocidadeCarros = [2,4.3,3.2,3,4,2.4]

const alturaCarro = 30;
const larguraCarro = 50;

//Funções dos carros
function mostraCarros() {
    for(let i = 0; i < imagemCarros.length; i++){
        desenhaImagem(imagemCarros[i],xCarros[i],yCarros[i],larguraCarro,alturaCarro);
    }
}

function moveCarro() {
    for(let i = 0; i < imagemCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoCarro() {
    for(let i = 0; i < imagemCarros.length; i++){
        if(carroPassouDaTela(xCarros[i])){
            xCarros[i] = 600;
        };
    }
}

function carroPassouDaTela(carro){
    return carro < - 50;
}