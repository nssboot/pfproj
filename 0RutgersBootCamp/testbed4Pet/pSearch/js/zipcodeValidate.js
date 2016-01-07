				
				function zipcodeValidate(e) {								
				    if (e.keyCode == 13) {
				        var zipcodeInput = document.getElementById("zipcod");				        
				        alert("you submitted " + zipcodeInput.value);
				        zipcodeevaluate(zipcodeInput.value);
				        return false;
				    }
				}		
				
				function zipcodeevaluate(zipcodeentered) {
					alert("entering function here and zipcode entered is  " + zipcodeentered);
					//if (!zipcodeentered) {return false;	}
							var zipcodeVar = (/^\d{5}(?:[-\s]\d{4})?$/.test(zipcodeentered.trim()));					    
					    alert("this is zipcodeVar " + zipcodeVar);
					    return(zipcodeVar);
							
				
				