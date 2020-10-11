console.log(`Trabalhando com Condicionais`);
const listaDeDistinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

listaDeDistinos.push(`Curitiba`, `Manaus`) // adicionando um item a listem
console.log("\n Destinos Possíveis:");
console.log(listaDeDistinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    
    if(listaDeDistinos[contador] == destino){
        destinoExiste = true;
    }
    contador +=1;
}

console.log("Destino Existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro");
}

for(let cont = 0; contador < 3; cont++){ 
    if(listaDeDistinos[contador] == destino){
        destinoExiste = true;
    }
}