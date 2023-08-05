console.log("Aula JS");

const x = 5;

const y = 6;

const total = x + y;

console.log(total);

const meuNumero = 3; 

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica);

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero /
numeroPontoFlutuante;

console.log(novaOperacao)

// NaN -> Not a Number 

const Nyps = "Neia";
console.log(Nyps * primeiroNumero);

// string

const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';
const senha = "senhaSuperSegura456";
const StringDeNumeros = "34567";

const citacao = 'Neia disse: "Um lindo céu azul"';
const nome = "Meu nome é ";
const meuNome = "Neia"

console.log(citacao);

console.log(nome + meuNome)

// concatenação (+)

// template string ou literal

// var

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)

//var area;

let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) /2;
}

area = altura * comprimento;

console.log(area)

// Boolean

const usuarioLogado = true
const contaPaga = false

// truthy ou falsy
// 0=> false
// 1 => true

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

// Null
// underfined

let varNull = null
let minhaVar;

console.log(minhaVar)
console.log(varNull)

//let numero = 3;
//let texto = "Neia"; 

console.log(typeof numero)
console.log(typeof texto)

console.log(typeof minhaVar)
console.log(typeof varNull)

// == (Comparação implícita)
// === (compara valor e tipo)

const numero = 5;
const texto = "5";
console.log(numero == texto)

// tyeof

console.log(typeof numero)
console.log(typeof texto)

