let slider_r, slider_R
let slider_s, slider_num


function setup(){
	createCanvas(500, 500)
	background(220)

	slider_r = createSlider(0, 200, 100, 1)
	slider_r.position(20, 20)
	slider_r.size(200)

	slider_R = createSlider(0, 200, 100, 1)
	slider_R.position(20, 40)
	slider_R.size(200)

	slider_s = createSlider(-16, 16, 1, 1)
	slider_s.position(20, 60)
	slider_s.size(200)

	slider_num = createSlider(16, 1024, 256, 1)
	slider_num.position(20, 80)
	slider_num.size(200)


}

function draw() {
	background(220)
	translate(width/2, height/2)

	const num = slider_num.value()
	const R = slider_R.value()
	const r = slider_r.value()

	beginShape()
	noFill()
	stroke(0, 128)

	for (let i=0; i<num; i++) {
		const t = i / num * TAU
		const s = t * slider_s.value()


		const x = cos(t) * R + cos(s) * r
		const y = sin(t) * R + sin(s) * r

		// vertex(x, y)
		ellipse(x, y, 100, 100)
	}

	endShape(CLOSE)
}