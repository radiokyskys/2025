const forma = []
function setup() {
	createCanvas(500, 500)
	forma.push(new Vec2(10, 10))
	forma.push(new Vec2(100, 10))
	forma.push(new Vec2(100, 80))
	forma.push(new Vec2(10, 80))
}

function draw() {

	const m1 = new Mat3()
	const m2 = new Mat3().ruota(0.5).trasla(200, 0).scala(2, 2)
	const m2i = m2.inverti()

	const cursore = new Vec2(mouseX, mouseY)
	const cursore2 = m2.moltiplicaVettore(cursore)
	const cursore2i = m2i.moltiplicaVettore(cursore)


	background(240)
	fill(255)
	disegna(forma, m1)
	disegna(forma, m2)
	fill(0)
	ellipse(cursore.x, cursore.y, 10)
	ellipse(cursore2.x, cursore2.y, 10)
	ellipse(cursore2i.x, cursore2i.y, 10)
}

function disegna(f, mat) {
	beginShape()
	for (let i=0; i<f.length; i++){
		const p = mat.moltiplicaVettore(f[i])
		vertex(p.x, p.y)
	}
	endShape(CLOSE)
}
