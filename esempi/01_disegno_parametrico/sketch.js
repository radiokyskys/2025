function setup(){
	createCanvas(600, 400)
	background(220)
}

function draw() {
	// background(220)
	if(mouseIsPressed) {
		fill(255)
		ellipse(mouseX, mouseY, 50, 50)
		// simmetria
		ellipse(width - mouseX, mouseY, 50, 50)
	}
}