
$(document).ready(function(e){

		var kicker = "$.getJSON("
		var baseurl = "'http://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";		
		var zipcode = document.getElementById("zipcod");					
		var endurl = "count=20&output=basic&format=json&callback=?";
		var breed;
		
		alert("kicker is " + kicker);
		alert("baseurl is " + baseurl);
		alert("zipcode is " + zipcode.value);
		alert("breed is " + breed);
		alert("endurl is " + endurl);
		
		var href = baseurl + "&location=" + zipcode.value + "&breed=" + breed.value + "&" + endurl;
		alert("href is " + href);

	});

