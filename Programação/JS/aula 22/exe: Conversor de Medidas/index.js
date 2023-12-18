let metros = parseFloat(prompt("Escreva um valor em metros que você quer converter para outra medida:"));

let decisao = parseInt(prompt(`Escolha para qual medida você deseja converter:
1- Milímetro(mm)
2- Centímetro(cm)
3- Decímetro(dm)
4- Decâmetro(dam)
5- Hectômetro(hm)
6- Quilômetro(km)
`));

function metrosParaMilimetros(metros) {
  return metros * 1000;
}

function metrosParaCentimetros(metros) {
  return metros * 100;
}

function metrosParaDecimetros(metros) {
  return metros * 10;
}

function metrosParaDecametros(metros) {
  return metros * 0.1;
}

function metrosParaHectometros(metros) {
  return metros * 0.01;
}

function metrosParaQuilometros(metros) {
  return metros * 0.001;
}

let resultado;

switch (decisao) {
  case 1:
    resultado = metrosParaMilimetros(metros);
    break;
  case 2:
    resultado = metrosParaCentimetros(metros);
    break;
  case 3:
    resultado = metrosParaDecimetros(metros);
    break;
  case 4:
    resultado = metrosParaDecametros(metros);
    break;
  case 5:
    resultado = metrosParaHectometros(metros);
    break;
  case 6:
    resultado = metrosParaQuilometros(metros);
    break;
  default:
    alert('Escolha inválida.');
}

alert(resultado);