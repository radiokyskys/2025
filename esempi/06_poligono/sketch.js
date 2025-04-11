// Crea un canvas di 600x400 pixel
function setup(){
	createCanvas(600, 400)
}

function draw() {
	// Imposta uno sfondo grigio chiaro
	background(220)

	// Sposta l'origine al centro del canvas
	translate(width/2, height/2)

	// Imposta il raggio del poligono
	const raggio = 100
	// Calcola il numero di lati in base alla posizione del mouse
	const numeroLati = Math.floor(mouseX / 10)

	// noFill()
	// beginShape()
	// vertex(cos(TAU / 5 * 0) * raggio, sin(TAU / 5 * 0) * raggio)
	// vertex(cos(TAU / 5 * 1) * raggio, sin(TAU / 5 * 1) * raggio)
	// vertex(cos(TAU / 5 * 2) * raggio, sin(TAU / 5 * 2) * raggio)
	// vertex(cos(TAU / 5 * 3) * raggio, sin(TAU / 5 * 3) * raggio)
	// vertex(cos(TAU / 5 * 4) * raggio, sin(TAU / 5 * 4) * raggio)
	// endShape(CLOSE)

	// Disegna un poligono regolare
	noFill()
	beginShape()
	for(let i=0; i<numeroLati; i++) {
		// Calcola l'angolo e le coordinate di ogni vertice
		const a = TAU / numeroLati * i
		const x = cos(a) * raggio
		const y = sin(a) * raggio
		vertex(x, y)
	}
	endShape(CLOSE)
}