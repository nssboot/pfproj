
$(document).ready(function(e){

	alert("entering BuildURLv1 function here");

		//var buildURL = function ( callback ) {

			//model = $.getJSON('https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634
			//	&animal=dog&breed=Beauceron&location=08536&output=basic&format=json&callback=?')

		var kicker = "$.getJSON("
		var baseurl = "'http://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";		
		var zipcode = document.getElementById("zipcod");					
		var endurl = "count=20&output=basic&format=json&callback=?";
		var breed, breedChosen;

		alert("breed is " + breed);
		alert("breed chosen is " + breedChosen);

		alert("Next line is to get the return value of the function breedselected assinged to the variable 'breed' ");
		breed === breedselected(breedChosen);
		alert("back in the build, breed is   " + breedChosen);

		alert("kicker is " + kicker);
		alert("baseurl is " + baseurl);
		alert("zipcode is " + zipcode.value);
		alert("breed is " + breed);
		alert("endurl is " + endurl);
		
		var href = baseurl + "&location=" + zipcode.value + "&breed=" + breedChosen + "&" + endurl;
		alert("href is " + href);

		//alert("href is   " + href);

	});


function breedselected(breedChosen){
				alert("entering function breedselected and breedChosen passed to this function is " + breedChosen);
        $("input[type='button']").click(function(){            
            var breedChosen = $("input[name='optradio']:checked").val();  
            alert("Now, just after line 41 run breedChosen is  " + breedChosen);         
            if(breedChosen){
                alert("In the breedselected function, breed chosen is  - " + breedChosen);
                //return(breedChosen);                         
        	} 
        }); 
      };

    

  
