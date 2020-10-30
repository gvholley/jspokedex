// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  const poke_container =
  document.getElementById('poke_container');
  const dex_id = 150;


  const fetchPokemon = async () => {
    for (let i = 1; i<= dex_id; i++) {
      await getPokemon(i);
    }
  };

  const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);

  };

  fetchPokemon();

  function createPokemonCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const poke_types = pokemon.types.map(el => el.type.name);

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const pokeInnerHTML = `
    <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
    </div>
    <div class ="info">
      <span class="number">${pokemon.id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl);
  }

});
