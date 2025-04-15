let seed = 10

function setup(){
	createCanvas(600, 500)
}

function mousePressed() {
	seed = millis()
	console.log(seed)
}

function draw() {
	background(255, 200, 200)
	randomSeed(seed)
	ramo(width/2, height, -PI/2, 75, 15)
}

function ramo(x, y, angolo, lunghezza, iterazione) {
	const dx = x + cos(angolo) * lunghezza
	const dy = y + sin(angolo) * lunghezza

	stroke(0)
	strokeWeight(lunghezza * 0.15)
	line(x, y, dx, dy)

	if (iterazione > 0) {
		if (random() < 0.94) {
			ramo(dx, dy, angolo - random(0.3, 0.5), lunghezza * random(0.7, 0.9), iterazione - 1)
		}
		if (random() < 0.94) {
			ramo(dx, dy, angolo + random(0.2, 0.5), lunghezza * random(0.7, 0.9), iterazione - 1)
		}
	} else {
		noStroke()
		fill(255)
		ellipse(dx, dy, 5, 5)
	}
}
