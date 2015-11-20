// In order to pass the JSONLint validation, all JSON has to use double quotes.
// But for all the other JS codes, use single quotes will be better (for quoting HTML properties / attributes directly)
// Inconsistency thus appearred.

var bio = {
	"name" : "Felix Li",
	"role" : "Front-end Developer",
	"contacts" : {
		"mobile" : "+852 1234-5678",
		"email" : "liyb.gz@gmail.com",
		"github" : "https://github.com/liyb-gz",
		"twitter" : "LiybGz",
		"location" : "Shanghai"
	},
	"welcomeMessage": "Donec vel diam tempor mi feugiat bibendum nec id odio. Ut nec bibendum lorem. Etiam ultrices, risus nec blandit finibus, nisl purus fringilla metus, sit amet elementum nibh leo ac lorem. Morbi volutpat, diam sed porta iaculis, libero sapien feugiat lorem, eget consectetur dolor mauris consequat eros. Quisque bibendum, ante sed ultrices ultricies, eros ex elementum risus, id tincidunt libero purus sit amet quam. Nullam id ex eleifend, luctus lacus a, blandit nisl. Sed molestie, sapien at pharetra tincidunt, lectus augue dictum magna, non tempus ipsum sem id augue. Nulla luctus scelerisque mi, eu maximus metus eleifend ac.",
	"skills" : [
		"Graphic Designing",
		"HTML Coding",
		"JavaScript Programming",
		"Project Managing"
	],
	"biopic" : "http://lorempixel.com/400/400/people/"
};

var education = {
	"schools" : [{
			"name" : "ABC University",
			"location" : "Guangzhou",
			"degree" : "Bachelor of Engineering",
			"majors" : [
				"Eletrical Engineering",
				"Computer Science"
			],
			"dates" : 20110701,
			"url" : "http://www.abcuniversity.edu.cn"
		},
		{
			"name" : "XYZ University",
			"location" : "Hong Kong",
			"degree" : "Master of Science",
			"majors" : [
				"Information Technology"
			],
			"dates" : 20120701,
			"url" : "http://www.xyzu.hk"
		}
	],
	"onlineCourses" : [{
			"title" : "Coursera Specialization: Learn to Program and Analyze Data with Python",
			"school" : "University of Michigan",
			"date": 20130124,
			"url" : "https://www.coursera.org/specializations/python"
		},
		{
			"title" : "Coursera Specialization: Introduction to Project Management Principles and Practices Specialization",
			"school" : "University of California, Irvine",
			"date": 20140726,
			"url" : "https://www.coursera.org/specializations/project-management"
		},
		{
			"title" : "Coursera Specialization: Interaction Design Specialization",
			"school" : "University of California, San Diego",
			"date": 20150316,
			"url" : "https://www.coursera.org/specializations/interaction-design"
		}
	]
};

var work = {
	"jobs" : [{
			"employer" : "GHJ Company",
			"title" : "Junior Front-end Developer",
			"location" : "Hong Kong",
			"dates" : "2012 - Now",
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur leo ex, eu elementum est auctor egestas. Praesent vehicula elit pretium dolor iaculis fermentum. Praesent interdum gravida velit, at tempus dolor iaculis eget. Donec ante orci, finibus eu libero id, mattis tempus sapien. Fusce dictum leo semper, convallis urna et, porttitor velit. Cras sagittis elit a quam vestibulum vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec condimentum feugiat eros, eget ornare odio vehicula at. Donec varius leo id aliquam elementum. Vestibulum id eros laoreet, tempus ex eu, semper lorem. Vestibulum feugiat fringilla nisl id fermentum. Vestibulum ac dolor vehicula, pretium tellus ut, vehicula orci. Sed non faucibus erat. Nullam in odio metus. Morbi sed ante lacinia libero suscipit efficitur. Cras dignissim, diam a rutrum iaculis, massa lacus faucibus ex, vitae vestibulum mauris justo sed tellus."
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Company Webpage Design",
			"dates" : "2012 - 2013",
			"description" : "Phasellus id maximus orci, eget blandit magna. Pellentesque tempor, elit et scelerisque ultrices, neque nibh auctor odio, vitae porta lacus sapien vel leo. Pellentesque porttitor, risus sed ultricies ornare, augue orci malesuada lacus, in tristique tortor lorem vitae odio. Integer lorem enim, suscipit sit amet mauris sed, mollis maximus sem. Suspendisse nec dui ultricies, faucibus orci elementum, euismod eros. Integer pretium in leo ac rutrum. Sed pulvinar arcu tristique, finibus dui at, placerat justo. Etiam sapien enim, mattis et ante a, interdum bibendum elit. Donec tincidunt cursus nulla at sagittis. Phasellus placerat ornare massa sit amet blandit. Etiam varius malesuada tellus, at rhoncus mauris iaculis et.<br>Cras vel fringilla massa, et fermentum sem. Sed eget dolor tempor, ultricies orci eget, porttitor felis. In nunc est, elementum convallis molestie ut, aliquet in odio. Nulla eu cursus eros. Quisque quis lacus dolor. Morbi porta eleifend tempor. Donec lorem felis, maximus vitae suscipit ac, dictum feugiat mauris. Fusce eu pretium est. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin mattis felis porttitor, dictum felis vel, viverra erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In sed pharetra purus. Ut id porttitor augue, sed pharetra justo. Nullam eget ullamcorper dui.",
			"images" : [
				"http://lorempixel.com/200/200/",
				"http://lorempixel.com/200/201/"
			]
		},
		{
			"title" : "Super Fantastic JavaScript Project",
			"dates" : "2013",
			"description" : "Duis feugiat justo sed felis tempus, nec vestibulum arcu gravida. Aliquam erat volutpat. Sed vitae bibendum metus, sed mattis nunc. Aliquam odio elit, tincidunt et feugiat a, pulvinar id nulla. Mauris ut lorem nibh. In hac habitasse platea dictumst. Nulla vulputate malesuada eros, sed ullamcorper nisi lobortis non. Ut auctor pharetra tellus quis dictum. Ut vestibulum porta volutpat. <br> Proin id mattis nunc. Curabitur quis facilisis neque, at fringilla sem. In pulvinar tincidunt arcu ut malesuada. Donec ultricies lacinia molestie. Nunc porttitor vehicula hendrerit. Pellentesque lobortis lectus a sodales ultrices. Mauris et odio eu ipsum euismod ornare vitae eu nulla. Cras dictum quis dui sed fermentum. Donec eleifend vehicula egestas. Donec accumsan neque eget sem rutrum rhoncus. Vivamus ultricies sapien id leo egestas, quis placerat elit sodales. Ut vel tristique nibh. Aenean ornare, mi vel elementum rhoncus, leo nisl interdum neque, vitae accumsan velit libero at enim. Sed sagittis ultricies nibh, id fringilla dolor pulvinar sit amet.",
			"images" : [
				"http://lorempixel.com/200/203/",
				"http://lorempixel.com/200/202/"
			]
		},
		{
			"title" : "Ultra Wonderful WebApp Project",
			"dates" : "2013 - 2014",
			"description" : "Fusce gravida mauris ac dui sodales sollicitudin. Pellentesque erat tortor, imperdiet ac tempor vel, ultrices eget nibh. Vivamus blandit egestas odio, facilisis porta neque mattis nec. Vivamus sollicitudin felis at dui dignissim rutrum. Proin ullamcorper vehicula metus, vitae mattis erat sagittis in. Ut sit amet pharetra lorem, ac rhoncus quam. Ut auctor risus sed ante rutrum fringilla. Curabitur ut lorem a sem mollis rhoncus consequat sit amet lorem. Morbi vehicula mi nibh, vitae efficitur eros consectetur rutrum. <br> Quisque luctus tortor suscipit lobortis cursus. Suspendisse mattis purus arcu, nec iaculis ex lobortis sit amet. Morbi at cursus magna, nec euismod erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque, orci nec egestas scelerisque, orci nulla auctor elit, a commodo purus urna id sapien. Nullam sodales pretium orci, eget cursus lectus aliquet posuere. Duis orci purus, mattis elementum tristique a, varius a nibh. Nam tellus lectus, facilisis sed justo quis, viverra fringilla neque. Phasellus faucibus, nisl lacinia facilisis pellentesque, sapien quam faucibus diam, dictum imperdiet lacus libero quis ex. Vestibulum vitae rhoncus massa. In eget convallis sem. Sed scelerisque lobortis efficitur. Morbi porta convallis dui eu efficitur.",
			"images" : [
				"http://lorempixel.com/200/204/",
				"http://lorempixel.com/200/205/"
			]
		},
		{
			"title" : "Simply Useful JavaScript Calculator",
			"dates" : "2014 - Now",
			"description" : "Aliquam dignissim, eros vitae malesuada rhoncus, felis dolor varius dui, quis volutpat est lectus sed massa. Ut dictum interdum quam aliquam tincidunt. Nullam sapien leo, rhoncus fringilla eros eget, sollicitudin blandit urna. Pellentesque at tincidunt tortor. Praesent arcu diam, consectetur vitae sem in, congue dignissim nunc. Sed sodales velit a mollis bibendum. In mattis odio eu orci pulvinar posuere. Nulla ut tempor elit. Aenean faucibus imperdiet odio non auctor. Suspendisse vel feugiat diam, ac rutrum arcu. In efficitur maximus sapien, quis feugiat nisl congue non. Morbi at auctor leo, eu convallis risus. Nulla sem urna, rutrum et consectetur ut, lacinia ac leo. Praesent ac turpis porta, pulvinar quam eu, maximus nisi. Sed ligula elit, pretium et fermentum nec, volutpat vitae leo. <br> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse tortor enim, elementum sit amet tortor et, semper faucibus odio. Etiam euismod, magna et accumsan sodales, arcu dolor semper quam, ac rhoncus justo nunc at elit. Praesent ut elit ipsum. Suspendisse fringilla non est id pellentesque. Nam porttitor lectus sed massa scelerisque, eget rutrum nunc maximus. Sed in scelerisque massa. Mauris eget ullamcorper lectus. Ut sed convallis nisi. Nullam sem odio, volutpat id cursus sit amet, porttitor at urna. Etiam tempus non lacus vitae porta. Praesent bibendum neque ut ex iaculis, at porta urna tincidunt. Sed convallis odio in neque rhoncus ornare. Nam dapibus dapibus erat ultrices accumsan.",
			"images" : [
				"http://lorempixel.com/200/206/",
				"http://lorempixel.com/200/207/"
			]
		}
	]
};

// Replace '%data%' in src with str
// Function created for convenience; as all placeholders are '%data%'
function rep(src, str) {
	return src.replace('%data%', str);
}

bio.displayContact = function (place) {
	place.append(rep(HTMLmobile, bio.contacts.mobile));
	place.append(rep(HTMLemail, bio.contacts.email));
	place.append(rep(HTMLtwitter, bio.contacts.twitter));
	place.append(rep(HTMLgithub, bio.contacts.github));
	place.append(rep(HTMLlocation, bio.contacts.location));
}

bio.display = function () {
	$('#header').prepend(rep(HTMLheaderRole, bio.role));
	$('#header').prepend(rep(HTMLheaderName, bio.name));

	bio.displayContact($('#topContacts'));
	bio.displayContact($('#footerContacts'));

	$('#header').append(rep(HTMLbioPic, bio.biopic));
	$('#header').append(rep(HTMLwelcomeMsg, bio.welcomeMessage));
	$('#header').append(HTMLskillsStart);

	bio.skills.forEach( function(skill) {
		$('#skills').append(rep(HTMLskills, skill));
	});
};

education.display = function () {
	education.schools.forEach( function(school) {
		$('#education').append(HTMLschoolStart);
		$('.education-entry:last').append(rep(HTMLschoolName, school.name) + rep(HTMLschoolDegree, school.degree));
		$('.education-entry:last').append(rep(HTMLschoolDates, school.dates));
		$('.education-entry:last').append(rep(HTMLschoolLocation, school.location));
		$('.education-entry:last').append(rep(HTMLschoolMajor, school.majors));
	});

	if (education.onlineCourses.length > 0) {
		$('#education').append(HTMLonlineClasses);
		education.onlineCourses.forEach( function(course) {
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(rep(HTMLonlineTitle, course.title) + rep(HTMLonlineSchool, course.school));
			$('.education-entry:last').append(rep(HTMLonlineDates, course.date));
			$('.education-entry:last').append(rep(HTMLonlineURL, course.url));
		});
	}
};

work.display = function () {
	work.jobs.forEach( function(job) {
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(rep(HTMLworkEmployer, job.employer) + rep(HTMLworkTitle, job.title));
		$('.work-entry:last').append(rep(HTMLworkDates, job.dates));
		$('.work-entry:last').append(rep(HTMLworkLocation, job.location));
		$('.work-entry:last').append(rep(HTMLworkDescription, job.description));
	});
};

projects.display = function () {
	projects.projects.forEach( function(project) {
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(rep(HTMLprojectTitle, project.title));
		$('.project-entry:last').append(rep(HTMLprojectDates, project.dates));
		$('.project-entry:last').append(rep(HTMLprojectDescription, project.description));
		project.images.forEach ( function(image) {
			$('.project-entry:last').append(rep(HTMLprojectImage, image));
		});
	});
};

// Where shall I "encapsulate" this?
var map = {
	"display": function () {
		$('#mapDiv').append(googleMap);
	}
};

bio.display();
education.display();
work.display();
projects.display();
map.display();
