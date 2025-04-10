
function setup(){
	createCanvas(600, 600)
}

function draw() {
	const a = mouseX / width * TAU * 2
	const c = cos(a)
	const s = sin(a)
	const t = tan(a)

	const raggio = width * 0.3
	const x = c * raggio
	const y = s * raggio

	const assi = max(width, height)


	// Output
	background(220)
	noStroke()

	fill(0)
	text("ang = " + a.toFixed(2), 50, 50 + 16 * 0 )

	fill(200, 0, 0)
	text("cos = " + c.toFixed(2), 50, 50 + 16 * 1 )

	fill(0, 200, 0)
	text("sin = " + s.toFixed(2), 50, 50 + 16 * 2 )

	fill(0, 0, 200)
	text("tan = " + t.toFixed(2), 50, 50 + 16 * 3 )





	translate(width/2, height/2)

	// Disegno assi
	noFill()
	strokeWeight(1)
	stroke(0, 50)

	line(0, -assi, 0, assi)
	line(-assi, 0, assi, 0)

	// Cerchio
	ellipse(0, 0, raggio * 2)

	// Raggio
	line(0, 0, x, y)

	strokeWeight(3)

	// Angolo
	stroke(0)
	arc(0, 0, 100, 100, 0, a)

	// Coseno
	stroke(200, 0, 0)
	line(0, y, x, y)

	// Seno
	stroke(0, 200, 0)
	line(x, 0, x, y)

	// Tangente
	stroke(0, 0, 200)
	line(x, y, x + y * t, y - x * t)







}