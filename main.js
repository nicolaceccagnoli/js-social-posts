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

    BONUS
    Formattare le date in formato italiano (gg/mm/aaaa)
    Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).     OK
    Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.         OK

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
            "image": null
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

// Creo un ciclo che scorra l'Array dei pulsanti con classe "js-like-button"
for (let i = 0; i < likeButtons.length; i++){

        // Creo l'evento 'click' sul bottone i-esimo
        likeButtons[i].addEventListener('click', function(){

            // Aggiungo la classe per cui il bottone i-esimo si colori di verde una volta clickato
            this.classList.toggle('like-button--liked');
            console.log('Cliccato Mi Piace')

            if ((this.classList.contains('like-button--liked')) && (!likedPosts.includes(posts[i].id))) {

                // Pusho nell'Array dei LikedPosts l'ID del post corrispondente a cui ho messo "Mi Piace"
                likedPosts.push(posts[i].id);
                
                document.getElementById(`like-counter-${posts[i].id}`).innerHTML = posts[i].likes + 1;;

            } else {

                likedPosts.pop(posts[i].id);

                document.getElementById(`like-counter-${posts[i].id}`).innerHTML = posts[i].likes;
                
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

    for(let i = 0; i < arr.length; i++) {

    let profileUser;

    if(arr[i].author.image == null) {

        profileUser = document.createElement('div');
        profileUser.classList.add('profile-user');
        let initials = arr[i].author.name[0] + arr[i].author.name[foundInitials(arr[i].author.name)];
        profileUser.append(initials);

    } else {

        profileUser = document.createElement('img');
        profileUser.classList.add('profile-pic');
        profileUser.src = arr[i].author.image;
        profileUser.alt = arr[i].author.name;
        
    }



    div.innerHTML += `
                    <div class="post">
                        <div class="post__header">
                            <div class="post-meta">                    
                                <div class="post-meta__icon">

                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${arr[i].author.name}</div>
                                    <div class="post-meta__time">${arr[i].created}.</div>
                                </div>                    
                            </div>
                        </div>
                        <div class="post__text">${arr[i].content}</div>
                        <div class="post__image">
                            <img src="${arr[i].media}" alt="">
                        </div>
                        <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button  js-like-button" href="#nogo" data-postid="${arr[i].id}">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-${arr[i].id}" class="js-likes-counter">${arr[i].likes}</b> persone
                                </div>
                            </div> 
                        </div>            
                    </div>
                    `

    const postMeta = document.querySelector('.post:last-child .post-meta__icon');
    postMeta.append(profileUser);

    }

}


// Creo una funzione che cicli delle stringe in cui do per scontato ci sia uno "spazio" (es. tra Nomi e Cognomi)
function foundInitials(str) {

    let position = 0;

        for (let j = 0; j < str.length; j++) {

        if (str[j] == " ") {
            position = j + 1;
            return(position);
        }
    }
}
