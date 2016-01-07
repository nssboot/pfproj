
$(document).ready(function(e){

    $("input[type='button']").click(function(){  

        //$("script[src='js/en.js']").remove();        
       
        

				var url = baseurl + "&breed=" + breedChosen + "&location=" + zipcode.value + endurl;		
				alert("url before calling addGetJSONScript function below, is " + url); 
				//result = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
                		//var pfAPIdata = JSON.parse(result);
        var defaults = {

		        var petfinLists = {};
		        var petfinAPI ={};
		        var petfinsets, petfinhost, count;
		        var key: null,
		        var petfinshelter: null,
		        var petfinoffset: null, //petfinder.com offset is 25
		        callback: function () {}
		        
		        contactCity: 'city', // Location
		        contactState: 'state' // - do - 
		        contactZip: 'zipcode', // - do -  
		        contactCity: '', // location for search
		        contactState: '' // - do - 
		        contactZip: '', // - do - 
		        sizeS: 'Small',  //petfinder.com pet size variable
		        sizeM: 'Medium', // - do -
		        sizeL: 'Large',	 // - do -
		        genderF: 'Female', // petfinder.com pet gender variable
		        genderM: 'Male', // - do -
		        genderUnknown: 'Not Known' // - do -
		        pfbaby: 'Baby', //petfinder.com - age variable
		        pfyoung: 'Young',// - do - 
		        pfadult: 'Adult', // - do -
		        pfsenior: 'Senior', // - do -

		      };

				var breedChosen = $("input[name='optradio']:checked").val();  
				var baseurl = "https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";																																 	
				var zipcode = document.getElementById("zipcod");					
				var endurl = "&output=basic&format=json&callback=?";
				var key		=311acd0ca6ee16428a93eb5dafe77634;
				var animal=dog;


				var url = baseurl + "&breed=" + breedChosen + "&location=" + zipcode.value + endurl;		
				alert("url before calling addGetJSONScript function below, is " + url); 
				//result = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
                		//var pfAPIdata = JSON.parse(result);
		/**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists.
	 * @private
	 * @author Todd Motto
	 * @link   https://github.com/toddmotto/foreach
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function}              callback   Callback function for each iteration
	 * @param {Array|Object|NodeList} scope      Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */

		  var forEach = function ( collection, callback, scope ) {
					if ( Object.prototype.toString.call( collection ) === '[object Object]' ) {
						for ( var prop in collection ) {
							if ( Object.prototype.hasOwnProperty.call( collection, prop ) ) {
								callback.call( scope, collection[prop], prop, collection );
							}
						}
					} else {
						for ( var i = 0, len = collection.length; i < len; i++ ) {
							callback.call( scope, collection[i], i, collection );
						}
					}
				};


			var getJSONP = function ( url ) {
					// Create script with url
					var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
					var script = window.document.createElement( 'script' );
					var 
					script.src = url;

					// Insert script tag into the DOM (append to <head>)
					ref.parentNode.insertBefore( script, ref );

					// After the script is loaded (and executed), remove it
					script.onload = function () {
						this.remove();
					};

				};
				
				$.getJSON(url).success 		
				alert('Data retrieved!'); 								

            (function(pfAPIdata)
                { 
                	alert('Data retrieved!'); 
                		//var str = '?({"@encoding":"iso-8859-1","@version":"1.0",';
                		//var petfinder = '"@encoding":"iso-8859-1","@version":"1.0","petfinder"'

                		//pfAPIdata = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
                		//var pfAPIdata = JSON.parse(pfAPIdata);
                    
                    $.each(pfAPIdata, function(index, element) {                    	
                        //for(var i=0; i<10; i++) {
                        	

                        	/*Objects are set up using a key and value like...

												person.age = 15;
												If the key value is a variable, then one could access it like...

												var key = "age";
												alert(person[key]);
												Arrays use an integer[1] index and take a value.

												player[1].score += 1000;
												[1] Yes, I know ... in Javascript the integer index is really turned 
												into a string behind the scenes. Ignore that. Think of arrays taking an integer value ESPECIALLY when you think of JSON. */


                        	//[{"options":{"option":[{"$t":"specialNeeds"},{"$t":"hasShots"},{"$t":"altered"},{"$t":"housetrained"}]}
                            //alert('this pet id is ' + i  + pfAPIdata.petfinder.pets.pet[i]);
                            /*alert(' this is iteration data ');
		                        alert(" this is the index  " + index);
		                        alert(" this is the element  " + element);
		                        alert(" this is pet[i]  " + pfAPIdata.petfinder.pets.status{"$t": "A"});
		                        alert(" this is pet[i][\"$t\"]" + pfAPIdata.petfinder.pets.pet[i][status]);*/
		                      	//{console.log(petfinder.pets.pet[i][]);} 
		                        //$('#stage').html('<p> Name: ' + element.petfinder.pets.pet + '<p>'),
		                        //$('#stage').append($('<p> Breed: ' + elememt.petfinder.pets.pet.breed + '<p>'));

		                    // }

                      });  

        				});
		});

	});
			
				





    

  
