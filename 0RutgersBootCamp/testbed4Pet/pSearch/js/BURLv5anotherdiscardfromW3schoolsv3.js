
$(document).ready(function(e){

    $("input[type='button']").click(function(){  

        //$("script[src='js/en.js']").remove();        
       
        var breedChosen = $("input[name='optradio']:checked").val();  
				var baseurl = "https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";																																 	
				var zipcode = document.getElementById("zipcod");					
				var endurl = "&output=basic&format=json&callback=?";

				var url = baseurl + "&breed=" + breedChosen + "&location=" + zipcode.value + endurl;		
				alert("url before calling addGetJSONScript function below, is " + url); 

				//result = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
                		//var pfAPIdata = JSON.parse(result);

					var xmlhttp = new XMLHttpRequest();
					var url = "myTutorials.txt";
					alert("url is now " + url);

					xmlhttp.onreadystatechange = function() {
					    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
					        var myArr = JSON.parse(xmlhttp.responseText);
					        myFunction(myArr);
					    }
					};
					xmlhttp.open("getJSON", url, true);
					xmlhttp.send();

					function myFunction(arr) {
					    var out = "";
					    var i;
					    for(i = 0; i < arr.length; i++) {
					        out += '<a href="' + arr[i].url + '">' + 
					        arr[i].display + '</a><br>';
					    }
					    document.getElementById("id01").innerHTML = out;
					}

				});
					 
});
					 

/*


				$.getJSON(url).success 		

					//"data-123".replace('data-','');

            (function(pfAPIdata) 
                { 
                		 
                		//pfAPIdata = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
                		//var pfAPIdata = JSON.parse(pfAPIdata);

                    alert('Data retrieved!'); 
                    alert('petfinder is  ' + petfinder);
                    alert('Number of pets received is   ' + pfAPIdata.petfinder.pets.pet.length);

                  
                    alert('this is data pf pf  ' + pfAPIdata.petfinder.pets.pet); //gives me 3 objects in an array.
                    //pet is an array of options
                    $.each(pfAPIdata, function(index, element) {                    	
                        for(var i=0; i<pfAPIdata.petfinder.pets.pet.length; i++) {
                            //alert('this pet id is ' + i  + pfAPIdata.petfinder.pets.pet[i]);
                            alert(' this is iteration data ');
		                        alert(" this is the index  " + index);
		                        alert(" this is the element  " + element);
		                        alert(" this is pet[i]  " + pfAPIdata.petfinder.pets.status{"$t": "A"});
		                        alert(" this is pet[i][\"$t\"]" + pfAPIdata.petfinder.pets.pet[i][status]);
		                      	//{console.log(petfinder.pets.pet[i][]);} 
		                        //$('#stage').html('<p> Name: ' + element.petfinder.pets.pet + '<p>'),
		                        //$('#stage').append($('<p> Breed: ' + elememt.petfinder.pets.pet.breed + '<p>'));

		                     }

                      });  

        				});
		});

	});
			
			*/
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





    

  
