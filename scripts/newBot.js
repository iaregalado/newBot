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
// <github username of the original script author>
//

module.exports = function(robot) {

  robot.respond(/I love (.*)/i, function(msg) {
  var name;
  name = msg.match[1];
  if (name == "javascript"){
    return msg.send("JS rulezzzz!");
  } else {
    return msg.reply("Nice to meet you, " + name + "!");
  }

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

robot.hear(/swearJar/, function(res) {
  var counter = 0;
  counter = counter + 5;
  return res.send("Hi there, I'm keeping track of your swear words! The total tally is $" + counter);
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