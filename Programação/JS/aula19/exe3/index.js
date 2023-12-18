let nomeVeiculo1 = prompt("Digite o nome do primeiro veículo:");
let velocidadeVeiculo1 = parseFloat(prompt(`Digite a velocidade do ${nomeVeiculo1}:`));
let nomeVeiculo2 = prompt("Digite o nome do segundo veículo:");
let velocidadeVeiculo2 = parseFloat(prompt(`Digite a velocidade do ${nomeVeiculo2}:`));

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
  alert(`O ${nomeVeiculo1} está a ${velocidadeVeiculo1} km/h e está mais rápido que o ${nomeVeiculo2}.`);
} else if (velocidadeVeiculo2 > velocidadeVeiculo1) {
  alert(`O ${nomeVeiculo2} está a ${velocidadeVeiculo2} km/h e está mais rápido que o ${nomeVeiculo1}.`);
} else if (velocidadeVeiculo1 === velocidadeVeiculo2) {
  alert('Os dois veículos estão empatados e seguem na mesma velocidade.');
} else {
  alert("Algo deu errado, verifique se os dados foram inseridos corretamente.");
}
