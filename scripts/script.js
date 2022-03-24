
const princesas = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
]

let cartas = null;

iniciar();

function iniciar() {
    cartas = criarCartas(princesas);
    embaralhar(cartas)

    console.log(cartas);
}

function embaralhar(cartas) { //Embaralhando as cartas

    let currentIndex = cartas.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        [cartas[randomIndex], cartas[currentIndex]] = [cartas[currentIndex], cartas[randomIndex]] 
    }   
}

criarCartas(princesas);

function criarCartas(princesas) {
    
    let princesasArray = []

    for (const princesa of princesas) {

        princesasArray.push(criandoParDeCartas(princesa)) //push introduz o par de cartas no array
    }

    return princesasArray.flatMap(par => par);   //flatMap desmembra o par de um array 10 pares viram 20 cartas 
    
    // console.log(princesasArray.flatMap(par => par));
}

function criandoParDeCartas(princesa) {
    
    return [{
        id: criarID(princesa),
        fliped: false,
        icon: princesa
    },
    {
        d: criarID(princesa),
        fliped: false,
        icon: princesa
    }]
}

function criarID(princesa) {
    
    return princesa + parseInt(Math.random() * 1000);
}

