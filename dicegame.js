let userNameQuestion=(prompt("What is your name?"))

let userName=userNameQuestion

let doYouLikeReading=(prompt("This is an adventure filled with text and dice rolling. Do you like to read?"))

let userAnswer1=doYouLikeReading

let prologue= userName.concat(", are you ready to venture into wild, unknown territory, where nothing is as it seems, and anything could happen, and let's be honest, probably will, and you could also possibly die?")







function readingFunction(doYouLikeReading){

		if (userAnswer1 == no.toLowerCase()){
		console.log("If you don't like reading, you shouldn't be playing this game, as it's mainly a story. Go take a long walk off a short pier... or at least do something you'd actually enjoy.")
		}
	
		else if (userAnswer1 == yes.toLowerCase()){
		console.log("Yay, me too! And it would seem that you are ready to begin!")
		}

		else if(userAnswer1== maybe.toLowerCase()){
			console.log("Sigh. You're so indecisive. You lose.")
			break
		}
	
		else{
		console.log("Just answer yes or no, otherwise you'll (hopefully) keep seeing this message (if I coded it right).")
		}
	}



















console.log(prologue);
console.log(doYouLikeReading);




// console.log("Your eyes slowly open. The first thing you’re aware of is that you’re lying on your back on the hard, cracked dirt. How did you get here? With all your energy, you heave yourself into a sitting position. Your head throbs. Dry, brown grass pushes through the large cracks in the earth, and the song of those annoying, endlessly droning insects is ceaseless. You start to stand, and realize your hand is clutching something rather tightly. You open it. Ouch, that hurt—your hand must have been clenched like that for quite some time. You glance at the small objects and your heart leaps. Your precious dice! Now at least you have some chance of survival in this strange world.You look around, trying to get your bearings. You seem to be in the middle of a field or what once was a field, anyway. There is a black smudge on the horizon, and after studying it for some time, you realize it's smoke. A city? At any rate, it's the only point of interest in this odd place, everything else is desolation. You whip out your trusty SIX-SIDED DIE... It will help you decide what to do.")