function setup() {
	createCanvas(500, 500)
}

function draw() {

	const p1 = new Vec2(0, 100)
	const p2 = new Vec2(0, 0)
	const p3 = new Vec2(50, 0)

	let m1 = new Mat2()
	m1 = m1.scala(2, 2)
	m1 = m1.ruota(mouseX * 0.01)

	const t1 = m1.moltiplicaVettore(p1)
	const t2 = m1.moltiplicaVettore(p2)
	const t3 = m1.moltiplicaVettore(p3)


	push()
	strokeWeight(1)
	background(240)
	translate(width/2, height/2)
	stroke(0, 30)
	line(0, -height/2, 0, height/2)
	line(-width/2, 0, width/2, 0)

	noFill()
	stroke(0)
	beginShape()
	vertex(p1.x, p1.y)
	vertex(p2.x, p2.y)
	vertex(p3.x, p3.y)
	endShape()

	strokeWeight(3)
	beginShape()
	vertex(t1.x, t1.y)
	vertex(t2.x, t2.y)
	vertex(t3.x, t3.y)
	endShape()
	pop()

	fill(0)
	text(m1, 30, 30)

}
