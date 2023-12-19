function inverterPalavra(palavraInicial) { 
    return palavraInicial.split('').reverse().join('');

}

let palavraInicial= ""; 
let palavraInvertida= "";

palavraInicial = prompt("Digite a palavra que deseja verificar ser um palindromo:");


palavraInvertida = inverterPalavra(palavraInicial);

if (palavraInicial===palavraInvertida) {
    
    
alert("a palavra " + palavraInvertida + " é um palindromo pois a escrita permance a mesma de trás para frente");

} else {
    
alert("A palavra " + palavraInicial + " não é um palindromo pois não tem a mesma escrita de trás para frente, veja: " + palavraInvertida   );    
}
