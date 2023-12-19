// const nomeTurista = prompt("Digite o seu nome: ");

// let cidades = [];

// let i;
// let decisao = prompt("você já visitou alguma cidade?");

// while(decisao=="sim"){

    
//     for(i=0;i<10;i++){
//         cidades[i] = prompt("qual");
//         decisao = prompt("mais alguma?");
//     }
// }

// console.log(cidades[0]);

const nomeTurista = prompt("Digite o seu nome: ");
const cidades = [];

function adicionarCidade() {
  const cidade = prompt("Qual cidade você visitou?");
  cidades.push(cidade);
}

function coletarCidades() {
  let decisao = "sim";
  while (decisao.toLowerCase() === "sim") {
    adicionarCidade();
    decisao = prompt("Mais alguma cidade que você visitou? (sim/não)");
  }
}

coletarCidades();

console.log(`Cidades visitadas por ${nomeTurista}:`);
cidades.forEach((cidade, index) => {
  console.log(`${index + 1}. ${cidade}`);
});
