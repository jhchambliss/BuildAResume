/*
    Jackie Chambliss
    Novemeber 30, 2020
    WEB 115
    Final Project
    projectJS.html
*/

// AAAARGHHH!!!!! FORM VALIDATION1111!!!!1111


var resume = document.resume_form;

var $ = function (id) {
    return document.getElementById(id); // $('quarters').value = quarters;
}

/* -- Format Date Picker Object -- */ // if I can 
function convertDate(date) {

   var month = date.getMonth();
   var year = date.getFullYear();

   newDate = (month + " " + year);

   return newDate;
}


/* -- Resume Header Section -- */
function formatHeader() {

    var fname = resume.fname.value;
    var lname = resume.lname.value;
    var city = resume.city.value;
    var state = resume.state.value;
    var zip = resume.zip.value;
    var phone = resume.phone.value;
    var email = resume.email.value;
    var web = resume.weblink.value;

    header = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
    header += ("<h1>" + fname + " " + lname + "<h1>\n");
    header += ("<h3>" + city + ", " + state + " " + zip + "</h3>\n");
    header += ("<ul>"+ "<li>" + phone + "</li>\n" + "<li>" + email + "</li>\n");

    if (web != '') {
        header += ("<li>" + web + "</li>\n");
    }
    header += ("</ul>\n");

    return header;
}

/* -- Resume Skills Section -- */
function formatProfessionalSkills() {

    var skillSet = ("<h3>Professional Skills:</h3>\n<ul>");
    var checks = resume.getElementsByClassName('skills');
    for (var i=0; i < checks.length; ++i) {
        if (checks[i].checked) {
            skillSet += ("<li>" + checks[i].value + "</li>\n");
        }
    }
    skillSet += ("</ul>\n");

    return skillSet;
}

/* -- Resume Technical Expertise Section -- */
function formatTechnicalSkills() {

    var technicalSkills = ("<h3>Technical Skills:</h3>\n<ul>");
    var checks = resume.getElementsByClassName('technical');
    for (var i=0; i < checks.length; ++i) {
        if (checks[i].checked) {
            technicalSkills += ("<li>" + checks[i].value + "</li>\n");
        }
    }
    technicalSkills += ("</ul>\n");

    return technicalSkills;
}


/* -- Resume Education Section -- */
function formatEducation() {

    var school1 = resume.school1.value;
    var school_city1 = resume.school_city1.value;
    var program1 = resume.program1.value;
    var graduation1 = resume.graduation1.value; // fix how date is represented
    var school2 = resume.school2.value;
    var school_city2 = resume.school_city2.value;
    var program2 = resume.program2.value;
    var graduation2 = resume.graduation2.value;

    // graduation1 = convertDate(graduation1);
    // graduation2 = convertDate(graduation2);

    if ($('current_school').checked) {
        graduation1 = (graduation1 + " <i>anticipated</i>");
    }

    education = ("<h3>Education:</h3>\n");
    education += ("<p>" + school1 + ", " + school_city1 + " -- " + program1 + " (" + graduation1 + ")</p>\n");

    if (school2 != '') {
        education += ("<p>" + school2 + ", " + school_city2 + " -- " + program2 + " (" + graduation2 + ")</p>\n");
    }

    return education;
}


/* -- Resume Employment History Section -- */
function formatEmployment() {

    var employer1 = resume.employer1.value;
    var position1 = resume.position1.value;
    var employment_start1 = resume.employment_start1.value;
    var employment_end1 = resume.employment_end1.value;
    var details1 = resume.details1.value;
    var employer2 = resume.employer2.value;
    var position2 = resume.position2.value;
    var employment_start2 = resume.employment_start2.value;
    var employment_end2 = resume.employment_end2.value;
    var details2 = resume.details2.value;
    var employer3 = resume.employer3.value;
    var position3 = resume.position3.value;
    var employment_start3 = resume.employment_start3.value;
    var employment_end3 = resume.employment_end3.value;
    var details3 = resume.details3.value;

    employment = ("<h3>Employment History:</h3>");
    employment += ("<p><span>" + position1 + "</span><span>" + employment_start1);

    if ($('current_job').checked) {
        employment += ("</span></p>\n");
    } else {
        employment += (+ " -- " + employment_end1 + "</span></p>\n");
    }

    employment += ("<p>" + employer1 + "</p>\n");
    employment += ("<p>" + details1 + "</p><br>\n");

    employment += ("<p><span>" + position2 + "</span><span>" + employment_start2 + " -- " + employment_end2 + "</span></p>\n");
    employment += ("<p>" + employer2 + "</p>\n");
    employment += ("<p>" + details2 + "</p><br>\n");

    employment += ("<p><span>" + position3 + "</span><span>" + employment_start3 + " -- " + employment_end3 + "</span></p>\n");
    employment += ("<p>" + employer3 + "</p>\n");
    employment += ("<p>" + details3 + "</p><br>\n");

    return employment;
}



/* -- Resume References Section -- */
function formatReferences() {

    references = resume.references.value;
    referenceHeader = ("<h3>Professional References:</h3>\n");
    references = (referenceHeader + "<p>" + references + "</p>\n");
    references += ("</body>\n</html>");

    return references;
}

/* -- Buttons Section -- */
    // Reset button?

/* -- New Window -- */
function myWindow()
{

    /* -- VALIDATE EMAIL ADDRESS -- */
    
    header = formatHeader();
    references = formatReferences();
    skills = formatProfessionalSkills();
    technical = formatTechnicalSkills();
    education = formatEducation();
    employment = formatEmployment();

    resumeWindow = window.open('about:blank','myPop','width=800,height=400,left=100,top=100');
    resumeWindow.document.write(header + skills + technical + education + employment + references);
}