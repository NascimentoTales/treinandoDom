
const princesas = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8'
]




let cartas = null;

iniciar();

function iniciar() {
    cartas = criarCartas(princesas);

    console.log(cartas);
    // embaralhar(cartas)
}

// function embaralhar(cartas) { 


//     let currentIndex = ca;
//     let randomIndex = 0;

//     while (currentIndex !== 0) {
        
//         randomIndex = Math.floor(Math.random() * currentIndex)
//         currentIndex--;

//         [cartas[randomIndex], cartas[currentIndex]] = [cartas[currentIndex], cartas[randomIndex]] 
//     }   
// }


// function embaralhar(cartas) { 


//     let currentIndex = ca;
//     let randomIndex = 0;

//     while (currentIndex !== 0) {
        
//         randomIndex = Math.floor(Math.random() * currentIndex)
//         currentIndex--;

//         [cartas[randomIndex], cartas[currentIndex]] = [cartas[currentIndex], cartas[randomIndex]] 
//     }   
// }


function criarCartas(princesas) {
    
    let princesasArray = []

    for (const princesa of princesas) {

        princesasArray.push(criandoParDeCartas(princesa)) //push introduz o par de cartas no array
    }

    princesasArray.flatMap(par => par);  //flatMap desmembra o par de um array 10 pares viram 20 cartas 

    console.log(princesasArray);

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