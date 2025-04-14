function setup() {
	createCanvas(500, 500)
}

function draw() {
	background(240)

	const A = new Vec2(100, 100)
	const B = new Vec2(360, 180)
	const C = new Vec2(mouseX, mouseY)

	const t = map(cos(frameCount * 0.02), -1, 1, 0, 1)

	const AC = C.sottrai(A).moltiplica(t).somma(A)
	const CB = B.sottrai(C).moltiplica(t).somma(C)
	const P = CB.sottrai(AC).moltiplica(t). somma(AC)


	noFill()
	stroke(0)
	ellipse(A.x, A.y, 30)
	ellipse(B.x, B.y, 30)
	ellipse(C.x, C.y, 30)

	stroke(0, 60)
	line(A.x, A.y, C.x, C.y)
	line(C.x, C.y, B.x, B.y)
	line(AC.x, AC.y, CB.x, CB.y)

	const risoluzione = 18

	stroke(0)
	beginShape()
	for (let i=0; i<risoluzione+1; i++){
		const t = i / risoluzione
		const AC = C.sottrai(A).moltiplica(t).somma(A)
		const CB = B.sottrai(C).moltiplica(t).somma(C)
		const P = CB.sottrai(AC).moltiplica(t). somma(AC)
		vertex(P.x, P.y)
		//ellipse(P.x, P.y, 5)
	}
	endShape()

	fill(0)
	noStroke()
	ellipse(AC.x, AC.y, 10)
	ellipse(CB.x, CB.y, 10)
	ellipse(P.x, P.y, 10)




}


