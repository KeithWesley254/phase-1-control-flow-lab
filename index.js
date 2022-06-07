function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride<=400){
    return'This one is on me!';
  }
  else if(ride>2000 && ride<=2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if(ride>2500){
    return 'No can do.';
  }
  else{
    return "input height in feet"
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(rada){
  // Write your code here!
  var demtips= "";

    switch(rada){
    case 'generous':
      demtips='Thank you so much.';
      break;
    case 'not as generous':
      demtips='Thank you.';
      break;
    default:
      demtips='Bye.';
      break;
  }

  return demtips;
}
console.log(switchOnCharmFromTip(rada))