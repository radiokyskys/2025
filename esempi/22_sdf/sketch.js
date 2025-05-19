function setup(){
	createCanvas(500, 500)

}



function draw() {

	const lato = 48
	const pix = 10

	noStroke()
	background(220)
	for (let j=0; j<lato; j++) {
		for (let i=0; i<lato; i++) {
			const u = i / (lato - 1) * 2 - 1
			const v = j / (lato - 1) * 2 - 1
			const dist = sqrt(u*u + v*v)
			const valore = sin(dist * 8.0 - frameCount * 0.05) * 0.5 + 0.5
			const gamma = Math.pow(valore, 1 / 1.5)
			fill(mouseIsPressed ? gamma * 255 : valore * 255)
			rect(i * pix + 10, j * pix + 10, pix, pix)
		}
	}
}
