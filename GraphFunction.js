//By Ad (Liopluerodon on GitHub)
//Place this function in a for loop, so the iterating variable can be used for the x-axis
//To have a flat x-axis, set the y-value to 0
function graph(x, y, left, height, color = "black") {
	let pixels = [];
	pixels[x] = document.createElement("p");
	pixels[x].style.backgroundColor = color;
	pixels[x].className = "point";
	pixels[x].style.top = height-y+"px";
	pixels[x].style.left = x+left+"px";
	document.body.appendChild(pixels[x]);
}