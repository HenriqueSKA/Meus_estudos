//cirando o personagem atacante e colhendo dados do ataque
const personeagemA = prompt("digite o nome do persongame Atacante:");
let valorAtaque = parseFloat(prompt(`Digite o dano desse ataque:`));

//cirando o personagem defensor e colhendo dados da defesa
const personeagemB = prompt("digite o nome do persongame Defensor:");
let valorVida = parseFloat(prompt(`Digite a quantidade de vida:`));
let valorEscudo = 0;

//colhendo dados do escudo 
let decisaoEscudo= prompt("o personagem Defensor possui escudo? (1=sim 2=não)");
if(decisaoEscudo == 1){
    valorEscudo = parseFloat(prompt(`Digite o valor do escudo:`));

}else if(decisaoEscudo == 2){
    valorEscudo = 0;
}else{
    alert('algo deu errado ao digitar  o valor do escudo');
}
//diminuindo do valor do ataque o valor da defesa
valorAtaque -= valorEscudo;

//diminuindo o valor da vida o valor de ataque
valorVida -= valorAtaque;

// O ataque desferido pelo personagem a foi de 60
// a vida do personagem b era de 40 e seu escudo era 50

// após o ataque a vida do b ficou 40
alert(`O ataque desferido pelo personagem ${personeagemA} foi de ${valorAtaque}
O escudo do personagem ${personeagemB} era ${valorEscudo}

após o ataque a vida do ${personeagemB} ficou ${valorVida}.`);

