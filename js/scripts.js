// IIFE pokemonRepository
let pokemonRepository = (function () {
	// array of objects
let pokemonList = [
  { name: "Charmande", height: "0.6", types: ['fire']},
  { name: "Bulbasaur", height: "0.7", types: ['grass','poison']},
  { name: "Butterfree", height: "1.1", types: ['bug','flying']},
  { name: "Pikachu", height: "0.4", types: ['electric'] },
  { name: "Jigglypuff", height: "0.5", types: ['fairy','normal']
  }];

   return {
      add: function(pokemon) {
      	// only allows adding objects //
      	if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
    }
      },
      getAll: function() { //allows accesing the array from outside //
        return pokemonList;
      }
    };
})();

pokemonRepository.add({ name: "Meowth", height: 0.4, types:['normal'] });
  console.log(pokemonRepository.getAll()); 

pokemonRepository.getAll().forEach(function (pokemon){
    if (pokemon.height > 1) {
        document.write(pokemon.name + ' (height : ' + pokemon.height + ')' + ' - Wow, that\‘s big!');
    } else {
        document.write(pokemon.name +  ' (height : ' + pokemon.height + ')');
    }
        document.write('<br>', '<br>');
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
