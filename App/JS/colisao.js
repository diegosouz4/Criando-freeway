function verificaColisao(carroX,carroY) {
    return xPlayer + diametroPlayer > carroX && xPlayer < carroX + larguraCarro && yPlayer + diametroPlayer > carroY && yPlayer < carroY + alturaCarro;
}