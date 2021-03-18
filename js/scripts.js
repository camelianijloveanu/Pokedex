let pokemonList = [
	{
		name: "Charmander", 
		height: "0.6", 
		types: ['fire']
	},
	{
		name: "Bulbasaur", 
		height: "0.7", 
		types: ['grass','poison']
	},
	{
		name: "Butterfree", 
		height: "1.1", 
		types: ['bug','flying']
	},
	{
		name: "Pikachu", 
		height: "0.4", 
		types: ['electric']
	},
	{
		name: "Jigglypuff", 
		height: "0.5", 
		types: ['fairy','normal']
	}
];

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <1.2 && pokemonList[i].height >1){
  	console.log(pokemonList[i].name + " is a big Pokemon");
    document.write("<p>" + pokemonList[i].name + ' ' + " ( height:" + pokemonList[i].height  +  " )" + " - \"Wow!\", that's a big Pokemon!"  + "</p>");
  }else if (pokemonList[i].height <0.5){
  	console.log(pokemonList[i].name + " is an average Pokemon");
    document.write("<p>" + pokemonList[i].name + ' ' + " ( height:" +  pokemonList[i].height + " )" + "</p>");
  }else {
  	console.log(pokemonList[i].name + " is a small Pokemon");
    document.write("<p>" + pokemonList[i].name + ' ' + " ( height:" +  pokemonList[i].height + " )" + "</p>");
  }
}

