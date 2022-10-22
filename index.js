let Username = prompt("Enter your username : ");
console.log(`Is time to get  your game on :  ${Username}`);

let point = 0;
let maxLevel = 10;
let level=1;

for(i=2;i<=maxLevel;i++){
    comGuess= Math.floor(Math.random()*i)+1;
    console.log(comGuess)
    userGuess = parseInt(prompt(`Enter a number between 1 and ${i}`));  
    console.log(userGuess);
  if(isNaN(userGuess)){
    console.log("Invalid Data type,Start Again");
    break;
  }
  else if (userGuess > i ){
    console.log("Number your enter is higher than current max range");
    break;
  }
  else if(comGuess == userGuess && userGuess >=i ){
    point+=1;
    level +=1;
    console.log("Your current point is : ",point);
    console.log("Your current Level is level : ",level);    
  }
  else{
    console.log("Guessed Wrong");
    break;
  }
}
  
// }
// for(var i=2; i<maxLevel; i++) {
//   comGuess= Math.floor(Math.random()*i)+1;
//   userGuess = parseInt(prompt(`Enter a number between 1 and ${i}`));
//   console.log(userGuess);
//   switch(i) {
//   case (comGuess == userGuess && userGuess <= i):
//     point+=1;
//     level+=1;
//     console.log("Your current point is : ",point);
//     console.log("Your current Level is level : ",level);  
//     break;
//   case(userGuess > i):
//       console.log("The number you guess is larger than current max range.")
//    default:
//     break;
//   }
// }

