


let score = [];


function roll(sides){
	let results = (Math.floor((Math.random() * sides) + 1));
	console.log("You have rolled "+results+"!");
    score.push(results);
}

function endgameMessage(){

			let totalScore = score[0]+score[1]+score[2]+score[3]+score[4]+score[5];

	if (totalScore == 42){
		alert("Your total score is..."+totalScore+". HOW AMAZING!!! Do you realize how rare this is?! SURPRISE: YOU HAVE BECOME A MAGICAL UNICORN!");
	}
	
	else if (totalScore > 42){
		alert("Your total score is..."+totalScore+". You open a fortune cookie and it reads thus: 'YOU WILL WAKE UP TOMORROW AND NOT RECOGNIZE YOURSELF IN THE MIRROR BECAUSE YOUR FACE WILL HAVE MORPHED INTO THE LIKENESS OF THE TROLLFACE MEME!' Ooh. Better try again and end on a high note... you do NOT want it to end this way.");
	}
	
	else if (totalScore == 39 || totalScore == 40 || totalScore == 41 ){
		alert("Your total score is..."+totalScore+". What's this? It seems you've won! Congratulations!");
	}
	
	else if (totalScore <= 38){
		alert("Your total score is..."+totalScore+". You, unfortunate soul, have failed. That's ok though, just try again!");
	}
		
	} 
	








