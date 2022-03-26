const CARD = "card";
const FRONT = "card_front";
const BACK = "card_back";
const ICON = "icon";

const princesas = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8'
    // '9',
    // '10'
];

let cartas = null;

iniciar();

function iniciar() {
    cartas = criarCartas(princesas);
    embaralhar(cartas)

    initializaCards(cartas)
}

function initializaCards(cartas) {
    let gameBoard = document.getElementById("gameBoard")

    cartas.forEach(carta => {
        
        let cardElement = document.createElement('div')
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = carta.icon
        cardElement.id = carta.id

        cardElement.addEventListener("click", flipCard)
        
        creatCardContent(carta, cardElement)
        
        gameBoard.appendChild(cardElement)


    });
 }

function creatCardContent(carta, cardElement) {
    
    createCardFace(FRONT, carta, cardElement)
    createCardFace(BACK, carta, cardElement)

} 

function createCardFace(face, carta, element) {
    
    let cardElementFace = document.createElement("div");
    cardElementFace.classList.add(face)
    if (face === FRONT) {
        let iconElement = document.createElement("img")
        iconElement.classList.add(ICON)
        iconElement.src = "images/" + carta.icon + ".jpg";

        cardElementFace.appendChild(iconElement)
    } else {
        cardElementFace.innerHTML = "&lt/&gt"
    }

    element.appendChild(cardElementFace)

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
        id: criarID(princesa),
        fliped: false,
        icon: princesa
    }]
}

function criarID(princesa) {
    
    return princesa + parseInt(Math.random() * 1000);
}

function flipCard(){

    this.classList.add("flip")
}
