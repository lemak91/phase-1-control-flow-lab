function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return "This one is on me!"
  } else if (distance > 2000 && distance <= 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (distance > 2500){
    return 'No can do.'
  }
  // Write your code here!
}

function ternaryCheckCity(city){
  let result = city === 'NYC' ? 'Ok, sounds good.': 'No go.';

  return result
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default: 
      return 'Bye.'
  }
  // Write your code here!
} 

function addFive(someNumber) {
  //Everything I want my function to do I put inside these curly braces
  //In this example, let's say I want my function, addFive, to add 5 to
  //any number I pass in (someNumber), but only IF the number is greater
  //than zero:
  let result
  if (someNumber > 0) {
    result = someNumber + 5;
  }
  //at the end, if I want my function to return something, I need to state it:
  return result
}

console.log(addFive(5))

addFive(10);
//=> 15

addFive(20);
//=> 25

addFive(-5);
//=> undefined

addFive(addFive(5));
//=> 15!! In this case, the return value of addFive(5), 10, is passed in 
//as the argument to the outer addFive, returning 15