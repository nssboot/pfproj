
$(document).ready(function(e){

	alert("entering initialDraftBuildURLv1 function here");

		//var buildURL = function ( callback ) {

			//model = $.getJSON('https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634
			//	&animal=dog&breed=Beauceron&location=08536&output=basic&format=json&callback=?')

		var kicker = "$.getJSON("
		var baseurl = "'http://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";		
		var zipcode = document.getElementById("zipcod");					
		var endurl = "count=20&output=basic&format=json&callback=?";
		var breed;

		alert("Next line is to get the return value of the function breedselected assinged to the variable 'breed' ");
		//breedchosen = function breedselected();

		alert("kicker is " + kicker);
		alert("baseurl is " + baseurl);
		alert("zipcode is " + zipcode.value);
		alert("breed is " + breed);
		alert("endurl is " + endurl);
		
		var href = baseurl + "&location=" + zipcode.value + "&breed=" + breed.value + "&" + endurl;
		alert("href is " + href);

	});


/*function breedselected(e){
        $("input[type='button']").click(function(){            
            var breedChosen = $("input[name='optradio']:checked").val();            
            if(breedChosen){
                alert("Breed chosen is  from function of name - " + breedChosen);
                return(breedChosen);
              }           
        });        
    });
*/
  

/*var response = 0;

function doSomething() {
    // some code
    return 10;
}
response = doSomething();
*/
		
	// Add options
	/*	
	url += '&key=311acd0ca6ee16428a93eb5dafe77634'; // API Key
		url += '&id=' + settings.shelter; 
		url += '&count=' + parseInt(settings.count, 20); 	
		alert("url is  " + url)

		this.document.location.href = "http://example.com/form.php?PCS=" + PCWDE.value + "&nm=" + NMWDE.value + "&vnm=" + 
VNMWDE.value + "&ond=" + ONDWDE.value + "&btw=" + BTWWDE.value + "&lnd=" + LNDWDE.value;

		


		if ( callback ) {
			options += '&callback=' + callback;
		}

		return url + options;
		*/

	//};


