let userName=(prompt("What is your name?"))

let doYouLikeReading=(prompt("This is an adventure filled with text and dice rolling. Do you like to read?"))

let userAnswerNo ="no" || "No" || "NO"

let userAnswerYes = "yes" || "Yes" || "YES"

let userAnswerIdk = "idk" || "Idk" || "IDK"

let userAnswerMaybe = "maybe" || "Maybe" || "MAYBE"

// let question2=alert(userName.concat(", are you ready to venture into wild, unknown territory, where nothing is as it seems, and anything could happen, and let's be honest, probably will, and you could also possibly die? Press 'ok' to begin."))

let prologue=("Your eyes slowly open. The first thing you’re aware of is that you’re lying on your back on the hard, cracked dirt. How did you get here? With all your energy, you heave yourself into a sitting position. Your head throbs. Dry, brown grass pushes through the large cracks in the earth, and the song of those annoying, endlessly droning insects is ceaseless. You start to stand, and realize your hand is clutching something rather tightly. You open it. Ouch, that hurt—your hand must have been clenched like that for quite some time. You glance at the small objects and your heart leaps. Your precious dice! Now at least you have some chance of survival in this strange world.You look around, trying to get your bearings. You seem to be in the middle of a field or what once was a field, anyway. There is a black smudge on the horizon, and after studying it for some time, you realize it's smoke. A city? At any rate, it's the only point of interest in this odd place, everything else is desolation. You whip out your trusty SIX-SIDED DIE... It will help you decide what to do.")





// function readingFunction(doYouLikeReading){

// 		if (userAnswer1 == userAnswerNo){
			
// 			alert("If you don't like reading, you shouldn't be playing this game, as it's mainly a story. Go take a long walk off a short pier... or at least do something you'd actually enjoy.")
// 			break;
// 		}
	
// 		else if (userAnswer1 == userAnswerYes){
			
// 			alert("Yay, me too! And it would seem that you are ready to begin!")
// 			console.log(prologue);
// 		}

// 		else if(userAnswer1 == userAnswerIdk){
			
// 			alert("What do you mean, you don't know? Are you silly? You should still send it!")
// 			break;
// 		}

// 		else if(userAnswer1 == userAnswerMaybe){
			
// 			alert("Sigh. You're so indecisive. You lose.")
// 			break;
// 		}
	
	
// 				while(userAnswer1 !== userAnswerNo || userAnswerYes || userAnswerIdk || userAnswerMaybe){
// 			alert("Just use a normal answer you would normally give to a normal person. Otherwise you'll (hopefully) keep seeing this message (if I coded it right).")
// 			}
// 		}
	



switch(doYouLikeReading) {
  	case userAnswerNo:
  	alert("If you don't like reading, you shouldn't be playing this game, as it's mainly a story. Go take a long walk off a short pier... or at least do something you'd actually enjoy.");
   	break;
  case userAnswerYes:

      alert("Yay, me too! And it would seem that you are ready to begin!")
			console.log(prologue)
    break;
  	case userAnswerMaybe:
      alert("Sigh. You're so indecisive. You lose.");

    break;
  default:
    alert("Just use a normal answer you would normally give to a normal person. Refresh the page and try again!");
   
}





















