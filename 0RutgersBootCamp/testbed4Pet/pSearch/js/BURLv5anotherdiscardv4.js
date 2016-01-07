
$(document).ready(function(e){

var requestedBytes = 1024*1024*10; // 10MB
localStorage.name = "pfPluginstorage";

/* function below allocates storage space on local system.   requestedBytes is 10 MB as in variable above */
	navigator.webkitPersistentStorage.requestQuota (	
	    requestedBytes, function(grantedBytes) {  
	    	//alert("inside navigator 2ns function");
	        window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);
						//alert("inside navigator 3rd function");
	    }, function(e) { console.log('Error', e); }
	);

	
// function below equests storage usage and capacity left
// Choose either Temporary or Persistent
	navigator.webkitPersistentStorage.queryUsageAndQuota ( 
	    function(usedBytes, grantedBytes) {  
	        console.log('we are using ', usedBytes, ' of ', grantedBytes, 'bytes');
	    }, 
	    function(e) { console.log('Error', e);  }
	);
/* function below facilitates access to the storage space on local system, via getFile({create: true})              */
/* This function carries the parameter DatFile. From here we call the method createWriter, which is responsible     */
/* for filling the file with content. Another function, called via createWriter(), creates a BLOB, in our example a */
/* simple text BLOB. The object literal adds the type of content, in our case text/plain */

		function SaveDatFileBro(localstorage) {
		  localStorage.root.getFile("pfAPIdata.json", {create: true}, function(DatFile) {
		    DatFile.createWriter(function(DatContent) {
		      var blob = new Blob([""], {type: "text/javascript"});
		      DatContent.write(blob);
		    });
		  });
		}

		/* The function below creates a folder */
		function SaveDatFileBro(localStorage) {
		  localStorage.root.getFile("pfAPIdata.json", {}, function(DatFile) {
		    localStorage.root.getDirectory("pfData/", {}, function(DatFolder) {
		      datei.moveTo(DatFolder);
		    });
		  });
		}
	
    $("input[type='button']").click(function(){  
              
       			var petfinLists = {};
		        var petfinAPI ={};
		        var petfinsets, petfinhost, count;
		        var key = null;
		        var petfinshelter = null;
		        var petfinoffset = null; //petfinder.com offset is 25
		        var breeds = {};
		        var breeds = {};
		        var pets = {};
		        var pet = {};
		        var pfAPIdata = {};
	        	render = function() {};
	        	//onInitFs = function() {};
		        //callback: function () {}
		        
		        contactCity = 'city', // Location
		        contactState=  'state' // - do - 
		        contactZip = 'zipcode', // - do -  
		        contactCity = '', // location for search
		        contactState = '' // - do - 
		        contactZip = '', // - do - 
		        sizeS = 'Small',  //petfinder.com pet size variable
		        sizeM = 'Medium', // - do -
		        sizeL = 'Large',	 // - do -
		        genderF = 'Female', // petfinder.com pet gender variable
		        genderM = 'Male', // - do -
		        genderUnknown = 'Not Known' // - do -
		        pfyoung = 'Young',// - do - 
		        pfadult = 'Adult', // - do -
		        pfsenior = 'Senior'; // - do -
		        
		        var breedChosen = $("input[name='optradio']:checked").val();  
						var baseurl = "https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog";																																 	
						var zipcode = document.getElementById("zipcod");					
						var endurl = "&output=basic&format=json&callback=?";

						var url = baseurl + "&breed=" + breedChosen + "&location=" + zipcode.value + endurl;		
						alert("url before calling addGetJSONScript function below, is " + url); 

						//result = str.replace('?({"@encoding":"iso-8859-1","@version":"1.0",','');
		                		//var pfAPIdata = JSON.parse(result);
						
						if(localStorage && localStorage.getItem('pfPluginstorage')){
								  render(JSON.parse(localStorage.getItem('pfPluginstorage')));
								} else {
								  //$('#list').html(''+loading+'');

								  $.getJSON(url,function(data){
								    if(localStorage){
								      localStorage.setItem('pfPluginstorage',JSON.stringify(data));
								    }
								    render (JSON.parse( localStorage.getItem( data ) ) );  
								  });

					
		                     }

	               onInitFs = function() {
										lists = {};	
										baseUrl = null;
										total = null;
									}


                      //});  

        				//);
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





    

  
