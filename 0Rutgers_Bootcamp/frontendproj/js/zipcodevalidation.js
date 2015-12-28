
	$(document).ready(function() {    	    	

				var theInput = document.getElementById('zipcod');	

				function zipcodScript(e) {								
				    if (e.keyCode == 13) {
				        var theInput = document.getElementById("zipcod");				        
				        alert("you submitted " + theInput.value);
				        zipcodeevaluate(theInput.value);
				        return false;
				    }
				}

				function zipcodeevaluate(zipcodeentered) {
					if (!zipcodeentered) {return false;}
					else {
							var zipcodeVar = (/^\d{5}(?:[-\s]\d{4})?$/.test(value.trim()) && value !== "zipcodeentered");					    
					    alert("this is zipcodeVar " + zipcodeVar);
							alert(((zipcodeentered.match(zipcodeVar))));
					    return ((zipcodeentered.match(zipcodeVar)));
					   }
				};	

	});			
								
		    		    	
				


