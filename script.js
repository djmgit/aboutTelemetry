document.getElementById("menu").addEventListener("click", function() {
	document.getElementById("sidebar").style.width = "60%";
	document.getElementById("menu").style.display = "none";
});

document.getElementById("close").addEventListener("click", function() {
	document.getElementById("sidebar").style.width = "0px";
	document.getElementById("menu").style.display = "block";
});

window.addEventListener("resize", function() {
	//console.log(window.innerWidth);
	if (window.innerWidth > 701) {
		document.getElementById("sidebar").style.width = "22%";
		document.getElementById("close").style.display = "none";
		document.getElementById("menu").style.display = "none";	
	} else {
		document.getElementById("sidebar").style.width = "0px";
		document.getElementById("close").style.display = "block";
		document.getElementById("menu").style.display = "block";
	}
}); 