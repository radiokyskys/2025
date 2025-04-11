function setup(){
	createCanvas(600, 400)

}

function draw() {
	background(220)

	translate(width/2, height/2)

	const raggio = 100
	const numeroLati = Math.floor(mouseX / 10)

	// noFill()
	// beginShape()
	// vertex(cos(TAU / 5 * 0) * raggio, sin(TAU / 5 * 0) * raggio)
	// vertex(cos(TAU / 5 * 1) * raggio, sin(TAU / 5 * 1) * raggio)
	// vertex(cos(TAU / 5 * 2) * raggio, sin(TAU / 5 * 2) * raggio)
	// vertex(cos(TAU / 5 * 3) * raggio, sin(TAU / 5 * 3) * raggio)
	// vertex(cos(TAU / 5 * 4) * raggio, sin(TAU / 5 * 4) * raggio)
	// endShape(CLOSE)

	noFill()
	beginShape()
	for(let i=0; i<numeroLati; i++) {
		const a = TAU / numeroLati * i
		const x = cos(a) * raggio
		const y = sin(a) * raggio
		vertex(x, y)
	}
	endShape(CLOSE)
}