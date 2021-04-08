// IIFE pokemonRepository
let pokemonRepository = (function (){
  // array of objects
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
let modalContainer = document.querySelector('#modal-container');
let loadImage = document.querySelector('.loadingImage');
    // allows to add only objects with the add function
    function add(pokemon) {
        if (
        typeof pokemon === 'object' &&
        'name' in pokemon &&
        'detailsUrl' in pokemon
        ){
        pokemonList.push(pokemon);
      }else {
        console.log('pokemon not found')
      }
    }
      // allows access to the pokemonList from outside the IIFE
    function getAll() {
        return pokemonList;
      }

    // retrieves the list of pokemons from the api
    function loadList() {
      showLoadingMessage();
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
        }).then(function(){
        hideLoadingMessage();
      })  .catch(function (e) {
        console.error (e);
      })
    }
    // loads the details of each pokemon using fetch
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.type = details.types[0].type.name;
    }).catch(function (e) {
      console.error(e);
    });
  }
    function addListItem(pokemon) {
      let pokemonList = document.querySelector('.pokemon-list');
      let listPokemon = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.addEventListener('click', function () {
        showDetails(pokemon); });
      button.classList.add('button-class');
      button.classList.add('btn', 'btn-danger');
      listPokemon.appendChild(button);
      pokemonList.appendChild(listPokemon);
    }
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
        showModal(pokemon);
        document.querySelector('#modal-container').modal('show');
      });
    }

     // shows loading img
    function showLoadingMessage() {
    loadImage.classList.add('showImg');
  }

  // hides loading img
    function hideLoadingMessage() {
    loadImage.classList.remove('showImg');
  }

    function showModal(pokemon) {

let modalTitle = document.getElementById('modalTitle');
modalTitle.innerText = pokemon.name;

let pokemonHeight = document.getElementById('exampleModalCenterText1');
pokemonHeight.innerText = 'Height: ' + pokemon.height;
pokemonHeight.classList.add('modal-body');

let pokemonType = document.getElementById('exampleModalCenterText2');
pokemonType.innerText = 'Type: ' + pokemon.type;
pokemonType.classList.add('modal-body');

let modalImage = document.getElementById('exampleModalCenterText3');
modalImage.src = pokemon.imageUrl;
modalImage.classList.add('pokemonImage');

}


function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});
modalContainer.addEventListener('click', (e) => {
  // Since this is also triggered when clicking INSIDE the modal
  // We only want to close if the user clicks directly on the overlay
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});


    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      showLoadingMessage: showLoadingMessage,
      hideLoadingMessage: hideLoadingMessage,
      hideModal: hideModal
    };
})();
pokemonRepository.loadList().then(function () {
  // displays loading img in browser
  pokemonRepository.showLoadingMessage();
  // timer to stimulate data loading time
  setTimeout(function() {
    // data is loaded
    pokemonRepository.getAll().forEach(function (pokemon) {
      // data is  displayed
      pokemonRepository.addListItem(pokemon);
  })
    // loading img hidden
    pokemonRepository.hideLoadingMessage();
  }, 1000)
});

let searchPokemonList = document.querySelector('.pokemon.list')
searchPokemonList = document.querySelector('.pokemon-list')
 //defines search bar
let searchBar = document.forms['filter'].querySelector('input');
//adds event listener so it interacs with the user
searchBar.addEventListener('keyup', function(e){
  let term = e.target.value.toLowerCase();
  let searchPokemons = searchPokemonList.getElementsByTagName('li');
  Array.from(searchPokemons).forEach(function(searchPokemons){
        let poke = searchPokemons.firstElementChild.textContent;
        if ( poke.toLowerCase().indexOf(term) != -1){
          searchPokemons.style.display = 'block';
        } else{
          searchPokemons.style.display = 'none';
        }
  })
})
addPokemon();
function addPokemon(){
  //get data from input
  let newPokemon = document.getElementById('newPokemon').value

  if (!newPokemon){
    return alert('Please write something');
  }

  // identify pokemon list
  let pokemonList = document.querySelector('.pokemon-list');
  // list container
  let listPokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = newPokemon;

  button.addEventListener('click', function() {
    pokemonDetailsNew();
  })
  button.classList.add('button-class')
  button.classList.add('btn', 'btn-primary');
  listPokemon.appendChild(button);
  pokemonList.insertBefore(listPokemon, pokemonList.firstChild);

  function pokemonDetailsNew(){
    let pokemonName = newPokemon
    console.log(pokemonName);
  }
}
