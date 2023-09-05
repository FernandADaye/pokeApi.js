
function fetchpoke(id) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res=> res.json())
    .then(data => console.log(data))
}

function fetchpokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchpoke(i)
    }
}
fetchpokemons(4)


const charaterContainer=document.getElementById('characters')
function displayCarcters(characters) {
    characters.forEach(character => {
        const characterDiv= document.createElement('div')
        characterDiv.innerHTML=
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
    });
}
// queda crear una funcion, en la que se obtengan los datos de la api 
// ya que tengas la funcion la mandas a llamar dentro del html de js 
// al parecer si se pueden mandar a llamar las funciones desde ahi 
// ve a chat y dejaste un video (10;51) ahi explica como crear esa funcion de llamado 
// https://www.youtube.com/watch?v=59Jq_T7G4y4