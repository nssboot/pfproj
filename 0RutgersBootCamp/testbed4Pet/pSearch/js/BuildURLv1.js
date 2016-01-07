
	/*
	function petjsonv2(href) {
		alert("function petjsonv2 called  ");

	}
	*/

	$(document).ready(function(e){
    $("input[type='button']").click(function(){            
        var breedChosen = $("input[name='optradio']:checked").val(); 
      
				var kicker = "$.getJSON("
				var baseurl = "'https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";		
				var zipcode = document.getElementById("zipcod");					
				var endurl = "&output=basic&format=json&callback=?')";		

				/*
				alert("zipcode is " + zipcode.value);
				alert("breed is " + breedChosen);

				alert("kicker is " + kicker);
				alert("baseurl is " + baseurl);		
				alert("endurl is " + endurl);
				*/
				
				var url = kicker + baseurl + "&breed=" + breedChosen + "&location=" + zipcode.value + endurl;		
				alert("url before calling Class.create function below is " + url);

				//return(url);

				var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
		
				var script = window.document.createElement( 'script' );
				
				script.src = url;
				// Insert script tag into the DOM (append to <head>)
				ref.parentNode.insertBefore( script, ref );

				// After the script is loaded (and executed), remove it
				script.onload = function () {
					//this.remove();

			};	

		//var petcall = function petjsonv2(href)

		//export(href);
	/*

		var WSAjax = Class.create ({			
    initialize: function (_url, _callback){
        this.url = _url ;
        this.callback = _callback ;
        this.connect () ;
    },
    connect: function (){
        var script_id = null;
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', this.url);
        script.setAttribute('id', 'petF_ajax_script');

        script_id = document.getElementById('petF_ajax_script');
        alert("script_id is " + script_id);
        if(script_id){
            document.getElementsByTagName('head')[0].removeChild(script_id);
        }

        // Insert <script> into DOM
        document.getElementsByTagName('head')[0].appendChild(script);
    },
    process: function (data){
        this.callback(data) ;
    }

    //alert("this WSAjax program completed");

}) ;


		var getJSONP = function ( url ) {

			alert("entering getJSONP function now, and url is  " + url);

		// Create script with the url that was created above
		var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
		alert("ref now is " + ref);
		var script = window.document.createElement( 'script' );
		alert("script now is " + script);
		script.src = url;
		alert("script now is " + script.src);

		// Insert script tag into the DOM (append to <head>)
		ref.parentNode.insertBefore( script, ref );

		// After the script is loaded (and executed), remove it
		script.onload = function () {
			this.remove();
		};	
	};



	var getJSONP = function ( url ) {
			
		// Create script with the url that was created above
		var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
		
		var script = window.document.createElement( 'script' );
		
		script.src = url;
	
		// Insert script tag into the DOM (append to <head>)
		ref.parentNode.insertBefore( script, ref );

		// After the script is loaded (and executed), remove it
		script.onload = function () {
			this.remove();

		};	
	};
*/


}); 

});




    

  
