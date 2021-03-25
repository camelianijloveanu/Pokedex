// IIFE pokemonRepository
let pokemonRepository = (function (){
  // array of objects
let pokemonList = [
  { name: "Charmande", height: "0.6", types: ['fire']},
  { name: "Bulbasaur", height: "0.7", types: ['grass','poison']},
  { name: "Butterfree", height: "1.1", types: ['bug','flying']},
  { name: "Pikachu", height: "0.4", types: ['electric'] },
  { name: "Jigglypuff", height: "0.5", types: ['fairy','normal']
  }];

    // allows to add only objects with the add function
    function add(pokemon) { 
        if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
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
        showDetails(pokemon)});
      button.classList.add("button-class");
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
    }
    
  
      // displays pokemon name in the console when button is clicked
    function showDetails(pokemon){ 
      console.log(button.innerText);
      };  
    
    

     
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
})();

 
pokemonRepository.add({ name: "Meowth", height: 0.4, types:['normal'] });
  console.log(pokemonRepository.getAll()); 

pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);

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

