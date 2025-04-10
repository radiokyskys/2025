function setup(){
	createCanvas(windowWidth, windowHeight)
	background(0)
}

function draw() {

	translate(width/2, height/2)

	const d = map(cos(frameCount * 0.0314), -1, 1, 50, 200)
	const x = sin(frameCount * 0.0143) * width * 0.3
	const y = sin(frameCount * 0.0179 + 0.4) * height * 0.3

	const r = map(cos(frameCount * 0.051), -1, 1, 0, 255)
	const g = map(cos(frameCount * 0.047), -1, 1, 0, 255)
	const b = map(cos(frameCount * 0.041), -1, 1, 0, 255)

	// const r = noise(frameCount * 0.031) * 255
	// const g = noise(frameCount * 0.032) * 255
	// const b = noise(frameCount * 0.033) * 255

	noStroke()
	fill (r, g, b)
	ellipse(x, y, d)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
	background(0)
}