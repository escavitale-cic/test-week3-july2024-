const URL_API = "https://jsonplaceholder.typicode.com/posts";

let posts = []; //Array di posts, conterrà tutti i post che verranno mostrati nella pagina
const container = document.getElementById('posts-container');   //Prendo il riferimento del container e me lo salvo in una var container

//-------------Function per index.html-------------
//Prelevo tutte le informazioni dal mio Json e le salvo all'interno di un array posts e poi le pubblico all'interno della pagina principale
async function fetchingDataFromApi(url) {
    try {
        //Richiesta fetch + conversione in JSON
        const responseFromApi = await fetch(url);
        const responseFromApiToJSON = await responseFromApi.json();

        setDataFromJsonToPostsArray(responseFromApiToJSON);

        setPostIntoCard();

    } catch (error) {
        console.log("Errore nel prelevare le informazioni dal JSON.", error);
    }
}

//Riempio il mio array posts con i dati provenienti dal file JSON
function setDataFromJsonToPostsArray(responseFromApiToJSON) {
    posts = responseFromApiToJSON.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body
    }));
}

//Per ogni post collezionato all'interno dell'array posts, assegno le informazioni nella posizione corretta della card
function setPostIntoCard() {

    posts.forEach(post => {
        //Creo il contenitore per la card
        const cardContainer = document.createElement('div');
        cardContainer.className = 'col-md-4 mb-4';    //gestisco larghezza e margine

        //Creo la card
        const card = document.createElement('div');
        card.className = 'card';
        card.addEventListener('click', () => {
            window.location.href = `postDetails.html?id=${post.id}`;    //Al click della card va alla pagina per i dettagli
        });
        
        //Creo le parti utili per la card e assegno il contenuto
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.textContent = post.title;

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = post.body;

        //Compongo la card
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        card.appendChild(cardBody);
        cardContainer.appendChild(card);

        //Aggiungo la card al container
        container.appendChild(cardContainer);
    });
}

//-------------Function per postDetails.html-------------
function showPostDetails() {
    //Mi serve per prelevare l'id della card selezionata
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)   //prelevo i dettagli del post inserendo l'id selezionato
            .then(responseFromApi => responseFromApi.json())
            .then(post => {
                setPostDetailsIntoPostDetailsPage(post);
            });
    }
}

//Setto le informazioni all'interno del container per i dettagli del post
function setPostDetailsIntoPostDetailsPage(post) {
    const detailContainer = document.getElementById('post-detail');
    detailContainer.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
}
//START
fetchingDataFromApi(URL_API);
showPostDetails();