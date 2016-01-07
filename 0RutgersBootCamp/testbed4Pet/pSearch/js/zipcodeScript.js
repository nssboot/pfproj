
	$(document).ready(function() {    	    	

				/*var zipcodeInput = document.getElementById('zipcod');	*/

				function zipcodeScript(e) {								
				    if (e.keyCode == 13) {
				        var zipcodeInput = document.getElementById("zipcod");				        
				        alert("you submitted " + zipcodeInput.value);
				        zipcodeevaluate(zipcodeInput.value);
				        return false;
				    }
				}

				/*function zipcodeevaluate(zipcodeentered) {
					alert("entering function here and zipcode entered is  " + zipcodeentered);
					if (!zipcodeentered) {return false;}
					else {
							var zipcodeVar = (/^\d{5}(?:[-\s]\d{4})?$/.test(value.trim()) && value !== "zipcodeentered");					    
					    alert("this is zipcodeVar " + zipcodeVar);
							alert(((zipcodeentered.match(zipcodeVar))));
					    return ((zipcodeentered.match(zipcodeVar)));
					   }
				};	*/

	});			
								
		    		    	
				


