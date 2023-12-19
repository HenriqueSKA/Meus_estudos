let fila = []
let opcao = ""

do {
    let pacientes = ""

    for (let i = 0; i<fila.length; i++){
        pacientes += (i+1) + "º - "+ fila[i] + "\n"
    }

    opcao=prompt(`
    pacientes: \n ${pacientes}
    
    `)
}while(opcao !==3)