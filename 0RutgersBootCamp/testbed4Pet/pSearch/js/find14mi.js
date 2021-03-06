$(document).ready(function(){
  //$("#noAnimal").hide();  // noAnimal is id of <div>
  //$("#noZip").hide(); // noZip is id of <div>

  $("#selectBreed").on("click", function(){
    var animal = $("#animal2").val(); // animal2 is id of select
    //selectBreed is id of select

    // next 3 lines: if animal selected, only act to warn 
    if(animal === null){
      $("#noAnimal").show().fadeOut(3500);
      return;
    } 
  })

  //on animal2 selection populate the breed list
  //animal alert needs 2 event listeners: 
  //one for search button, and one for breed button
  $("#animal2").change(function(){
    var animal = $("#animal2").val(); 

    $(".menu").empty();  
    
 /*   breedChecker();   
    $('#selectBreed').select2();
  }); */
  //select2 comes from 'cloudfare'

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

    $.ajax({     
      type:"GET",
      url: petFAPI + $.param(petFAPIParam),
      success: function(response){
        var breeds = response.petfinder.breeds.breed;
        for(i=0; i<breeds.length; i++){
          var lstItm = breeds[i]['$t'];
          var newDiv = $("<option>").attr("value",[lstItm]).text(lstItm);
        $(".menu").append(newDiv);
          //add class item to each and append to .menu
          function newList(lstItm){;
            var newDiv =("<div>").addClass("item")
              .text(lstItm);
            $(".menu").append(newDiv);       
          }
        }
        return newDiv;
      }
    })
  };

  function searchByBreed(){   
    var animal = $("#animal2").val();
    var breedVal = $("#selectBreed").val();
    var petFAPI = "https://crossorigin.me/https://api.petfinder.com/pet.getRandom?"
    var petFAPIParam = {
      key: "311acd0ca6ee16428a93eb5dafe77634",
      animal: animal,
      breed: breedVal,
      output: "full",
      format: "json"
    }

    $("#breedResult").empty();
    $(".photoRow").empty();

    $.ajax({     
      type:"GET",
      url: petFAPI + $.param(petFAPIParam),
      success: function(response){
        var newPetInfo = response.petfinder.pet
        var newPetContact = response.petfinder.pet.contact
        var petOptions = response.petfinder.pet.options.option;
        var petPhoto = response.petfinder.pet.media.photos.photo;
        var yourPet = $("<h2>Meet " + newPetInfo.name["$t"] + ", a size " + newPetInfo.size["$t"]+" " + newPetInfo.age["$t"] +" "+ newPetInfo.sex["$t"] + " from " + newPetContact.city["$t"] +", "+newPetContact.state["$t"] + "</h2>");
        var yourPetP = $("<p>").addClass("col-xs-12 col-md-10 col-md-offset-1").text(newPetInfo.description["$t"]);
        var yourPetContact = $("<h3>To adopt " + newPetInfo.name["$t"] + ", please call " + newPetContact.phone["$t"] +"</h3>").addClass("col-xs-12");

        $("#breedResult").prepend(yourPetP);
        $("#breedResult").prepend(yourPet);
        $("#breedResult").append(yourPetContact);

        for(i=0; i<petPhoto.length; i++){
          
          if(petPhoto[i]["@size"] === "pn"){            
            var newPetPic = $("<img>").attr("src", petPhoto[i]["$t"])
              .addClass("img-responsive");
            var newPetPicDiv = $("<div>").addClass("col-xs-6 col-md-4");

            newPetPicDiv.append(newPetPic);
            $(".photoRow").append(newPetPicDiv);
          }
        }

        for(i=0; i<petOptions.length; i++){
          var newPDiv = $("<div>").addClass("col-xs-6 col-md-3 well well-sm");
          var newP = $("<h4>").text(petOptions[i]["$t"]);

          newPDiv.append(newP);
          $("#breedResult").append(newPDiv);
        }
        
        // contact-city+ state+ zip email phone
      }
    })
  };
});