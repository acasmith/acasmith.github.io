/////////PHASE 1////////////////////

//Tracks the amount of mouse movement.
var movement = 0;

//Initial animation for the loading bar.
function loadBarAnim1(){
	var theBar = document.getElementById("load-bar");
	theBar.style.width = "0px";
	var counter = 0;
	var myInterval = setInterval(function(){
		if(theBar.style.width === "150px"){
			clearInterval(myInterval);
			document.getElementById("loading-text").innerHTML += "<span id='fail-text'>Failed. Error 1999</span>";
			document.getElementById("warning-box").style.display = "block";
		}
		else{
			theBar.style.width = counter + "px";
			counter += 1;
		}
	},15);
}

//Event handler for mouse movement.
function mouseDetect(){
	movement += 1;
	if(movement > 2500){
		clearMovement();
	}
	else if(movement % 50 === 0){
		loadBarAnim2(Math.floor(movement / 20));
		document.getElementById("warn");
		var hamText = document.getElementById("hamster-text");
		hamText.style.opacity = !hamText.style.opacity ? 1 : hamText.style.opacity;
		hamText.style.opacity -= 0.1;
	}
	else if(movement % 35 === 0){
		failTextAnim();
	}
}

//Removes mouseDetect event handler from all elements.
function clearMovement(){
	var tagList = document.getElementsByTagName("*");
	for(x in tagList){
		tagList[x].onmousemove = null;
		tagList[x].ontouchmove = null;

	}
	document.getElementById("hamster-text").innerHTML = "Thanks! The hamsters are back in their wheels now. The site should be ready to go.";
	document.getElementById("hamster-text").style.opacity = 1;
	document.getElementById("loading-text").innerHTML = "Loading...Successful!";
	document.getElementById("load-bar").style.backgroundColor = "#2ff476";
	var enterBtn = document.getElementById("enter-button");
	enterBtn.style.display = "inline";
	enterBtn.disabled = false;
	enterBtn.onclick = function(){
						loadSite();
					}
	;
}

//Updates the user instructions.
function changeHamsterText(){
	var myBtn = document.getElementById("text-button");
	var theText = document.getElementById("hamster-text");
	if(movement === 0){
		theText.innerHTML = "I'm really sorry to ask, but could you finish loading the site whilst I go catch the hamsters?";
		myBtn.innerHTML = "...sure?";
		movement = 1;
	}
	else{
		myBtn.style.display = "none";
		theText.innerHTML = "&lt;Shake your mouse or swipe around to help load the page!&gt;";
		document.getElementById("loading-text").innerHTML = "<span id='s0'>L</span><span id='s1'>o</span><span id='s2'>a</span><span id='s3'>d</span><span id='s4'>i</span><span id='s5'>n</span><span id='s6'>g</span><span id='s7'>.</span><span id='s8'>.</span><span id='s9'>.</span>";
		var tagList = document.getElementsByTagName("*");
		for(x in tagList){
			tagList[x].onmousemove = mouseDetect;
			tagList[x].ontouchmove = mouseDetect;
		}
	}
	
	
}

//Second loading bar animation.
function loadBarAnim2(currentWidth){
	var theBar = document.getElementById("load-bar");
	theBar.style.width = currentWidth + "px";
	theBar.style.backgroundColor = randomiseColor(theBar.style.backgroundColor);
}

//Animation for the "Loading..." text.
function failTextAnim(){
	for(j = 0; j < 9; j++){
		document.getElementById("s"+j).style.color = document.getElementById("s"+(j+1)).style.color;
	}
	document.getElementById("s9").style.color = randomiseColor();
}	

//Returns a random hex color.
function randomiseColor(currentColor){
	var valArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
	var newColor = "#";
	for(i = 0; i < 6; i++){
		newColor += valArr[Math.floor(Math.random() * 16)];
	}
	return newColor;
}

//Clears load screen, enables main page.
function loadSite(){
	document.getElementById("phase1").style.display = "none";
	document.getElementById("phase2").style.display = "block";
	document.getElementsByTagName("body")[0].style.backgroundColor = "#111111";
	attachCircleEvents();
	attachMainTileEvents();
	switchTileContents();
	
}