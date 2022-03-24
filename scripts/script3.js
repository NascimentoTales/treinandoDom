let moveis = [
    'pia',
    'mesa',
    'cadeira',
    'sofá',
    'cama'
]

let a = null;

iniciar();

function iniciar() {
    
    a = moveis.map(este => este)
    embaralhar(a)

    console.log(a);
}

function embaralhar(a) {

    currentIndex = a.length;
    randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        [a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]] 
    }
}
embaralhar(a);

//Sorteio