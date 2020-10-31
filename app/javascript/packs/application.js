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
  const colors = {
    grass: '#63BB5B',
    fire: '#FF9C54',
    water: '#4E90D5',
    electric: '#F3D23B',
    ice: '#74CEC0',
    poison: '#AB6AC8',
    ground: '#D97746',
    rock: '#C7B78B',
    bug: '#90C12C',
    dragon: '#0A6DC4',
    normal: '#f9199A1',
    flying: '#8FA8DD',
    fighting: '#D80A49',
    psychic: '#F97176',
    ghost: '#5269AC',
    dark: '#5A5366',
    steel: '#5A8EA1',
    fairy: '#EC8FE6',
  };

  const main_types = Object.keys(colors);

  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  }


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
    const type = poke_types.find(mt => main_types.indexOf(mt) > -1);
    const second_type = poke_types.find(mt => main_types.indexOf(mt) > 1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const card_color = colors[type];

    pokemonEl.style.backgroundColor = card_color;

    const pokeInnerHTML = `
    <div class="img-container">
    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
    </div>
    <div class ="info">
      <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
      <h3 class="name">${name}</h3>
      <small class="type"><span>${type.charAt(0).toUpperCase() + type.slice(1)}</span></small>
    </div>
    `;

    pokemonEl.innerHTML = pokeInnerHTML;

    poke_container.appendChild(pokemonEl);
  }

});
