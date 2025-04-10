let img1, img2

function setup(){
	createCanvas(600, 400)
	background(220)
	img1 = loadImage("cat.png")
	img2 = loadImage("dog.png")
}

function draw() {

	background(255, 80)

	const base = constrain(mouseY, 100, height)
	const aspetto1 = img1.width / img1.height
	const aspetto2 = img2.width / img2.height
	const altezza1 = base / aspetto1
	const altezza2 = base / aspetto2
	image(img1, 0, 0, base, altezza1)
	image(img2, width - base, 0, base, altezza2)
}
