function readMore(){
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var dot = document.getElementById("dot");

if(dot.style.display === "none") {
	dot.style.display="inline";
	dots.innerHTML="...";
	more.style.display="none";
} else {
	dot.style.display="none";
	dots.style.display="none";
	
	more.style.display="inline";

}
}