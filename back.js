var css = document.querySelector("h3");
var color1 = document.querySelector(".a");

var body = document.getElementsByName("x");
function change () {for(var i = 0; i < body.length; i++){
		body[i].style.backgroundColor = color1.value;
	}}
color1.addEventListener("input",change);
/*function Grad() {body.style.background="linear-gradient(to right," + color1.value +","+color2.value+")";
css.textContent = body.style.background + ";";
}



color1.addEventListener("input",Grad);
color2.addEventListener("input",Grad);
*/
/*function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}*/
var audio1 = document.getElementById("audio");

//Example of an HTML Audio/Video Method

function playAudio() {
  audio1.play();
}
