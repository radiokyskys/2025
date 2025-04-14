const forma = []


function setup() {
	createCanvas(500, 500)

	/*
	forma[0] = new Vec2(0.00, 0.00)
	forma[1] = new Vec2(2.14, 0.00)
	...
	*/

	forma.push(new Vec2(0.00, 0.00))
	forma.push(new Vec2(2.14, 0.00))
	forma.push(new Vec2(2.14, 5.14))
	forma.push(new Vec2(4.53, 2.61))
	forma.push(new Vec2(7.15, 2.61))
	forma.push(new Vec2(4.60, 5.24))
	forma.push(new Vec2(7.48, 10.0))
	forma.push(new Vec2(4.96, 10.0))
	forma.push(new Vec2(3.06, 6.81))
	forma.push(new Vec2(2.12, 7.96))
	forma.push(new Vec2(2.12, 10.0))
	forma.push(new Vec2(0.00, 10.0))




}

function draw() {

	let m1 = new Mat3()
	m1 = m1.trasla(100, 0)
	m1 = m1.scala(sin(frameCount * 0.032) * 20, sin(frameCount * 0.022) * 20)
	m1 = m1.ruota(sin(frameCount * 0.01) * TAU)

	background(240)

	noStroke()
	fill(0)
	text(m1, 30, 30)

	translate(width/2, height/2)
	stroke(0, 30)
	line(0, -height/2, 0, height/2)
	line(-width/2, 0, width/2, 0)

	noFill()
	stroke(0)
	beginShape()
	for (let i=0; i<forma.length; i++) {
		const p = m1.moltiplicaVettore(forma[i])
		vertex(p.x, p.y)
	}
	endShape(CLOSE)



}
