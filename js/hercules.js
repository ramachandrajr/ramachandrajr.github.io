// ==========
// ALL FUNCTIONS
// ==========

/**
 * This function takes one argument a project.
 * Then fills in required data into structure 
 * from the given object's properties.
 * @param {Object} proj
 */

var buildProjectSnippet = function(proj) {

	var makeButton = function(buttonClass, buttonLink, buttonValue) {
		// Make fontawesome icon.
	 	var i = document.createElement("i");
	 	// Add a class.
 	 	i.classList.add("fa", buttonClass);
 	 	// Set attribute
 	 	i.setAttribute("aria-hidden", "true");

	 	var link = document.createElement("a");
 	 	link.classList.add("btn", "btn-default");
 		link.setAttribute("href", buttonLink); 	// LINK DATA
 		link.appendChild(i);
 		some = document.createTextNode(buttonValue);
 		link.appendChild(some);
	 	return link;
	};


 	if ("github" in proj) {
 		var l1 = makeButton("fa-github", proj.github, " Github");
 	}
 	if ("download" in proj) {
 		var l2 = makeButton("fa-download", proj.download, " Download");
 		l2.setAttribute("download", "");
 	}
 	if ("weblink" in proj) {
 		var l3 = makeButton("fa-globe", proj.weblink, " Website");
 	}


 	// Paragraph holding all three buttons.
 	p1 = document.createElement("p");
 	(l1 !== undefined)? p1.appendChild(l1): 0;
 	(l2 !== undefined)? p1.appendChild(l2): 0;
 	(l3 !== undefined)? p1.appendChild(l3): 0; 	

 	// Project Description. 	
 	some = document.createTextNode(proj.desc);	// DESCRIPTION DATA
 	p2 = document.createElement("p");
 	p2.appendChild(some);

 	// Project Name
 	some = document.createTextNode(proj.name);	// NAME DATA
 	hthree1 = document.createElement("h3");
 	hthree1.appendChild(some);

 	// Div holding all portfolio details.
 	div1 = document.createElement("div");
 	div1.classList.add("portfolio-desc");
 	div1.appendChild(hthree1);
 	div1.appendChild(p2);
 	div1.appendChild(p1);

 	// Project image.
 	img1 = document.createElement("img");
 	img1.classList.add("img-responsive"); 	
 	img1.setAttribute("src", proj.img);	// IMAGE SRC DATA

 	// Project wrappers.
 	div2 = document.createElement("div");
 	div2.classList.add("portfolio-inner");
 	div2.appendChild(img1);
 	div2.appendChild(div1);
 	div3 = document.createElement("div");
 	div3.classList.add("col-md-4", "portfolio-item");
	div3.appendChild(div2);

	// Final Append this project.
	projWrap.appendChild(div3);

};




// ==========
// DATA
// ==========

// Projects parent div.
var projWrap = document.getElementById("projects");

// All projects as an array.
var projects = [
	{
		img: "img/projects/num_guess.png",
		name: "Guess Game",
		desc: "This is a guessing game developed on basis of HTML, Bootstrap and javascript. A random number is choosen by the minion, you have to guess the number based on minions replies.",
		github: "https://github.com/ramachandrajr/guess-game",		
		weblink: "https://ramachandrajr.github.io/guess-game/"
	},
	{
		img: "img/projects/html_2_text.png",
		name: "HTML 2 PlainText",
		desc: "We developers usually find it hard sometimes when we need to use absolute plain text but that gets rendered as html. This converter converts all HTML to absolute plain text.",
		github: "https://github.com/ramachandrajr/html2text",
		weblink: "https://ramachandrajr.github.io/html2text/"
	},
	{
		img: "img/projects/lorem_js.png",
		name: "Lorem JS",
		desc: "Lorem JS is a easy to use Javascript library which helps include Lorem Ipsum text. All of this done just by using just the Class Names. Tried and tested in HTML, EJS templates.",
		github: "https://github.com/ramachandrajr/lorem-js",
		download: "https://ramachandrajr.github.io/lorem-js/lorem-js/lorem.min.js",
		weblink: "https://ramachandrajr.github.io/lorem-js/"
	},
	{
		img: "img/projects/todo_list.png",
		name: "jQuery Todo list",
		desc: "A Todo list built based on jquery, save all your todos in this todo list, never forget another task you need to do.",
		github: "https://github.com/ramachandrajr/new-todo",
		weblink: "https://ramachandrajr.github.io/new-todo/"
	},
	{
		img: "img/projects/start_up_land.png",
		name: "Purrfect",
		desc: "A Fictious startup landing page made of Bootstrap, HTML, CSS.",
		github: "https://github.com/ramachandrajr/startup-landing-page",
		weblink: "https://ramachandrajr.github.io/startup-landing-page"
	},
	{
		img: "img/projects/text_blog.png",
		name: "Text blog",
		desc: "A front-end design for a text based blog, really simplistic yet elegant design. Only HTML and CSS are used and it's responsive too",
		github: "https://github.com/ramachandrajr/text-blog",
		weblink: "https://ramachandrajr.github.io/text-blog"
	},
	{
		img: "img/projects/boot_gallery.png",
		name: "Image Gallery",
		desc: "A Simplistic bootstrap based image gallery.",
		github: "https://github.com/ramachandrajr/image-gallery",
		weblink: "https://ramachandrajr.github.io/image-gallery/"
	},
	{
		img: "img/projects/photo_gallery.png",
		name: "Photo Gallery",
		desc: "A Really simplistic photo gallery design based on plain CSS no bootstrap. Really light weight if you choose the right photographs.",
		github: "https://github.com/ramachandrajr/photo-blog",
		weblink: "https://ramachandrajr.github.io/photo-blog/"

	}

];




// ==========
// RUNNING THE SNIPPETS
// ==========

// Iterate over all projects in projects array.
for (var i = 0; i < projects.length; i++) {
	// Build a project for each one of them.
	buildProjectSnippet(projects[i]);	
}

