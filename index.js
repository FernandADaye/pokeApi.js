const charactersContainer = document.getElementById('characters')
const urlApi ='https://pokeapi.co/api/v2/pokemon/ditto'

function displayChara(characters) {
    characters.forEach(character => {
        const charactersDiv = document.createElement('div')

        charactersDiv.innerHTML= 
        `<h3>${character.name}</h3>
        `;
        charactersContainer.appendChild(charactersDiv)
    })
}

fetch(urlApi)
.then(response => response.json)
.then( data =>{
    const characters = data.results
console.log(characters);
displayChara(characters)
}
) 
.catch(error => console.log('Error', error))