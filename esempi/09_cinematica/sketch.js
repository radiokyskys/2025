let posizione, destinazione

function setup() {
	createCanvas(500, 500)
	posizione = new Vec2(width/2, height/2)
	destinazione = new Vec2(100, 50)
}

function draw() {

	destinazione.x = mouseX
	destinazione.y = mouseY

	const delta = destinazione.sottrai(posizione)
	posizione = posizione.somma(delta.moltiplica(0.05))

	background(230)

	fill(255,0,0)
	noStroke()
	ellipse(posizione.x, posizione.y, 30)

	noFill()
	stroke(255,0,0)
	ellipse(destinazione.x, destinazione.y, 40)

	delta.moltiplica(0.3).disegna(color(0,0,255), posizione)
}
