
let urlApi= (`https://pokeapi.co/api/v2/pokemon/`)
const charaterContainer=document.getElementById('characters')
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

for (let i = 1; i <= 800; i++){
    fetch (urlApi + i)
    .then(res=> res.json())
    .then(data => seePokemon((data)))
    
}
function seePokemon(data) {
    const createDiv= document.createElement("div");
    createDiv.classList.add("pokemon")
    createDiv.innerHTML=`
    <div class="card" style="width: 14rem; margin-bottom: 20px;">
    <img src="${data.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> Nombre: ${data.name} </li>
            <li class="list-group-item"> ID: ${data.id }</li>
            <li class="list-group-item">A third item</li>
        </ul> 
    </div>
</div>
    `;
    charaterContainer.appendChild(createDiv)
}

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const pokemonCards = document.querySelectorAll('.pokemon');
    pokemonCards.forEach(card => {
        const pokemonName = card.querySelector('.list-group-item:nth-child(1)').textContent.toLowerCase();
        if (pokemonName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        searchButton.click();
    }
});
