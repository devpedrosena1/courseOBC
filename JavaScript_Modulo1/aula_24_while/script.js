let velocidade = 80

while (velocidade > 0) {
    alert("O carro está a " + velocidade + " km/h")
    velocidade -= 20
    alert("Diminuindo 20km/h")

    if (velocidade === 40) {
        break
    }
}

alert("O carro está em uma velocidade constante!")