

function roll(dice, sides) {
	var results = [];
	
	for (i = 0; i < dice; i++) {
		results.push(Math.floor((Math.random() * sides) + 1));
	
	}
	console.log("You have rolled " +results+"!");
}
















