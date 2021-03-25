// IIFE pokemonRepository
let pokemonRepository = (function (){
  // array of objects
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // allows to add only objects with the add function
    function add(pokemon) { 
        if (
        typeof pokemon === 'object' &&
        'name' in pokemon &&
        'detailsUrl' in pokemon
        ){
        pokemonList.push(pokemon);
      }else {
        console.log("pokemon not found")
      }
    }

      // allows access to the pokemonList from outside the IIFE
    function getAll() { 
        return pokemonList;
      }
      // displays list as ul and something happens when you press each button
    function addListItem(pokemon) { 
      let pokemonList = document.querySelector(".pokemon-list");
      let listPokemon = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.addEventListener("click", function () {
        showDetails(pokemon); });
      button.classList.add("button-class");
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
    }
    
    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
     }).catch(function (e) {
        console.error (e);
      })
    }

    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  
      // displays pokemon name in the console when button is clicked
    function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  } 
    
    

     
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
})();


pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});



let pokemons = ["Charmande", "Bulbasaur", "Butterfree", "Pikachu", "Jigglypuff", "Meowth"]
/**
 * Filter array items based on search criteria 
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(pokemons, 'ch'))  // ['Pikachu', 'Charmande']
console.log(filterItems(pokemons, 'bu'))  // ['Butterfree', 'Bulbasaur']
console.log(filterItems(pokemons, 'ji'))  // ['Jigglypuff']
console.log(filterItems(pokemons, 'me'))  // ['Meowth']

