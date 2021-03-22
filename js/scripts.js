let pokemonRepository = (function () {
  let pokemonList = [	
  	{
		name: "Charmander", 
		height: '0.6', 
		types: ['fire']
	},
	{
		name: "Bulbasaur", 
		height: '0.7', 
		types: ['grass','poison']
	},
	{
		name: "Butterfree", 
		height: '1.1', 
		types: ['bug','flying']
	},
	{
		name: "Pikachu", 
		height: '0.4', 
		types: ['electric']
	},
	{
		name: "Jigglypuff", 
		height: '0.5', 
		types: ['fairy','normal']
	}];

   function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };

})();


document.write(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu" });
document.write(pokemonRepository.add());

function myLoopFunction(getAll) {
  document.write("<p>" + pokemonList.name + ' ' + " (height:" +  pokemonList.height + ")" + "</p>");
}
getAll.forEach(myLoopFunction);