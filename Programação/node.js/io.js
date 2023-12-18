const process = require('process'); //importando a biblioteca process

console.log('digite a porra do seu texto:');

//função para capturar dados inseridos pelo usuario através do teclado 

process.stdin.on('data', (keyboard) => {
    process.stdout.write(`texto digitado: ${keyboard}`);
    process.exit(); //para sair da função
});