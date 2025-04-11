function setup(){
	createCanvas(600, 400)

}

function poligono(cx, cy, numeroLati, raggio, rotazione=0) {
	noFill()
	beginShape()
	for(let i=0; i<numeroLati; i++) {
		const a = TAU / numeroLati * i + rotazione
		const x = cos(a) * raggio
		const y = sin(a) * raggio
		vertex(x + cx, y + cy)
	}
	endShape(CLOSE)
}

function draw() {
	background(220)
	for (let i=0; i<15; i++) {
		const rot = sin(i * 0.05 - frameCount * 0.06) * 0.75
		poligono(width/2, height/2, 5, 80 + i * 10, rot)
	}
}