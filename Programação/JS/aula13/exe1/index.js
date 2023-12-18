
// let nome = "Henrique"
// let x = 5 

// console.log("hello world", nome, x);


// window.alert(nome);
// nome= window.prompt("digite seu vulgo sacana:");
// window.alert(nome);
// window.confirm("tá certo pivete?");

let nome = prompt("Qual é seu primeiro nome?");
let sobrenome = prompt("Qual é seu segundo nome?");
let campoDeEstudo = prompt("Me diga aí seu campo de estudo:");
let dataNascimento = prompt("Insira sua data de nascimento (no formato ANO/MÊS/DIA:");

const dataAtual = new Date();  // Adicionando esta linha para obter a data atual

let idade = dataAtual.getFullYear() - parseInt(dataNascimento.split("/")[0]);

alert(`Seu nome e sobrenome são ${nome} ${sobrenome}, você estuda no ${campoDeEstudo} e tem ${idade} anos.`);
