const charactersContainer = document.getElementById('characters')
const urlApi ='https://pokeapi.co/api/v2/pokemon/'

function displayChara(characters) {
    characters.forEach(character => {
        const charactersDiv = document.createElement('div')

        charactersDiv.innerHTML= 
        `<div class="card" style="width: 18rem;">
        <img src=" ${character.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${character.name}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        </ul>
`;
        charactersContainer.appendChild(charactersDiv)
    })
}

fetch(urlApi)
.then(response => response.json())
.then( data =>{
    const characters = data.results
displayChara(characters)
}
) 
.catch(error => console.log('Error ', error))

