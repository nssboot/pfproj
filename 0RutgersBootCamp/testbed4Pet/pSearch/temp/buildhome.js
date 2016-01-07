$(document).ready(function(){
  //initialize semantic dropdown
  $('.ui.dropdown').dropdown();
  $('.here').on("click",function(){
    for(var i=0; i<window.pets.length; i++){
      var newDiv = $("<option>").text(window.pets[i]["$t"]);
      $(".menu").append(newDiv);
    } 
  });


  $("#breedCheck").focus(function(){
    var petFAPI = "https://api.petfinder.com/breed.list?"
    var petFAPIParam = {
      key: "311acd0ca6ee16428a93eb5dafe77634",
      animal: "dog", //make a select button so user can choose this
      format: "json"
    }

    // 
  });
});

//
  // Variables
  //

  var petfinderAPI = {}; // Object for public APIs
  //var supports = 'querySelector' in document && 'addEventListener' in root && 'classList' in document.createElement('_') && 'localStorage' in root; // Feature test
  var templates = {}; // Object for templates
  //var app = {}; // Object for app nodes
  var lists = {}; // Object for pet lists
  //var original = {}; // Object for original content and page title
  var settings, eventTimeout, localAPI, localAPIid, baseUrl, total;

  // Default settings
  var defaults = {

    // Selectors
    selector: {
      appMain: '[data-petfinder-app="main"]',
      appAside: '[data-petfinder-app="aside"]',
      templateAll: '[data-petfinder-template="all"]',
      templateOne: '[data-petfinder-template="one"]',
      templateAsideAll: '[data-petfinder-template="aside-all"]',
      templateAsideOne: '[data-petfinder-template="aside-one"]',
      async: '[data-petfinder-async]'
    },

    // API Defaults
    key: null,
    shelter: null,
    count: 25,
    status: 'A',
    offset: null,
    //expiration: 60,
    //reverse: false,

    // Class Hooks
    initClass: 'js-petfinder-api',
    allClass: 'js-petfinder-api-all-pets',
    oneClass: 'js-petfinder-api-one-pet',

    /*
    // Miscellaneous
    titlePrefix: '{{name}} | ',
    loading: 'Fetching the latest pet info...',
    noPet: 'Sorry, but this pet is no longer available. <a data-petfinder-async href="{{url.all}}">View available pets.</a>',
    */

    // Lists & Checkboxes
    classPrefix: 'pf-',
    toggleAll: 'Select/Unselect All',

    // Pet photos
    noImage: '',

    
    // Breeds Text
    breedDelimiter: ', ',

    /*
    // Size Text
    sizeUnknown: 'Not Known',
    sizeS: 'Small',
    sizeM: 'Medium',
    sizeL: 'Large',
    sizeXL: 'Extra Large',
    */

    /*
    // Age Text
    ageUnknown: 'Not Known',
    ageBaby: 'Baby',
    ageYoung: 'Young',
    ageAdult: 'Adult',
    ageSenior: 'Senior',
    */

    // Gender Text
    genderUnknown: 'Not Known',
    genderM: 'Male',
    genderF: 'Female',       

    /*
    // Contact Info Missing Text
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactAddress1: '',
    contactAddress2: '',
    contactCity: '',
    contactState: '',
    contactZip: '',
    contactFax: '',
    */

    // Callbacks
    callback: function () {}

  };
