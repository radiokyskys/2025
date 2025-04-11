// Inizializza la finestra di disegno
function setup(){
	createCanvas(600, 400)
}

// Disegna un poligono regolare con parametri personalizzabili
function poligono(cx, cy, numeroLati, raggio, rotazione=0) {
	// Rimuove il riempimento del poligono
	noFill()
	// Inizia a disegnare la forma
	beginShape()
	// Calcola e disegna ogni vertice del poligono
	for(let i=0; i<numeroLati; i++) {
		// Calcola l'angolo del vertice corrente
		const a = TAU / numeroLati * i + rotazione
		// Calcola le coordinate x e y del vertice
		const x = cos(a) * raggio
		const y = sin(a) * raggio
		// Aggiunge il vertice alla forma
		vertex(x + cx, y + cy)
	}
	// Chiude la forma collegando l'ultimo vertice al primo
	endShape(CLOSE)
}

// Disegna 15 poligoni rotanti in sequenza
function draw() {
	background(220)
	for (let i=0; i<15; i++) {
		const rot = sin(i * 0.05 - frameCount * 0.06) * 0.75
		poligono(width/2, height/2, 5, 80 + i * 10, rot)
	}
}