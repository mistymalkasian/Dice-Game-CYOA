

function roll(sides){
	let results = (Math.floor((Math.random() * sides) + 1));
	console.log("You have rolled "+results+"!");
	return results;

}


function addRollTotals(){

	let roll4 = roll(4)
	let roll6 = roll(6)
	let roll8 = roll(8)
	let roll10 = roll(10)
	let roll12 = roll(12) 
	let roll20 = roll(20)

    let totaledScore = (roll4)+(roll6)+(roll8)+(roll10)+(roll12)+(roll20)

            			

	if (totaledScore == 42)
		alert("Your total score is..."+totaledScore+". YOU HAVE BECOME A MAGICAL UNICORN!");
	else if (totaledScore > 42)
		alert("Your total score is..."+totaledScore+". YOU HAVE SOMEHOW MORPHED INTO A HIDEOUS TROLLFACE!");
	else if (totaledScore == 39 || totaledScore == 40 || totaledScore == 41 )
		alert("Your total score is..."+totaledScore+". What's this? It seems you've won! Congratulations!");
	else if (totaledScore <= 38)
		alert("Your total score is..."+totaledScore+". You have unfortunately failed. Try again!!!"); 

	return totaledScore;  
}	








