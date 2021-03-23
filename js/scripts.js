let pokemonList = [
  { name: "Charmande", height: "0.6", types: ['fire']},
  { name: "Bulbasaur", height: "0.7", types: ['grass','poison']},
  { name: "Butterfree", height: "1.1", types: ['bug','flying']},
  { name: "Pikachu", height: "0.4", types: ['electric'] },
  { name: "Jigglypuff", height: "0.5", types: ['fairy','normal']
  }];


function myLoopFunction(pokemon) {
	if (pokemon.height >1){
  	console.log(pokemon.name + " is a big Pokemon");
    document.write("<p>" + pokemon.name + ' ' + " ( height:" + pokemon.height  +  " )" + " - \"Wow!\", that's a big Pokemon!"  + "</p>");
	}    
	else {  
  	document.write("<p>" + pokemon.name + ' ' + " ( height:" +  pokemon.height + " )" + "</p>");
  	}
}
pokemonList.forEach(myLoopFunction);