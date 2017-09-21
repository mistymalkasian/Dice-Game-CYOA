

function roll(dice, sides) {
	let results = [];
	
	for (i = 0; i < dice; i++) {
		results.push(Math.floor((Math.random() * sides) + 1));
	
	}
	console.log("You have rolled " +results+"!");
}


function determineWinOrLose(totaledScore){
		let roll4 = (roll(1,4))
		let roll6 = (roll(1,6))
		let roll8 = (roll(1,8))
		let roll10 = (roll(1,10))
		let roll12 = (roll(1,12))
		let roll20 = (roll(1,20))
			 function addedRollTotals(roll4, roll6, roll8, roll10, roll12, roll20){
			addedRollTotals=roll4+roll6+roll8+roll10+roll12+roll20
		}

	if  (addedRollTotals < 42)	

		alert("Sorry, you lost! Play again!");
	else
		alert("You won!!!");
}			
	


determineWinOrLose()








