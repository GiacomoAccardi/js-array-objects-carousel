/*

ISTRUZIONI:
1. creare struttura nel dom 
2. rimuovere elementi statici dalla struttura nel dom
3. inserirli tramite lo script (gli elementi saranno oggetto di un array).
    >>l'immagine attiva mostrerà un titolo e un testo 
4. creare una funzione che permetta la navigazione (attraverso dei bottoni) dei contenuti nel carosello
5. rendere la navigazione "infinita": dunque una volta raggiunta l'ultima immagine della lista si riparte dalla prima.
*/

// importo l'array
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//recupero tutti gli elementi utili dal dom
const active_item_container = document.getElementById('active-item-cont');
const items_list = document.getElementById('item-cont');
const btnNext = document.getElementById('next');
const btnBack = document.getElementById('back');

// definisco variabile per immagini attive
let itemActive = '';
//definisco una variabile che mi indica tramite indice l'immagine
let currentActive = 0;

//innietto l'immagine nel dom con un ciclo
images.forEach((elem) => {
    itemActive += `
        <div class="element-cont d-none">
            <img src="${elem.image}" alt="" id="active-img">
            <div class="label">
                <div id="title">${elem.title}</div>
                <div id="description">${elem.text}</div>
            </div>
        </div>`
});

document.querySelector('.active-item').innerHTML = itemActive;

//tolgo la classe d-none al primo elemento
let all = document.querySelectorAll('.element-cont');
all[currentActive].classList.remove('d-none');

// faccio funcionare i bottoni

btnNext.addEventListener('click', function(){
    all[currentActive].classList.add('d-none');

    if (currentActive == all.length -1 ){
        currentActive = 0;
    } else {
        currentActive++;
    }

    all[currentActive].classList.remove('d-none');

});

btnBack.addEventListener('click', function(){
    all[currentActive].classList.add('d-none');

    if (currentActive == 0 ){
        currentActive = all.length -1;
    } else {
        currentActive--;
    }

    all[currentActive].classList.remove('d-none');

});