

	$(document).ready(function(e){
    $("input[type='button']").click(function(){            
        
				var kicker = "js/$.getJSON("
				var baseurl = "'https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";		
				var zipcode = "08536";					
				var endurl = "&output=basic&format=json&callback=?')";						
				
				var url = kicker + baseurl + "&breed=" + "Beauceron" + "&location=" + "08536" + endurl;		
				
				var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
		
				var script = window.document.createElement( 'script' );
				
				script.src = url;
				// Insert script tag into the DOM (append to <head>)
				ref.parentNode.insertBefore( script, ref );

				// After the script is loaded (and executed), remove it
				script.onload = function () {
				this.remove();

			};			

}); 

});




    

  
