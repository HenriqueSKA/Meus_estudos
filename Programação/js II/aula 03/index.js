const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragon", "Legolas", "Gimit"];
console.log(arr);

// Adicionar elementos
// push
let tamanho = arr.push("Bromir");
console.log(arr);
console.log(tamanho);

// unshift
tamanho = arr.unshift("gaf");
console.log(arr);
console.log(tamanho);

// Remover elementos
// pop
const ultimoElementoPop = arr.pop();
console.log(arr);
console.log(ultimoElementoPop);

// shift
const primeiroElementoShift = arr.shift();
console.log(arr);
console.log(primeiroElementoShift);

// Pesquisar por um elemento
// includes
const inclui = arr.includes("Frodo o alterneiro");
console.log(inclui);

// indexOf
const indice = arr.indexOf("Frodo");
console.log(indice);

// Cortar e concatenar
// slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// Concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituir elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Frodo o trombadinha");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice];
    console.log(elemento + " se encontra na posição " + indice);
}
