// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
<<<<<<< HEAD
    "1º Nível",
    ["2º nível", 42, true],
    [
      ["3º nível, 1º item", "Olá, mundo!"],
      ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
  ]
  

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
=======
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  []
>>>>>>> e3e2a82cce42009e95173a39645cf0d00513f892
]
console.table(matriz)

matriz.push("nova linha")
matriz[0].push(["nova coluna"])
console.table(matriz)
  ///

  // Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz

  for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}
///
