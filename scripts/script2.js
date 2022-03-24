let moveis = [
    'pia',
    'mesa',
    'cadeira',
    'sofá',
    'cama'
]


// let a = null;
// // console.log(a.length);
// iniciar();

// function iniciar() {
    
//     a = moveis.map(este => este)
//     embaralhar(a)
//     console.log(a);
// }

// function embaralhar(a) {

//     currentIndex = a.length;
//     randomIndex = 0;

//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex)
//         currentIndex--;

//         [a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]] 
//     }
// }

// embaralhar(a);

// criandoCarta(moveis)

// function criandoCarta(moveis) {
    
//     let arrayMoveis = []

//     for (const movel of moveis) {
        
//         arrayMoveis.push(criarPar(movel))
//     }

//     console.log(arrayMoveis.map(par => par));
// }

// function criarPar(movel) {
    
//     return [{
//         id: criarID(movel),
//         icon: movel
//     },
//     {
//         id: criarID(movel),
//         icon: movel
//     }]
// }

// function criarID(movel) {
//     return movel + parseInt(Math.random() * 1000)   
// }