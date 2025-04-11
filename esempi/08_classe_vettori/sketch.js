function setup() {
	createCanvas(500, 500)
}

function draw() {
	background(230)

	const centro = new Vec2(width/2, height/2)
	centro.disegna(color(255,0,0))

	const m = new Vec2(mouseX, mouseY)
	//m.disegna(color(0, 0, 255))

	const mc = m.sottrai(centro)
	mc.disegna(color(0, 0, 255), centro)

	const mcInverso = new Vec2(-mc.x, -mc.y)
	mcInverso.disegna(color(0, 0, 255, 100), centro)

	const mcRot1 = new Vec2(-mc.y, mc.x)
	mcRot1.disegna(color(0, 0, 255, 100), centro)

	const mcRot2 = new Vec2(mc.y, -mc.x)
	mcRot2.disegna(color(0, 0, 255, 100), centro)

	const v = new Vec2(100, -100)
	v.disegna(color(255, 127, 0), m)


}


