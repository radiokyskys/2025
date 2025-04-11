function setup(){
	createCanvas(600, 400)
}

function draw() {
	background(220)

	const cx = width/2 + sin(frameCount * 0.009) * width * 0.4
	const cy = height/2 + cos(frameCount * 0.007) * height * 0.4
	noStroke()
	fill(0)
	lineaTratteggiata(mouseX, mouseY, cx, cy, 16)

	noFill()
	stroke(255,0,0)
	ellipse(cx, cy, 20, 20)
	ellipse(mouseX, mouseY, 20, 20)
}

function lineaTratteggiata(x1, y1, x2, y2, distanza){
	const dx = x2 - x1
	const dy = y2 - y1
	const num = floor(sqrt(dx * dx + dy * dy) / distanza)
	for (let i=0; i<num+1; i++) {
		ellipse(x1 + dx * i / num , y1 + dy * i / num, distanza * 0.5)
	}
}