
$(document).ready(function () 
{
    $.getJSON('https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog&breed=Beauceron&location=08536&output=basic&format=json&callback=?')
        
    //$.getJSON('https://api.petfinder.com/pet.find?key=311acd0ca6ee16428a93eb5dafe77634&animal=dog&breed=Beauceron&location=08536&output=basic&format=json&callback=?%27)

        .success
            (function(pfAPIdata) 
                { 
                    alert('Data retrieved!'); 
                    alert('this is data pf pf  ' + pfAPIdata.petfinder.pets.pet[0]);
                    $.each(pfAPIdata, function(index, element) {
                        for(var i=0; i<pet.length; i++) {
                            alert('this pet  ' + i  + pet['"t":"hasShots"']);
                        }
                        alert('this is iteration data ');
                         {console.log(pfAPIdata, index, element);}
                      /* {console.log(petfinder.pets.pet);} 
                        $('#stage').html('<p> Name: ' + element.petfinder.pets.pet + '<p>'),
                        $('#stage').append($('<p> Breed: ' + elememt.petfinder.pets.pet.breed + '<p>'));
                        */      

                        //.error
                        //(function(err) 
                            //{ alert('Error retrieving data!'); 
                            //}

                    });            

                });   

});

/*
                $('#stage').html('<p> Name: ' + jd.name + '</p>');
                $('#stage').append('<p>Age : ' + jd.age+ '</p>');
                $('#stage').append('<p> Sex: ' + jd.sex+ '</p>');
*/