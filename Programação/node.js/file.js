const fs = require('fs'); //biblioteca do node para manipular dados

/*
//cirando arquivo 'writeFile' = escreva arquivo
fs.writeFile('test.txt', 'Olá Mundo', err => { 
    console.log(err)
})
*/

/*
//diferente do 'writeFile' que sobrescreve o arquivo inteiro o 'appendFile' coloca o conteudo adicional após o anterior
fs.appendFile('test.txt', '\nOlá Mundo', err => { 
    console.log(err)
})
*/


/*
//usado para renomear arquivos
fs.rename ('test.txt', 'test2.txt', err => console.log(err));
*/

/*
//usado para apagar arquivos
fs.unlink('test.txt', err => console.log(err));
*/

//usado para indicar em qual pasta o arquivo está
console.log(__dirname);

//link para mais do assunto https://nodejs.org/api/fs.html