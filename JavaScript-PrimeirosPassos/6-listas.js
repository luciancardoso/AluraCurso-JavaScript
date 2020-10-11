console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;

const listaDeDistinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);

listaDeDistinos.push(`Curitiba`, `Manaus`) // adicionando um item a listem
console.log("Destinos Possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDistinos);

listaDeDistinos.splice(1,1);
console.log(listaDeDistinos);

console.log(listaDeDistinos[1], listaDeDistinos[0]);