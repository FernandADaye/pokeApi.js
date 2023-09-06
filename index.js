
let urlApi= (`https://pokeapi.co/api/v2/pokemon/`)
const charaterContainer=document.getElementById('characters')

// -----------------------------------------------------------
for (let i = 1; i <= 150; i++){
    fetch (urlApi + i)
    .then(res=> res.json())
    .then(data => seePokemon((data)))
}
function seePokemon(data) {
    const createDiv= document.createElement("div");
    createDiv.classList.add("pokemon")
    createDiv.innerHTML=`
    <div class="card" style="width: 14rem; margin-bottom: 20px;">
    <img src="${data.sprites.front_default}" class="card-img-top" alt="...">
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