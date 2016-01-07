
$(document).ready(function(e){

    $("input[type='button']").click(function(){  

        //$("script[src='js/en.js']").remove();     

      $("#selectBreed").on("click", function(){
  		var breedChosen = $("#animal2").val(); // animal2 is id of select  

  		$("#animal2").change(function(){
	    var animal = $("#animal2").val(); 

	    $(".menu").empty();  
	    
	    breedChecker();   

	    $(".breedSearch").on("click", function(e) {
		    e.preventDefault();
		    
		    searchByBreed();
		  });

		  function breedChecker(){   
	    var animal = $("#animal2").val();
	    var petFAPI = "https://crossorigin.me/https://api.petfinder.com/breed.list?"
	    var petFAPIParam = {
	      key: "311acd0ca6ee16428a93eb5dafe77634",
	      animal: animal,
	      format: "json"
	    }

       
        //var breedChosen = $("input[name='optradio']:checked").val();  
				var baseurl = "https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";																																 	
				var zipcode = document.getElementById("pac-input");	
				alert("zip code given is  " + zipcode);				
				var endurl = "&output=basic&format=json&callback=?";

				var url = baseurl + "&breed=" + breedChosen + "&location=" + zipcode.value + endurl;		
				alert("url before calling addGetJSONScript function below, is " + url); 

				//result = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
                		//var pfAPIdata = JSON.parse(result);

				$.getJSON(url).success 		

					//"data-123".replace('data-','');

            (function(pfAPIdata) 
                { 
                		
											        var breeds = pfAPIdata.petfinder.breeds.breed;
											        for(i=0; i<breeds.length; i++){
											          var lstItm = breeds[i]['$t'];
											          var newDiv = $("<option>").attr("value",[lstItm]).text(lstItm);
											        $(".menu").append(newDiv);
											          //add class item to each and append to .menu
											          function newList(lstItm){;
											            var newDiv =("<div>").addClass("item")
											              .text(lstItm);
											            $(".menu").append(newDiv); 

											          } //newList
											        

											        }		//for loop	
											        return newDiv;	

								}
						) //function pfAPIdata

			});


    });//function

  }); //main


/*
                        ====================

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
                         										                			                    
                
							        //.error
							            //(function(err) 
							               // { alert('Error retrieving data!'); 
							               // }
							               */

							       // });  
/*
        				});

			}); //function

}); //main
			
		
				addGetJSONScript = function(newoptions) {
					    var head = document.getElementsByTagName("head")[0],
					        script = document.createElement('script');

					    script.type = 'text/javascript'
					    script.src = 'en.js'
					    head.appendChild(script);
					};

						addGetJSONScript('en');
				*/





    

  
