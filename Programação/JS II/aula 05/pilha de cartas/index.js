// primeiro passo iniciar mostrando um menu com as opções adicionar carta, puxar carta e sair 
// ao escolher adicionar carta, pergunta o nome da carta e adiciona ao topo do baralho/ vetor . 
// ao escolher puxar uma carta, retira a carta do topo e mostra o nome da tela. 
// e o programa deve ser encerrado ao escolher a opção sair.

    var decisao=0;
    const pilha = [];


    do{
        menu();
    }while(decisao !== `3`)


function menu(){
    decisao = prompt(`
    -----menu-----
    1- adicionar carta
    2- puxar carta
    3- sair
    --------------
    `);

    switch(decisao) {

        case `1`: 
            adicionarCarta();
        break;
        

        case `2`: 
            puxarCarta();
        break;
        
        
        case `3`: 
            sair();
        break;

        default:
            alert(`opção inválida tente novamente.`);
        break;
    }

}

function adicionarCarta(){
    const nome = prompt(`digite o nome da carta:`);
    pilha.push(nome);
}

function puxarCarta(){
    if (pilha.length === 0){
        alert("não há cartas para puxar.");

    }else{
        const cartaPuxada = pilha.shift();
        alert(`a carta puxada foi: ${cartaPuxada}`)

    }   
}

function sair(){
    alert("saindo...")
}