function comprar() {
    let tipo = document.getElementById("tipo-ingresso");
    let qtd = parseInt(document.getElementById("qtd").value);

    if (tipo.value == "pista") {
        comprarPista(qtd);
    } else if (tipo.value == "superior") {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if (qtd <= 0 || isNaN(qtd)) {
        alert("Erro. Insira um valor inteiro positivo válido");
    } else {
        if (qtd > qtdPista) {
            alert("Quantidade indisponível para tipo pista.");
        } else {
            qtdPista = qtdPista - qtd;
            document.getElementById("qtd-pista").textContent = qtdPista;
            alert("Compra realizada com sucesso!");
        }
    }
}    

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (qtd <= 0 || isNaN(qtd)) {
        alert("Erro. Insira um valor inteiro positivo válido");
    } else {
        if (qtd > qtdSuperior) {
            alert("Quantidade indisponível para tipo superior.");
        } else {
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById("qtd-superior").textContent = qtdSuperior;
            alert("Compra realizada com sucesso!");
        }
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (qtd <= 0 || isNaN(qtd)) {
        alert("Erro. Insira um valor inteiro positivo válido");
    } else {
        if (qtd > qtdInferior) {
            alert("Quantidade indisponível para tipo inferior.");
        } else {
            qtdInferior = qtdInferior - qtd;
            document.getElementById("qtd-inferior").textContent = qtdInferior;
            alert("Compra realizada com sucesso!");
        }
    }
}

function conversao(valor) {
    return parseInt(valor);
}

let valor = "42";
let valorInteiro = conversao(valor);
console.log(valorInteiro);

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b == 0) {
        return "Erro. Divisão por zero";
    } else {
        return a / b;
    }
}

function calculadora(operacao, a, b) {
    if (operacao == "soma") {
        return soma(a, b);
    } else if (operacao == "subtracao") {
        return subtracao(a, b);
    } else if (operacao == "multiplicacao") {
        return multiplicacao(a, b);
    } else if (operacao == "divisao") {
        return divisao(a, b);
    } else {
        return "Operação inválida";
    }
}

let resultado = calculadora("divisao", 5, 2);
console.log(resultado);

function parOuImpar(numero) {
    let modulo = parseInt(numero % 2);
    if (modulo == 0) {
        return "O número é par";
    } else {
        return "O número é ímpar";
    }
}

let result = parOuImpar(10);
console.log(result);

function converterTemperatura(unidade, valor) {
    let symbolCelsius = "°C";
    let symbolFahrenheit = "°F";
    let temperaturaFahrenheit = (valor*9 + 160)/5;
    let temperaturaCelsius = (valor*5 - 160)/9;
    if (unidade == "Celsius") {
        return `A temperatura de ${valor} ${symbolCelsius} convertida em Fahrenheit é igual a ${temperaturaFahrenheit}°F.`;
    } else if (unidade == "Fahrenheit") {
        return `A temperatura de ${valor} ${symbolFahrenheit} convertida em Celsius é igual a ${temperaturaCelsius}°C.`;
    } else {
        return `Unidade inválida`;
    }
}

let temperatura = converterTemperatura("Fahrenheit", 50);
console.log(temperatura);