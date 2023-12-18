let resultado = "";
let i, n;

n = parseFloat(prompt("Qual número você deseja usar:"));

for (i = 1; i <= 20; i++) {
    resultado += n + " X " + i + " = " + (n * i) + "\n";
}

alert("Resultado da tabuada de " + n + ":\n\n" + resultado);
