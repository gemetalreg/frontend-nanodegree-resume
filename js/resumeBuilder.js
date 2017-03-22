/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#mapDiv").append(googleMap);

 var firstName = "Andrew";
 var formattedName = HTMLheaderName.replace("%data%", firstName);
 var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");
 $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);


function Job(employer, title, location, dates, description) {
  // should contain an employer, title, location, dates worked and description strings
  this.employer = employer;
  this.title = title;
  this.location = location;
  this.dates = dates;
  this.description = description;
}

var work = {"jobs" : [new Job("TSU", "Student", "Tula", "2014", "Finance and credit")]};

function Project(title, dates, description, images) {
  // should contain title, dates and description strings, and an images array with URL strings for project images
  this.title = title;
  this.dates = dates;
  this.description =  description;
  this.images = images;
}

var projects = {"projects" : [new Project("Portfolio", "2017", "JS Portfolio", [])]};

var bio = {
  // contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings
  "name" : "Andrew Chukanov",
  "role" : "Web Developer",
  "contacts" : {
    "email" : "random@gmail.com",
    "mobile" : "777-666-4444",
    "github" : "https://github.com/random",
    "location" : "Tula"
  },
  "welcomeMessage" : "hello!",
  "skills" : ["Python", "Java", "R"],
  "pic" : "images/fry.jpg"
};

function School(name, location, dates, url, majors) {
  // contains name, location, degree dates and url strings, and amajors array of major strings
  this.name = name;
  this.location = location;
  this.dates = dates;
  this.url = url;
  this.majors = majors;
}

function onlineCourse(title, school, dates, url) {
  // should contain a title, school, dates and url strings
  this.title = title;
  this.school = school;
  this.dates = dates;
  this.url = url;
}

var education = {
  "schools" : [new School("Lycium2", "Tula", "2012", "https://example.com", "engineer")],
  "onlineCourses" : [new onlineCourse("JavaScript Basics", "Udacity", "2017", "https://classroom.udacity.com/courses/ud804")]
};


bio.display = function() {
    /*
  var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
  var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
  var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
  var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';
    */

  var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var contactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  var contactArray = [contactMobile, contactEmail, contactGithub, contactLocation];
  contactArray.forEach(function(contactEl) {
    $("#topContacts").append(contactEl);
    $("#footerContacts").append(contactEl);
  });

  /*
  var HTMLbioPic = '<img src="%data%" class="biopic">';
  var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';
  */

  var bioPic = HTMLbioPic.replace("%data%", bio.pic);
  var welcomeMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(bioPic);
  $("#header").append(welcomeMSG);


  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(val) {
      var formattedSkill = HTMLskills.replace("%data%", val);
      $("#skills").append(formattedSkill);
    });
  }

}

bio.display();

work.display = function () {
  for (var job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);

    var formatEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

    var formatLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formatDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formatDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formatEmp + formatTitle);

    var formatWorkArray = [formatLocation, formatDates, formatDescription];
    formatWorkArray.forEach(function(val){
      $(".work-entry:last").append(val);
    });
  }
}

work.display();

function locationizer(work_object) {
  var workLocations = [];
  work_object.jobs.forEach(function(val) {
    workLocations.push(val.location);
  });
  return workLocations;
}

$("#main").append(internationalizeButton);

function inName(nameAndSurname) {
  var namesArray = nameAndSurname.trim().split(" ");
  var name = namesArray[0];
  return name[0].toUpperCase() + name.slice(1) + " " + namesArray[1].toUpperCase();
}

//var projects = {"projects" : [new Project("Portfolio", "2017", "JS Portfolio", [])]};
/*
function Project(title, dates, description, images) {
  // should contain title, dates and description strings, and an images array with URL strings for project images
  this.title = title;
  this.dates = dates;
  this.description =  description;
  this.images = images;

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
*/
projects.display = function() {
  projects.projects.forEach(function(val) {
    $("#projects").append(HTMLprojectStart);

    var projectTitle = HTMLprojectTitle.replace("%data%", val.title);
    var projectDates = HTMLprojectDates.replace("%data%", val.dates);
    var projectDescription = HTMLprojectDescription.replace("%data%", val.description);

    var projectTextArray = [projectTitle, projectDates, projectDescription];
    projectTextArray.forEach(function(text) {
      $(".project-entry:last").append(text);
    });

    if (val.images.length > 0) {
      val.images.forEach(function(imag) {
      var tempImage = HTMLprojectImage.replace("%data%", imag);
      $(".project-entry:last").append(tempImage);
    });
    }

  });
};

projects.display();

/*
function School(name, location, dates, url, majors) {
  // contains name, location, degree dates and url strings, and amajors array of major strings
  this.name = name;
  this.location = location;
  this.dates = dates;
  this.url = url;
  this.majors = majors;
}

function onlineCourse(title, school, dates, url) {
  // should contain a title, school, dates and url strings
  this.title = title;
  this.school = school;
  this.dates = dates;
  this.url = url;
}

var education = {
  "schools" : [new School("Lycium2", "Tula", "2012", "https://example.com", "engineer")],
  "onlineCourses" : [new onlineCourse("JavaScript Basics", "Udacity", "2017", "https://classroom.udacity.com/courses/ud804")]
};


var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/

education.schools.forEach(function(school) {
  $("#education").append(HTMLschoolStart);

  var schoolName = HTMLschoolName.replace("%data%", school.name);
  var schoolDegree = HTMLschoolDegree.replace("%data%", "Complete");
  var schoolDates = HTMLschoolDates.replace("%data%", school.dates);
  var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
  var schoolMajors = HTMLschoolMajor.replace("%data%", school.majors);

  var schoolArray = [schoolName + schoolDegree, schoolDates, schoolLocation, schoolMajors];
  schoolArray.forEach(function(schoolEl) {
    $(".education-entry:last").append(schoolEl);
  });

});

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

/*// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});*/


