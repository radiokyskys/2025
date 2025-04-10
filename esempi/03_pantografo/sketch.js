// Crea una finestra di disegno di 600x400 pixel
function setup(){
	createCanvas(600, 400)
	background(220)
}

function draw() {
	// Disegna solo quando il mouse è premuto
	if (mouseIsPressed) {
		// Trova il centro della finestra
		const cx = width / 2
		const cy = height / 2

		// Calcola la posizione del mouse rispetto al centro
		const mx = mouseX - cx
		const my = mouseY - cy
		const px = pmouseX - cx
		const py = pmouseY - cy
		const num = 20

		// Crea 20 linee con opacità diversa
		for (let i=0; i<num; i++) {
			let f = i * 0.1
			stroke(0, map(i, 0, num, 0, 255))
			line(cx + mx * f, cy + my * f, cx + px * f, cy + py * f)
		}
	}
}