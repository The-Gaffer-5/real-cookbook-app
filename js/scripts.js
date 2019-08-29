//        EXTRA API KEYS!
// b433a8542b64ea8a1a0087e04bb575e2
// 1bdb322f151268601d62cc69ffdfe0fe
// 3a52622cafe3f0ee396ddbe3169d969c
// 88576575acb15f4b695f012e315da478
// ccb84aaee2358b6062f530d0b1d41a56
// b5f3be6998620f899b0c5e8ab8f80438
// d0353c3a065e8c14f92baa04dbc4b9a8
// 2afa9fc4df08b6b5ff4681c10c95b3b4
// a40622881eebb47a2c59f5811aa84fe7
// 486c34b147e76c72af2120c39ca43157
// 685a82dbf8441dc5682721731e0d9c6d
// a3d58867230183af627128ef187cb8c7
// d2602853c3be836021ced120a19ccab7
// 738080e758fb1ed77b4eff83b5c12ecf

//----------------RETURN-BUTTONS---------------

$("#mySearch").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#myButton").click();
    }
});

$(".mySecondSearch").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#mySecondButton").click();
    }
});

//---------------------IIFE---------------------
var cookbookRepository = (function() {

	var repository = [];
	var apiUrl = '';


	function sendSearch(){
		repository = [];
		var info = document.getElementById("mySearch").value;
		apiUrl = 'https://www.food2fork.com/api/search?key=3a52622cafe3f0ee396ddbe3169d969c&q=' + info;
	}


	function loadList(){
		return $.ajax(apiUrl, { dataType: 'json'}).then(function(responseJSON) {
			return responseJSON.recipes.forEach(function(item) {
				var recipe = {
					name: item.title,
					imageUrl: item.image_url,
					theRecipe: item.source_url,
					publisher: item.publisher
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
		var $newRecipe = $('<div class="row boxes"><div class="col-sm-4"><div class="card" style="width: 18rem;"><img class="card-img-top" src="' + recipe.imageUrl + '" alt="Card image cap"><div class="card-body"><h5 class="card-title">' + recipe.name + '</h5><p class="card-text"> Publisher: ' + recipe.publisher + '</p><button type="button" class="btn btn-primary" data-toggle="modal" data-target"#MyModal">View</button></div></div></div></div>');
		$('.card-deck').append($newRecipe);

		     //ADD EVENT LISTENER
		  $( ".card" ).hover(function() {
    	  $(this).addClass('shadow-lg').css('cursor', 'pointer');}, function() {
    	  $(this).removeClass('shadow-lg');
  			}
		);



		$newRecipe.on('click', function() {
			$(".modal-title").html("<a class='mm-title' target='_blank'>" + recipe.name + "</a>");
			$("a").attr("href", recipe.theRecipe);
			$("#theImage").attr("src", recipe.imageUrl);
			$(".theLink").attr("src", recipe.theRecipe);

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

// -------------------------RETURNS---------------------------
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


function firstInit(){
	$(".openScreen").attr("style", "display: none;");
	$(".navbar").removeAttr("style");
	$(".cardDeckContainer").removeAttr("style");
}

function changeSearch(){
	$("#mySearch").attr("id", "notMySearch");
}

function reset(){
	var repository = [];
	$(".card-deck").empty();
}

function loadCards(){
	cookbookRepository.sendSearch();
	cookbookRepository.loadList().then(function() {
		cookbookRepository.getAll().forEach(function(recipe) {
			cookbookRepository.addListItem(recipe);
		});
	}).catch(function(e) {
		console.log(e);
	});
}
