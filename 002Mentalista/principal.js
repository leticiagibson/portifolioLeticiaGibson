var numeroSecreto = Math.random() * 10;

function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");

    if (chute == numeroSecreto.toFixed(0)){
        resultado.innerHTML = "VOCÊ ACERTOU!!!"
    }
    else{
        resultado.innerHTML = "QUE PENA, VOCÊ ERROU :("
    }
}