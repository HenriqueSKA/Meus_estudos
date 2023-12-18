let ValorEmConta, ValorRemovido,ValorAdicionado, decisao;


ValorEmConta= parseFloat(prompt("Quantos R$ voce tem na conta:"));

do{
decisao = prompt(`Voce tem R$${ValorEmConta} o que deseja fazer?
1-Adicionar uma quantia de dinheiro
2-Remover uma quantia de dinheiro
3-Encerrar sessão`);

switch(decisao){
    
    case "1":
        ValorAdicionado = 0;
        ValorAdicionado = parseFloat(prompt(`quanto deseja adicionar a conta?`));
        ValorEmConta +=ValorAdicionado;
        alert(`Foi adicionado a sua conta R$${ValorAdicionado}`);

    break;
    case "2":
        ValorRemovido = 0;
        ValorRemovido = parseFloat(prompt(`quanto deseja remover da conta?`));
        ValorEmConta -= ValorRemovido;
        alert(`Foi removido a sua conta R$${ValorRemovido}`);
        
    break;
    case "3":
        alert("Encerrando sessão...");
    break;

    default:
        alert("Opção inválida. Escolha novamente.");
}
}while(decisao !== "3")