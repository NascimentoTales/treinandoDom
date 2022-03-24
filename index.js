const bairros = [
    'afonso Pena',
    'suiça',
    'costeira'
]

criarCarta(bairros);

function criarCarta(bairros) {
    
    let arrayBairros = [];

    for (const bairro of bairros) {
        
        arrayBairros.push(criarPar(bairro))
    }
    console.log(arrayBairros.flatMap(par => par));
}

function criarPar(bairro) {
    
    return [{
        id: criarID(bairro),
        fliped: false,
        icon: bairro
    },
    {
        id: criarID(bairro),
        fliped: false,
        icon: bairro  
    }];
}

function criarId(bairro) {
    
    return bairro + parseInt(Math.random() * 1000); 
}

