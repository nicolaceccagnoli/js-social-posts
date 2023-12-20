/*  

    Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.                                                        OK
        Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
            - id del post, numero progressivo da 1 a n
            - nome autore,
            - foto autore,
            - data in formato americano (mm-gg-yyyy),
            - testo del post,
            - immagine (non tutti i post devono avere una immagine),
            - numero di likes.

    Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.                     OK

    Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
        --->>>> Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

*/


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image="
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Dichiaro un secondo array che contiene l'id dei post ai quali ho messo "Mi Piace"
const likedPosts = [];

// Dichiaro una Variabile che selezioni dall'HTML il contenitore dei Post
const container = document.getElementById('container');
console.log('Questo è il contenitore dei post', container, typeof container);

// Stampo i post in pagina
printPosts(posts, container);

// Seleziono i tasto dei "Mi Piace" dall'HTML
const likeButtons = document.querySelectorAll('.js-like-button');

// Dichiaro una Variabile che prenda l'attributo "data-postid" dai bottoni del "Mi Piace"

// Creo un ciclo che scorra l'Array dei pulsanti con classe "js-like-button"
for (let i = 0; i < likeButtons.length; i++){

        // Creo l'evento 'click' sul bottone i-esimo
        likeButtons[i].addEventListener('click', function(){

            // Aggiungo la classe per cui il bottone i-esimo si colori di verde una volta clickato
            this.classList.toggle('like-button--liked');
            console.log('Cliccato Mi Piace')

            // const postId = this.getAttribute('data-postid')

            if (!likedPosts.includes(posts[i].id)) {
                // Pusho nell'Array dei LikedPosts l'ID del post corrispondente a cui ho messo "Mi Piace"
                likedPosts.push(posts[i].id);
            }

            console.log(likedPosts);

    });

};

/*

    FUNZIONI

*/

// Creo la funzione che stampi i post in pagina
function printPosts(arr, div) {
    // Creo un ciclo che vada a stampare nel Contenitore le Immagini e le loro Descrizioni
arr.forEach((element, i, array) =>{
    div.innerHTML += `
                    <div class="post">
                        <div class="post__header">
                            <div class="post-meta">                    
                                <div class="post-meta__icon">
                                    <img class="profile-pic" src="${posts[i].author.image}" alt="Phil Mangione">                    
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${posts[i].author.name}</div>
                                    <div class="post-meta__time">${posts[i].created}.</div>
                                </div>                    
                            </div>
                        </div>
                        <div class="post__text">${posts[i].content}</div>
                        <div class="post__image">
                            <img src="${posts[i].media}" alt="">
                        </div>
                        <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#nogo" data-postid="${posts[i].id}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
                                </div>
                            </div> 
                        </div>            
                    </div>
                    `
})

}

