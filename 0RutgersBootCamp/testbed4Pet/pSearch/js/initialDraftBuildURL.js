
$(document).ready(function(){

		//var buildURL = function ( callback ) {

			//model = $.getJSON('https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634
			//	&animal=dog&breed=Beauceron&location=08536&output=basic&format=json&callback=?')

		// Setup basic request in JSON format
		var url = 'http://api.petfinder.com/pet.find?&output=full&format=json';
		//var options = '';

		// Add options
		url += '&key=311acd0ca6ee16428a93eb5dafe77634'; // API Key
		url += '&id=' + settings.shelter; 
		url += '&count=' + parseInt(settings.count, 20); 	
		alert("url is  " + url)
		
		/*if ( callback ) {
			options += '&callback=' + callback;
		}

		return url + options;
		*/

	//};

	));
