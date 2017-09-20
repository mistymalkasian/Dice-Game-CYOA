// var characterName = prompt("What's your name?")
// var device = document.write("A stranger holds out a round, metal object with a single, red button on it. He seems creepily desperate.''Quick. Whoever you are, listen to me. Take this.''")
// var clickButton1= document.write("hello!")

//  function clickButton1() {
//       document.write("You make your way into the city.");

//     }

//   function roll4SidedDie(sides)
//   {
//     if(!sides) sides = 6;
//     with(Math) return 1 + floor(random() * sides);
//   }

//  function roll6SidedDie(sides)
//   {
//     if(!sides) sides = 6;
//     with(Math) return 1 + floor(random() * sides);
//   }

// function roll8SidedDie(sides)
//   {
//     if(!sides) sides = 6;
//     with(Math) return 1 + floor(random() * sides);
//   }

//   function roll10SidedDie(sides)
//   {
//     if(!sides) sides = 6;
//     with(Math) return 1 + floor(random() * sides);
//   }

// function roll12SidedDie(sides)
//   {
//     if(!sides) sides = 6;
//     with(Math) return 1 + floor(random() * sides);
//   }

// function roll20SidedDie(sides)
//   {
//     if(!sides) sides = 6;
//     with(Math) return 1 + floor(random() * sides);
//   }


// switch(device) {
//   	if('no')
//     document.write("xv")
//     if('yes') {
//       document.write("bleh bleh!");
//     } else {
//       document.write("blah!");
//     }



//   var rand = roll4SidedDie(4);
//   var rand = roll6SidedDie(6);
//   var rand = roll8SidedDie(8);
//   var rand = roll10SidedDie(10);
//   var rand = roll12SidedDie(12);
//   var rand = roll20SidedDie(20);





var device = prompt("A stranger holds out a device. Will you take it?");

switch(device) {
  case 'yes':
    var yes = return prompt("You take the device.");
     }
  case 'no':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
  case 'maybe':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
    case 'yes':
    var yes = prompt("You take the device.");
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      alert("You only need one of the two! You beat the troll--nice work!");
    } else {
      document.write("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
    case 'yes':
    var yes = prompt("You take the device.");
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      alert("You only need one of the two! You beat the troll--nice work!");
    } else {
      document.write("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;

  default:
    console.log("Your answer was unintelligible. The stranger hands you the device, and you take it, bewildered.");
}