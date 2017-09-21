

function roll(dice, sides) {
	let results = [];
	
	for (i = 0; i < dice; i++) {
		results.push(Math.floor((Math.random() * sides) + 1));
	
	}
	console.log("You have rolled " +results+"!");
}

function hideButton() {
    let div = document.getElementyById();
    div.style.display = 'none';
}














