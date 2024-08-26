// TO reveal the messages
const characterButtons = document.querySelectorAll('.character');
characterButtons.forEach(Element => Element.addEventListener('click', showMessage));

function showMessage(event) {
    const index = event.target.getAttribute('data-index');
    const message = document.querySelector(`.m${index}`);

    const messageCopy = message.textContent;

    message.classList.toggle('collapsed');
    let currentIndex = 0;
    if (!message.classList.contains('collapsed')) {
        message.textContent = '';
        typeOutText();
        event.target.scrollIntoView({ behavior: "smooth" })
    }
    function typeOutText() {
        if (currentIndex < messageCopy.length) {
            message.textContent += messageCopy[currentIndex];
            currentIndex++;
            setTimeout(typeOutText, 20);
        }
    }
}

//Logic to mew the cat
const catMessages = ['Meoww Meoww', '*Purrs*', '*Claws at you*', 'We think it will last', 'Thank you Pahvani', 'That felt nice', 'I loved that', 'Pls do some more', 'Owie', '*sleeps*', 'Scratch my ears pls', 'Myau', 'Mewww', '*stretches*', 'miyauuu']
const cats = document.querySelectorAll('.cat');
cats.forEach((cat, index) => cat.addEventListener('click', () => catSays()));

function catSays() {
    const message = catMessages[Math.floor(Math.random() * catMessages.length)]
    writeToModal(message, 900);
}

function writeToModal(message, time) {
    const modal = document.querySelector('.modal');
    modal.textContent = message;
    modal.classList.remove('hidden');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, time);
}


//Logic for the metro
document.querySelector('.metro').addEventListener('click', metroSays);
const metroMessages = ["you look cute together", "Next station is Nehru Place, get off", "Bachon ka hath pakad ke rakhe (hold his hand)", "mind the gap(never let him go)", "transistor or a bag could be a bomb(u = bomb)", "Do not sit on the floor of the train(dan = floor)"]
function metroSays() {
    const message = metroMessages[Math.floor(Math.random() * metroMessages.length)];
    writeToModal(message, 1500);
}




// To rotate some stuff
function rotateElements(name, factor) {
    window.addEventListener("scroll", function () {
        const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        
        const rotationDegrees = factor * scrollPercentage;
        const rotatingImage = document.querySelector(`${name}`);

        if (isElementInViewport(rotatingImage)) {
        rotatingImage.style.transform = `rotate(${rotationDegrees}deg)`;
        }
    });
}


// Rotating hero flowers
rotateElements('.flower.f1', 1800);
rotateElements('.flower.f2', -5800);
rotateElements('.flower.f3', 1900);



// Rotating flowers
rotateElements('.flower1', 2800);
rotateElements('.flower2', -2800);
rotateElements('.flower3', 2900);


rotateElements('.pigeon',10000)

//Rotating fruits
rotateElements('.fruits:nth-child(1)', 1500);
rotateElements('.fruits:only-child', 1000);
rotateElements('.fruits:nth-child(2)', -1800);

document.querySelectorAll('.fruits').forEach(fruit => fruit.addEventListener('click', () => writeToModal('i donno anythign', 900)));
document.querySelector('.dog').addEventListener('click', () => writeToModal('wooof woof i donno anything', 800))
document.querySelector('.flowers').addEventListener('click', () => writeToModal('You guys cute together hehe', 800))
document.querySelector('.pigeon').addEventListener('click', () => writeToModal('*shits on you*', 800))
document.querySelector('.birds-park').addEventListener('click', () => writeToModal('*uaa uaah uaah uaaa*', 800))



// Logic to detect if element is in viewport
const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
};


const music = document.querySelector('#im-yours')

// Final Act - the answer

// part 1 - music
const answer = document.querySelector('#answer');
answer.addEventListener('click', () => {
    music.currentTime = 50;
    music.play();
    setTimeout(() => {
        fadeElement(question);
        setTimeout(() => {
            document.querySelector('body').classList.add('no-scroll');
            setTimeout(() => {
                answerDiv.innerHTML = ''
                showAnswer();
                setTimeout(() => {
                    removeFlowers();
                    setTimeout(() => {
                        removeBirds();
                        setTimeout(() => {
                            fadeTrees();
                            updatePostAnswer();
                            setTimeout(() => {
                                removePreAnswer()
                                fadeBenches();
                                setTimeout(() => {
                                    fadeSun();
                                    setTimeout(() => {
                                        removePostAnswer();
                                    }, 7400);
                                }, 6400);
                            }, 5400);
                        }, 4700);
                    }, 3700);
                }, 2700);
            }, 1700);;
        }, 1500);
    }, 400);

})

//part 2 - elements
const hero = document.querySelector('#hero');
const question = document.querySelector('header.arrow');
const answerDiv = document.querySelector('.answer');

function removePreAnswer() {
    const preAnswer = document.querySelector('.pre-answer');
    fadeElement(preAnswer);
}

function removePostAnswer() {
    const postAnswer = document.querySelector('.post-answer');
    fadeElement(postAnswer);
}

function removePreText() {

};


function fadeSun() {
    const sun = document.querySelector('.sun');
    fadeElement(sun);

}


function fadeTrees() {
    const trees = document.querySelector('img.trees');
    trees.style.filter = "brightness(0.2)"
    setTimeout(() => {
        fadeElement(trees);
    }, 600);
}

function fadeBenches() {
    const bench = document.querySelector('img.bench');
    fadeElement(bench);
    document.querySelector('body').style.background = "#ffffff";
}

function removeFlowers() {
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(flower => fadeElement(flower));
};

function removeBirds() {
    fadeElement(document.querySelector('.birds'));
}


function fadeElement(element) {
    setTimeout(() => {
        element.classList.add('fade-away');
    }, 300);
}

function updatePostAnswer() {
    const postAnswer = document.querySelector('.post-answer');
    postAnswer.classList.add('fade-away');
    setTimeout(() => {
        postAnswer.textContent = "Even when there is nothing else left";
        setTimeout(() => {
            postAnswer.classList.remove('fade-away');
        }, 6000);
    }, 6000);

}

function showAnswer() {
    const preAnswer = document.createElement('p');
    preAnswer.classList.add('pre-answer');
    preAnswer.textContent = "I, Arsh Babar,promise that"

    const answer = document.createElement('p');
    answer.classList.add('final-answer');
    answer.textContent = 'It will last';


    const postAnswer = document.createElement('p');
    postAnswer.classList.add('post-answer');
    postAnswer.textContent = "Even after the things that have witnessed our love are long gone";

    answerDiv.appendChild(preAnswer);
    answerDiv.appendChild(answer);
    answerDiv.appendChild(postAnswer);


    setTimeout(() => {
        document.querySelector('.pre-answer').classList.add('fade-in');
    }, 300);
    setTimeout(() => {
        document.querySelector('.final-answer').classList.add('fade-in');
    }, 1800);
    setTimeout(() => {
        document.querySelector('.post-answer').classList.add('fade-in');
    }, 3600);
}

