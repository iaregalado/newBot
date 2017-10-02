// Description:
// Simple calculator for add, substract, multiply and divide.  Also, catches people that cuss!
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot string starting with calculation to be performed, followed by two digits - hubot will perform calculation
//  Sample:
//  @newBot add 1 plus 2
// Notes:
//
//
// Author:
// Ivan Regalado
//

module.exports = function(robot) {

//add

  robot.respond(/(.*) (.*) (.*) (.*)/i, function(msg) {
  var calc = msg.match[1];
  console.log(calc);
  var firstNumber = 0;
  var secondNumber = 0;
  
  firstNumber = parseInt(msg.match[2]);
  console.log(firstNumber);
  secondNumber = parseInt(msg.match[4]);
  console.log(secondNumber);

  if(calc === 'add'){
    var total = firstNumber + secondNumber;
    return msg.reply("Adding " + firstNumber + " and " + secondNumber + " equals " + total);
  } else if (calc === 'subtract'){
    var total = secondNumber - firstNumber;
    return msg.reply("Subtracting " + firstNumber + " from " + secondNumber + " equals " + total);
  } else if (calc === 'multiply'){
    var total = firstNumber * secondNumber;
    return msg.reply("Multiplying " + firstNumber + " and " + secondNumber + " equals " + total);
  } else if (calc === 'divide'){
    var total = firstNumber / secondNumber;
    return msg.reply("Dividing " + firstNumber + " by " + secondNumber + " equals " + total);
  }

  console.log(total);

  });

//find people cussing!
  robot.hear(/(.*)/i, function(msg) {
  var swearWord = msg.match[1];
  console.log(swearWord);
  var swearJar = ["buck", "bucking"];
  
  for(i = 0; i < swearJar.length; i++){
    if(swearWord === swearJar[i]){
      return msg.reply("Hi there, we don't like to cuss here!");
    }
  }
  });

}