
const curve = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	for (let i=0; i<20; i++) {
		curve.push(new Curva())
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(220)

	// Vettore "mouse"
	const m = new Vec2(mouseX, mouseY)

	curve.forEach( (c, i) => {
		const damping = map(i, 0, curve.length, 0.94, 0.84)
		c.update(m, damping, 1)
		const col = color(0, map(i, 0, curve.length, 100, 0))
		c.draw(col)
	})

}



class Curva {
	constructor() {
		this.pos = new Vec2(0, 0)   // posizione attuale
		this.forza = new Vec2(0, 0) // forza
		this.coda = [] // Array che conterrà 100 elementi per tracciare la coda
	}

	update(mouse, damping, loopCount) {
		for (let i=0; i<loopCount; i++) {
			const delta = mouse.sottrai(this.pos).moltiplica(loopCount * 0.01)
			this.forza = this.forza.somma(delta)
			this.forza = this.forza.moltiplica(damping) // smorziamo la forza
			this.pos = this.pos.somma(this.forza)

			// Aggiungiamo un elemento (una copia della posizione attuale) alla “coda”...
			this.coda.push(this.pos.copia())
			// ...e togliamo l'elemento più vecchio (shift)
			if (this.coda.length > 200) this.coda.shift()
		}
	}

	draw(color) {
		strokeCap(ROUND)
		strokeJoin(ROUND)
		strokeWeight(2)
		noFill()
		stroke(color)

		// Disegnamo la coda
		beginShape()
		// Un altro modo per fare fare una loop è
		// utilizzare forEach invece di for
			this.coda.forEach( v => vertex(v.x, v.y))
		endShape()
	}

}
