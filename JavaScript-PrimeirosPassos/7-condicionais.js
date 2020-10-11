console.log(`Trabalhando com Condicionais`);
const listaDeDistinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

listaDeDistinos.push(`Curitiba`, `Manaus`) // adicionando um item a listem
console.log("Destinos Possíveis");
console.log(listaDeDistinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de Idade");
//     listaDeDistinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDistinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem !");
    listaDeDistinos.splice(2, 1); // removendo item
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >=18 && temPassagemComprada){
    console.log("Boa Viagem !");
}else{
    console.log("Você não pode Embarcar!!");
}

console.log(listaDeDistinos);
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);