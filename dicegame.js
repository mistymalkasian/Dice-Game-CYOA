

function roll(dice, sides){
	let results = [];
	
	for (i = 0; i < dice; i++) {
		results.push(Math.floor((Math.random() * sides) + 1));
	
	}
	console.log("You have rolled "+results+"!");
}


function determineOutcome(totaledScore){

			 function addedRollTotals(roll4, roll6, roll8, roll10, roll12, roll20){
			 	let roll4 = roll(1,4)
				let roll6 = roll(1,6)
				let roll8 = roll(1,8)  
				let roll10 = roll(1,10) 
				let roll12 = roll(1,12) 
				let roll20= roll(1,20) 

                roll4+roll6+roll8+roll10+roll12+roll20

         return addedRollTotals(roll4), (roll6), (roll8), (roll10), (roll12), (roll20)       	
		}
		

	if (addedRollTotals == 42)	
		alert("YOU HAVE BECOME A MAGICAL UNICORN!");
	else if (addedRollTotals > 42)
		alert("YOU HAVE BECOME A HIDEOUS TROLLFACE MEME!");
	else if (addedRollTotals < 39)
		alert("You lose! Try again!!!");
	else
		alert("glorb!") 

}	

function addedRollTotals(roll4, roll6, roll8, roll10, roll12, roll20){
			 	let roll4 = roll(1,4)
				let roll6 = roll(1,6)
				let roll8 = roll(1,8)  
				let roll10 = roll(1,10) 
				let roll12 = roll(1,12) 
				let roll20= roll(1,20) 

                roll4+roll6+roll8+roll10+roll12+roll20

		}


determineOutcome(addedRollTotals)






	







