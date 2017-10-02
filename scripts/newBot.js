// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
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

  //return msg.reply("Adding " + firstNumber + " and " + secondNumber + " equals " + total);

  });

  //  YOUR CODE HERE
  //  Example
//    robot.respond(/I like (.*)/i, function(msg) {
//      var name;
//      name = msg.Match[0];
//      if(name == 'javascript'){
//        return msg.send("I love coding!");
//      } else {
//        return msg.send("I love eating!");
//      }  
//    });

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

/************************************
EXAMPLES OF THE KEY HUBOT FUNCTIONS
************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

/*
var squirrels;
squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];
module.exports = function(robot) {
  // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
  return robot.respond(/hi|hello/i, function(msg) {
    return msg.send("Howdy!");
  });
  // Random Example
  //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
  return robot.hear(/ship it/i, function(msg) {
    return msg.send(msg.random(squirrels));
  });
};
*/