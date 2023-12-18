const moment = require('moment') //importando biblioteca "momment"

//criando função para mostrar meu nome
function sayMyName(name) {
    console.log(name);
    console.log(moment(). format('HH:mm')) //chamando a função moment para mostrar o horario atual
}

sayMyName('Henrique Albergaria'); //chamando a função