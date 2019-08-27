
// API KEY: b433a8542b64ea8a1a0087e04bb575e2
// 1bdb322f151268601d62cc69ffdfe0fe
// 3a52622cafe3f0ee396ddbe3169d969c
// 88576575acb15f4b695f012e315da478
// ccb84aaee2358b6062f530d0b1d41a56



var cookbookRepository = (function() {

	var repository = [];
	var apiUrl = '';



	function sendSearch(){
		var info = document.getElementById("mySearch").value;
		apiUrl = 'https://www.food2fork.com/api/search?key=88576575acb15f4b695f012e315da478&q=' + info;
		//alert(info)
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






	function add(addRecipe){
		if(typeof(addRecipe) === "object"){
			repository.push(addRecipe)
		} else {
			document.write("<body class='warning'><br><br>" + 'Please enter a real Pokemon' + "</body>")
		}
	}







	function addListItem(recipe){
		var $newRecipe = $('<button type="button" class="btn btn-primary" data-toggle="modal" data-target"#MyModal">' + recipe.name + '</button>');
		$('ul').append($newRecipe);

		//ADD EVENT LISTENER
		$newRecipe.on('click', function() {
			$("#writeNameHere").html("<a target='_blank'>" + recipe.name + "</a>");
			$("a").attr("href", recipe.theRecipe);
			$("#theImage").attr("src", recipe.imageUrl);
			showDetails(recipe);
		})
	}




	function showDetails(recipe){

		showModal(recipe.name, recipe.theRecipe, recipe.imageUrl);
	}



	function getAll(){
		return repository;
	}



// -------------------------MODAL---------------------------


	function showModal(title, text, pic){
		$('#exampleModalCenter').modal()
	}


	return {
		sendSearch: sendSearch,
		getAll: getAll,
		add: add,
		loadList: loadList,
		addListItem: addListItem,
		loadList: loadList,
		showDetails: showDetails,
		showModal: showModal,
	}

})();

	//cookbookRepository.sendSearch(); 

function bigFunction(){

	//return

	cookbookRepository.sendSearch();
  

	cookbookRepository.loadList().then(function() {

		cookbookRepository.getAll().forEach(function(recipe) {
			cookbookRepository.addListItem(recipe);
		});
	}).catch(function(e) {
		console.log(e);
	});


}

//bigFunction()




