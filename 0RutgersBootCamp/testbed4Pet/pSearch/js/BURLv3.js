
$(document).ready(function(e){

    $("input[type='button']").click(function(){  

        //$("script[src='js/en.js']").remove();        
       
        var breedChosen = $("input[name='optradio']:checked").val();  
				var baseurl = "https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";																																 	
				var zipcode = document.getElementById("zipcod");					
				var endurl = "&output=basic&format=json&callback=?";

				var url = baseurl + "&breed=" + breedChosen + "&location=" + zipcode.value + endurl;		
				alert("url before calling addGetJSONScript function below, is " + url); 

				$.getJSON(url).success
            (function(pfAPIdata) 
                { 
                    alert('Data retrieved!'); 
                    //alert('this is data pf pf  ' + pfAPIdata.petfinder.pets.pet[]);
                    $.each(pfAPIdata, function(index, element) {
                        for(var i=0; i<pfAPIdata.petfinder.pets.pet.length; i++) {
                        		alert('the number of pets recieved is  ' + i  + pfAPIdata.petfinder.pets.pet.length);
                            alert('this pet  ' + i  + pfAPIdata.petfinder.pets.pet[i]);
                            alert('this is iteration data ');
		                        {alert(pfAPIdata, index, element);}
		                      	//{console.log(petfinder.pets.pet[i][]);} 
		                        $('#stage').html('<p> Name: ' + element.petfinder.pets.pet + '<p>'),
		                        $('#stage').append($('<p> Breed: ' + elememt.petfinder.pets.pet.breed + '<p>'));

                        }

       /*                 ====================

                        (function() {
													  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
													  $.getJSON( flickerAPI, {
													    tags: "mount rainier",
													    tagmode: "any",
													    format: "json"
													  })
													    .done(function( data ) {
													      $.each( data.items, function( i, item ) {
													        $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
													        if ( i === 3 ) {
													          return false;
													        }
													      });
													    });
													})();

			


                        --------------------

             
                        alert('this is iteration data ');
                         {alert(pfAPIdata, index, element);}
                      		{console.log(petfinder.pets.pet[i][]);} 
                        $('#stage').html('<p> Name: ' + element.petfinder.pets.pet + '<p>'),
                        $('#stage').append($('<p> Breed: ' + elememt.petfinder.pets.pet.breed + '<p>'));
                   */      										                			                    
                
							        //.error
							            //(function(err) 
							               // { alert('Error retrieving data!'); 
							               // }
							        });  

        				});

			}); 

});
			

				/*
				addGetJSONScript = function(newoptions) {
					    var head = document.getElementsByTagName("head")[0],
					        script = document.createElement('script');

					    script.type = 'text/javascript'
					    script.src = 'en.js'
					    head.appendChild(script);
					};

						addGetJSONScript('en');
				*/





    

  
