"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    console.log(numeros);
}
function teste() {
    if (10 > 5) {
        return '10 maior que 5';
    }
    else {
        return '5';
    }
}
const resultadoDeTeste = teste();
console.log(calculaArea(15, 10));
