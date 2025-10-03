let firstCard = '';
let secondCard = '';

const grid = document.querySelector('.grid');


const checkEndGame = () => {

    const disabledCards = document.querySelectorAll('.disabled-card');

    if(disabledCards.length == 20) {
        
        setTimeout(() => {
            alert('Parabéns, você conseguiu!');
        }, 500);
        
        
    }

}


const checkCards = () => {
    const firstPergunta = firstCard.getAttribute('data-pergunta');
    const secondPergunta = secondCard.getAttribute('data-pergunta');

    if (firstPergunta.slice(0, -1) == secondPergunta.slice(0, -1)) {

        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else{
        setTimeout(() => {
        
        firstCard.classList.remove('reveal-card');
        secondCard.classList.remove('reveal-card');

        firstCard = '';
        secondCard = '';
        }, 500);
    }

}

const perguntas = [
    'avatar1',
    'avatar2',
    'Brooklyn991',
    'Brooklyn992',
    'Elsa1',
    'Elsa2',
    'Gumball1',
    'Gumball2',
    'Invencivel1',
    'Invencivel2',
    'league1',
    'league2',
    'mario1',
    'mario2',
    'regularshow1',
    'regularshow2',
    'shera1',
    'shera2',
    'Wandinha1',
    'Wandinha2'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const revealCard = (event) => {
    const card = event.currentTarget;

    if (card.classList.contains('reveal-card')) return;

    if (firstCard === '') {
        card.classList.add('reveal-card');
        firstCard = card;
    } else if (secondCard === '') {
        card.classList.add('reveal-card');
        secondCard = card;

        checkCards();
    }
};

const createCard = (pergunta) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(imagens/${pergunta}.jpg)`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-pergunta', pergunta);
    
    return card;
}

const loadGame = () => {
    
    const shuffledArray = [...perguntas].sort(() => Math.random() - 0.5);

    shuffledArray.forEach((pergunta) => {

        const card = createCard(pergunta);
        grid.appendChild(card);

    });
}

loadGame();