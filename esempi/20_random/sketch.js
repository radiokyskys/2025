function setup(){

	seme = 11
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
	console.log(ran())
}

let seme = 3
function ran(){
	const x = (5 * seme + 1) % 16
	seme = x
	return x / 16
}