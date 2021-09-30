function Converter() {
    var valorDolar = parseFloat(document.getElementById("valor").value);
    
    var valorReal = valorDolar * 5
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado da conversão é R$" + valorReal
    
    elementoValorConvertido.innerHTML = valorConvertido;
}