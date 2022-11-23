let pokemon_screen_container = document.getElementById('pokedex_screen_container')
let pokedex_info_container = document.getElementById('pokedex_info_container')
let pokemon_input = document.getElementById('pokemon_input')
let pokemon_info = document.getElementById('pokemon_info')



pokemon_info.onclick = () => {
    let buscar = pokemon_input.value
    let api_pokemon = `https://pokeapi.co/api/v2/pokemon/${buscar}`
    buscando(api_pokemon);
    console.log(seek);
    console.log(api_pokemon);
}




function pokemon_results(object, father_container) {
    let div_pokemon = document.createrElement('div')
    father_container.appendChild(div_pokemon);
    div_pokemon.innerHTML = `${object.name}` 
    }

function buscando(ruta) {

    fetch(ruta)
    .then(Response => Response.json)
    .then(data_pokemon => {
        let pokedex = data_pokemon;
        console.log(data_pokemon);
        pokemon_results(pokedex, pokemon_screen_container)
        print_img(pokedex, pokemon_screen_container)
        print_stats(pokedex, pokedex_info_container)
    })
}

function print_img(object, father_container){
    let div_pokemon = document.createElement('div')
    father_container.appendChild(div_pokemon)
    div_pokemon.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${object.sprites.front_default}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text">${object.name}</p>
        </div>
    </div>`

}

function print_stats(object, father_container){
    let div_pokemon = document.createElement('div')
    father_container.appendChild(div_pokemon)
    div_pokemon.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${object.sprites.front_default}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text"><strong>HP: ${object.stats[0]}</p>
        <p class="card-text"><strong>Ataque</strong>: ${object.stats[1].base_stat}</p>
        <p class="card-text"><strong>Defensa</strong>: ${object.stats[2].base_stat}</p>
        <p class="card-text"><strong>Ataque Especial</strong>: ${object.stats[3].base_stat}</p>
        <p class="card-text"><strong>Defensa Especial</strong>: ${object.stats[4].base_stat}</p>
        <p class="card-text"><strong>Velocidad</strong>: ${object.stats[5].base_stat}</p>

        </div>
    </div>`

}

