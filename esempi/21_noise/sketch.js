function setup(){
	createCanvas(500, 500, WEBGL)
	noiseDetail(6)
}

function draw() {

	background(240)
	rotateX(-0.5)
	rotateY(mouseX * 0.01)
	noFill()

	const risoluzione = 80
	const spaziatura = 6
	const elevazione = 200

	const offsY = frameCount * 0.01
	const t = 0

	for (let j=-risoluzione/2; j<risoluzione/2; j++) {
		const z = j * spaziatura
		if (j == 0 ) {
			stroke(255, 0, 0)
		} else {
			stroke(180)
		}
		beginShape()
		for (let i=-risoluzione/2; i<risoluzione/2; i++) {
			const x = i * spaziatura
			let y = noise(i * 0.03 + 100, j * 0.04 + offsY, t) * elevazione - elevazione/2
			y = min(y, 0)
			vertex(x, y, z)
		}
		endShape()
	}





}