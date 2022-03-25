const bairros = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g"
];

let cartas = null;

iniciar()

function iniciar(){
    cartas =  criarCartas(bairros);
    embaralhar(cartas)

    console.log(cartas);

}

function embaralhar(cartas){

    currentIndex = cartas.length;
    randomIndex = 0

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cartas[currentIndex], cartas[randomIndex]] = [cartas[randomIndex], cartas[currentIndex]]
    }
}

function criarCartas(bairros){
    
    let arrayBairros = [];


    //as duas abaixu funcionam iguais
    bairros.forEach(bairro => {
        arrayBairros.push(criarPar(bairro))
    });

    // for (const bairro of bairros) {
    //     arrayBairros.push(criarPar(bairro))
    // }


    return arrayBairros.flatMap(par => par);
};

function criarPar(bairro){

    return[{
        id: criarId(bairro),
        flipped: false,
        icon: bairro
    },
    {
        id: criarId(bairro),
        flipped: false,
        icon: bairro
    }]
}

function criarId(bairro){
    return bairro + parseInt(Math.random() * 100);  
}