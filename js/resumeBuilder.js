/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = HTMLheaderName.replace("%data%", firstName);
 var formattedRole = HTMLheaderRole.replace("%data%", "Web developer");
 $("#header").prepend(formattedName);
 $("#header").append(formattedRole);

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
  "pic" : "images/clipart-babochka.png"
};
$("#main").append(bio["name"]);

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
  "onlineCourses" : [new onlineCourses("JavaScript Basics", "Udacity", "2017", "https://classroom.udacity.com/courses/ud804")]
};

$("#main").append(work.position);
$("#main").append(education["name"]);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
  }
}


