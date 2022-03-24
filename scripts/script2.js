let moveis = [
    'pia',
    'mesa',
    'cadeira'
]

criandoCarta(moveis)

function criandoCarta(moveis) {
    
    let arrayMoveis = []

    for (const movel of moveis) {
        
        arrayMoveis.push(criarPar(movel))
    }

    console.log(arrayMoveis.map(par => par));
}

function criarPar(movel) {
    
    return [{
        id: criarID(movel),
        icon: movel
    },
    {
        id: criarID(movel),
        icon: movel
    }]
}

function criarID(movel) {
    return movel + parseInt(Math.random() * 1000)   
}