//////////////// Phase 2 //////////////

//Used to track main-contents text.
var tileCounter = 0;

function circleHoverFunction(){
	this.style.backgroundColor = "#AEBCC7";
}

function circleClearHover(){
	this.style.backgroundColor = "#FFFFFF";
}

function circleOnMouseDown(){
	this.style.backgroundColor = "#B7B7B7";
	
}
		
function attachCircleEvents(){
	var circleArr = ["left-tile", "center-tile", "right-tile"];
	for(x in circleArr){
		var element = document.getElementById(circleArr[x]);
		element.onmouseover = circleHoverFunction;
		element.onmouseout = circleClearHover;
		element.onmousedown = circleOnMouseDown
		element.onmouseup = circleClearHover;
	}
}

function attachMainTileEvents(){
	var arrowArr = ["left-arrow", "right-arrow"];
	for(x in arrowArr){
		document.getElementById(arrowArr[x]).onclick = switchTileContents;
	}
}

function switchTileContents(){
	var bioText = "<h2>Bio:</h2>" +
					"Hello! I'm Adam Smith. Aspiring web developer, current CS undergrad at the Open University." +
					"<br>" +
					"<br>Thanks for taking the time to check out this page!" +
					"<br>" +
					"<br>" +
					"I came across F&C whilst looking for collaborative opportunities to develop my skills." +
					"<br>I love my degree course, but like many degrees it's filled with knowledge and light on practicals; I was drawn to programming to build things and solve problems." +
					"<br>Finding the Gitter was amazing. I've gotten over my fear of CSS, solved peoples gnarly katas and met some really great people within a few weeks." +
					"<br>" +
					"<br>You've got something cool going on here, I'd love to get involved in the course! :)" +
					"<br>" +
					"<br>";
	
	
	var qualitiesText = "<h3>Some things about me:</h3>" +
						"<ul>" +
							"<li>Motivated and Self-disciplined: Self-taught musician. Similarly, all of the technologies I know, except for Java, come from independent learning/moocs.</li>" +
							"<li>Determined and dedicated: Ex-hardcore gamer. I know what a 16 hours a day in a stressful team environment looks like.</li>" +
							"<li>People and community minded: I've helped setup and run several gaming communities from small (<5 people) to large (100+).</li>" +
						"</ul>" +
						"<br>" +
						"<br><h3>Technologies I'm familiar with:</h3>" +
						"<ul>"+
							"<li>Back-end: Java, PHP, Python, a little C#</li>" +
							"<li>Front-end: JS, CSS, HTML</li>" +
							"<li>Libraries/Frameworks: JQuery, Bootstrap</li>" +
						"</ul>" +
						"<br>You can find my HackerRank profile <a href='https://www.hackerrank.com/Rhaenn' class='content-link' target='blank'>here</a>, and my (old!) portfolio <a href='http://adam-smith.me' class = 'content-link' target='blank'> here.</a>";
	
	
	if(tileCounter === 0){
		document.getElementById("main-content").innerHTML = bioText;
		tileCounter += 1;
	}
	else if (tileCounter === 1){
		document.getElementById("main-content").innerHTML = qualitiesText;
		tileCounter = 0;
	}
}