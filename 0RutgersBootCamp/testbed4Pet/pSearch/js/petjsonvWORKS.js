
$(document).ready(function () 
{
    $.getJSON('https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog&breed=Beauceron&location=08536&output=basic&format=json&callback=?')
    
    file:///C:/Users/Rajsarma/0Rutgers_Bootcamp/testbedforPetProject/petSearch/$.getJSON('https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog&breed=Beauceron&location=08536&output=basic&format=json&callback=?%27)
        .success
            (function(pfAPIdata) 
                {  
                    alert('Data retrieved!'); 
                    alert('this is data pfAPIdata  ' + pfAPIdata);
                    alert('this is data pfAPIdata.petfinder  ' + pfAPIdata.petfinder);
                    alert('this is data pfAPIdata.pets  ' + pfAPIdata.petfinder.pets);                    
                    alert('this is data pfAPIdata.pets.pet [0] ' + pfAPIdata.petfinder.pets.pet["i"]["t"]);
           /*
                    var count;
                    filtered = $.grep(pfAPIdata, function(pet) {
                        return (pet['"t":"hasShots"'] !==undefined)
                    });
            
                    count = filtered length; 
                    alert('filtered length ' + filtered.length);
                 

                    $(pfAPIdata.petfinder.pets).each(function (i) {
                        var d = data.petfinder.pets.pet[i]["t"]};
                        $.each(d, function (k, v) { //get key and value of object
                            $("#stage").append("<p>"+k + ":" + v+"</p>");
                        });
                    })

                     */ 

                    /*

                    $.each(pfAPIdata.petfinder{pets.pet[]}, function(index, element) {                        
                    alert('this pet  ' + pet['"t":"hasShots"'])
                    },
                     
                       alert('this is iteration data ');
                       {console.log(pfAPIdata, index, element);}
                       {console.log(petfinder.pets.pet);} 
                       $('#stage').html('<p> Name: ' + element.petfinder.pets.pet + '<p>'),
                       $('#stage').append($('<p> Breed: ' + elememt.petfinder.pets.pet.breed + '<p>'));
                    */                     
                    
                })

        .error
            (function(err) 
                { alert('Error retrieving data!'); 
                }
            );   
});

/*

filtered = $.grep(result, function(value) {
    return (value["MNGR_NAME"] !== undefined)
});
count = filtered.length


                $('#stage').html('<p> Name: ' + jd.name + '</p>');
                $('#stage').append('<p>Age : ' + jd.age+ '</p>');
                $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
*/