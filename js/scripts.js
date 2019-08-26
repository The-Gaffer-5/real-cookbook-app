
// API KEY: b433a8542b64ea8a1a0087e04bb575e2





var cookbookRepository = (function() {

	var repository = [];
	var apiUrl = 'https://www.food2fork.com/api/search?key=ccb84aaee2358b6062f530d0b1d41a56&q=shredded%20chicken';
	const api_key = 'ccb84aaee2358b6062f530d0b1d41a56';







	function add(addRecipe){
		if(typeof(addRecipe) === "object"){
			repository.push(addRecipe)
		} else {
			document.write("<body class='warning'><br><br>" + 'Please enter a real Pokemon' + "</body>")
		}
	}







	function addListItem(recipe){
		var $newRecipe = $('<button>', {class:'the-buttons', text: recipe.name});
		$('ul').append($newRecipe);

		//ADD EVENT LISTENER
		$newRecipe.on('click', function() {
			showDetails(recipe);
		})
	}




	function showDetails(recipe){
		showModal(recipe.name, recipe.theRecipe, recipe.imageUrl);
	}







	function loadList(){
		return $.ajax(apiUrl, { dataType: 'json'}).then(function(responseJSON) {
			return responseJSON.recipes.forEach(function(item) {
				var recipe = {
					name: item.title,
					imageUrl: item.image_url,
					theRecipe: item.source_url
				}
				add(recipe);
			});
		}).catch(function (e) {
			console.error(e);
		})
	}


	function getAll(){
		return repository;
	}









// -------------------------MODAL---------------------------


	function showModal(title, text, pic){
		var $modalContainer = document.querySelector('#modal-container');
		$modalContainer.innerHTML = '';
		var modal = document.createElement('div');
		modal.classList.add('modal');
		$modalContainer.classList.add('is-visible');


		var closeButtonElement = document.createElement('button');
		closeButtonElement.classList.add('modal-close');
		closeButtonElement.innerText = 'Close';
		closeButtonElement.addEventListener('click', hideModal);

		var titleElement = document.createElement('a');
		titleElement.innerText = title;
		titleElement.setAttribute("href", text)


		var imageElement = document.createElement('IMG');
		imageElement.setAttribute("src", pic);
		imageElement.setAttribute("class", "pokemon-pic");
		
		// var contentElement = document.createElement('a');
		// contentElement.innerText = "Click here for the recipe!";
		// contentElement.setAttribute("href", text)



		modal.appendChild(closeButtonElement);
		modal.appendChild(titleElement);
		// modal.appendChild(contentElement);
		modal.appendChild(imageElement);
		$modalContainer.appendChild(modal);
	}

	function hideModal(){
		var $modalContainer = document.querySelector('#modal-container');
		$modalContainer.classList.remove('is-visible');
	}


	var $modalContainer = document.querySelector('#modal-container');

	window.addEventListener('keydown', (e) => {

	  if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
	    hideModal();  
	  }
	});


	$modalContainer.addEventListener('click', (e) => {
	  var target = e.target;
	  if (target === $modalContainer) {
	    hideModal();
	  }
	});




	return {
		getAll: getAll,
		add: add,
		loadList: loadList,
		addListItem: addListItem,
		loadList: loadList,
		showDetails: showDetails,
		showModal: showModal,
		hideModal: hideModal
	}

})();


// cookbookRepository.loadList().then(function(){
// 	cookbookRepository.getAll()
// });


cookbookRepository.loadList().then(function() {

	cookbookRepository.getAll().forEach(function(recipe) {
		cookbookRepository.addListItem(recipe);
	});
}).catch(function(e) {
	console.log(e);
});



















// var pokemonRepository = (function() {
// 	var repository = [];
// 	var api_key = 'b433a8542b64ea8a1a0087e04bb575e2';
// 	var apiUrl = 'https://www.food2fork.com/api/search?key=1410fca14e4f043463994579a722c20a&q=shredded%20chicken';

// 	function getAll(){
// 		return repository;
// 	}



// 	function add(pokemonAdd){
// 		if(typeof(pokemonAdd) === "object"){
// 			repository.push(pokemonAdd);
// 		} else {
// 			document.write("<body class='warning'><br><br>" + 'Please enter a real Pokemon' + "</body>")
// 		}
		
// 	}

// 	function addListItem(pokemon) {
// 		var listItem = document.createElement('li');
// 		var button = document.createElement('button');
// 		button.innerText = pokemon.name;
// 		button.classList.add('pokemonClass')
// 		listItem.appendChild(button);
// 		$pokemonList.appendChild(listItem);
// 		//ADDING EVENT LISTENER
// 		listItem.addEventListener('click', function(){
// 			showDetails(pokemon);
// 		});
// 	}

// 	function showDetails(pokemon) {
// 	pokemonRepository.loadDetails(pokemon).then(function () {
// 		showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
// 	});
// 	}


// 	function loadList() {
// 		return fetch(apiUrl).then(function(response) {
// 			return response.json();
// 		}).then(function (json) {
// 			json.recipes.forEach(function (item) {
// 				var pokemon = {
// 					name: item.title,
// 					imageUrl: item.image_url,
// 				};
// 				add(pokemon);
// 			});
// 		}).catch(function (e) {
// 			console.error(e);
// 		})
// 	}

// 	function loadDetails(item) {
// 		var url = item.imageUrl;
// 		return fetch(url).then(function (response) {
// 			return response.json();
// 		}).then(function(details) {
// 			// item.imageUrl = details.image_url;
// 		 //      item.height = details.height;
// 		 //      item.types = Object.keys(details.types);
// 					}).catch(function(e) {
// 						console.error(e);
// 					});
// 	}

// // -------------------------MODAL---------------------------


// 	function showModal(title, text, pic){
// 		var $modalContainer = document.querySelector('#modal-container');
// 		$modalContainer.innerHTML = '';
// 		var modal = document.createElement('div');
// 		modal.classList.add('modal');
// 		$modalContainer.classList.add('is-visible');


// 		var closeButtonElement = document.createElement('button');
// 		closeButtonElement.classList.add('modal-close');
// 		closeButtonElement.innerText = 'Close';
// 		closeButtonElement.addEventListener('click', hideModal);

// 		var titleElement = document.createElement('h2');
// 		titleElement.innerText = title;

// 		var contentElement = document.createElement('p');
// 		// contentElement.innerText = "Height: " + text;

// 		var imageElement = document.createElement('IMG');
// 		imageElement.setAttribute("src", pic);
// 		imageElement.setAttribute("class", "pokemon-pic");




// 		modal.appendChild(closeButtonElement);
// 		modal.appendChild(titleElement);
// 		modal.appendChild(contentElement);
// 		modal.appendChild(imageElement);
// 		$modalContainer.appendChild(modal);
// 	}

// 	function hideModal(){
// 		var $modalContainer = document.querySelector('#modal-container');
// 		$modalContainer.classList.remove('is-visible');
// 	}


// 	var $modalContainer = document.querySelector('#modal-container');

// 	window.addEventListener('keydown', (e) => {

// 	  if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
// 	    hideModal();  
// 	  }
// 	});


// 	$modalContainer.addEventListener('click', (e) => {
// 	  var target = e.target;
// 	  if (target === $modalContainer) {
// 	    hideModal();
// 	  }
// 	});



// // ------------------------RETURNS---------------------------

// 	return {
// 		getAll: getAll,
// 		add: add, 
// 		addListItem: addListItem,
// 		showDetails: showDetails,
// 		loadList: loadList,
// 		loadDetails: loadDetails,
// 		showModal: showModal,
// 		hideModal: hideModal
// 	};
// })();




// // -------------------TASK 1.5----------------------



// $pokemonList = document.querySelector('.pokemon-list')





// // --------------------TASK 1.7---------------------

// pokemonRepository.loadList().then(function() {

// 	pokemonRepository.getAll().forEach(function(pokemon) {
// 		pokemonRepository.addListItem(pokemon);
// 	});
// });