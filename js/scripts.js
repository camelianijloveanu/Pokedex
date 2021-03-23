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
      	if (typeof pokemon === 'object'){
        pokemonList.push(pokemon);
    }
      },
      getAll: function() {
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