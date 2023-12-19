// primeiro passo: mostrar o menu de opções e a lista de pacientes
// opções do menu serão inserir novo paciente, atender paciente e sair


const fila = [];
var i = 0;
var decisao;

do{
 menu();
}while(decisao !== `3`);


function menu() {
    decisao = prompt(`
    ----menu----
    1 - Atender paciente
    2 - Adicionar paciente
    3 - Sair
    ----lista de pacientes----
    ${listaPacientes()}
    `);


    switch (decisao){
        case `1`:
            atenderPaciente();
            break;
        
        case `2`:
            adicionarPaciente();
            break;
        
        case `3`:
            alert("Saindo...");

            break;
            default: alert("opção inválida. tente novamente.");
            break;
    }
}

function listaPacientes() {
    let lista= "\n"
    for (let i = 0; i < fila.length; i++){
        lista += `${i+1}. ${fila[i]}\n `;
    }
    return lista;
}

function atenderPaciente(){
    if (fila.length === 0){
        alert("não há pacientes para atender.");

    }else{
        const pacienteAtendido = fila.shift();
        alert(`paciente atendido: ${pacienteAtendido}`)

    }   

}

function adicionarPaciente() {
    const nome = prompt(`digite o nome do novo paciente:`);
    fila.push(nome);

    alert(` ${nome} foi adicionado a fila.`);
}