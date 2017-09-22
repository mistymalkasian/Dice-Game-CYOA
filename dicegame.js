


let score = [];


function roll(sides){
	let results = (Math.floor((Math.random() * sides) + 1));
	console.log("You have rolled "+results+"!");
    score.push(results);
}

function endgameMessage(){

			let totalScore = score[0]+score[1]+score[2]+score[3]+score[4]+score[5];

	if (totalScore == 42){
		alert("Your total score is..."+totalScore+". HOW AMAZING!!! YOU HAVE BECOME A MAGICAL UNICORN!");
	}
	
	else if (totalScore > 42){
		alert("Your total score is..."+totalScore+". You apparently stink at this game.");
	}
	
	else if (totalScore == 39 || totalScore == 40 || totalScore == 41 ){
		alert("Your total score is..."+totalScore+". What's this? It seems you've won! Congratulations!");
	}
	
	else if (totalScore <= 38){
		alert("Your total score is..."+totalScore+". You have unfortunately failed. Try again!!!");
	}
		
	} 
	








