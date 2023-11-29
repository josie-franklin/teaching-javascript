var pigsAreFlying = true;

//It's time for conditionals!

if (pigsAreFlying) {
  console.log("I guess I owe you $20...");
} else {
  console.log("Pshh, I'll give you $20 when pigs fly!!");
}

//This almost reads like plain English! We have a boolean variable called pigsAreFlying. Depending on if it's true or false,
//different blocks of code will execute! This will execute the first block, because our condition is true.

//We don't have to write an else clause! If you want nothing to happen if the condition is false, just use the if statement on it's own.
if (pigsAreFlying) {
  console.log("This is incredible!");
}
//If pigsAreFlying is false, this block of code just won't execute at all.

//We can use many expressions in the condition. Let's try using some operators we learned!
if (1 === 1) {
  console.log("Well duh...");
}

if ("eebeedeebee" === "zoobeedoobee") {
  console.log("Something is wrong here..."); // This shouldn't execute!
}

//We can use the "and" operator, &&, to check multiple conditions at once.
if (1 === 1 && 2 === 2) {
  console.log("Both of these things are true!"); //This will only log if both things are true!
}

//We can use the "or" operator, ||, to check if at least ONE of the conditions is true.
if (2 === 1 || 2 === 2) {
  console.log("Well, one of them is true at least."); //This logs because the second condition was true!
}

//We can compare vlues in the conditional too!
if (2 > 1) {
    console.log("Oh boy, more operators!") //We can use less than "<", less or equal "=<" 
}

pigsAreFlying = false;
if (!pigsAreFlying) {
  console.log("Pigs can no longer fly.");
}
//In the above condition, !pigsAreFlying is true! In english, if the variable pigsAreFlying is false, execute the code.
//It's a little like a double negative. Pigs are not NOT flying. This is what we call a "truthy" statement.

var oneVar = 1;
var stringVar = "string";
//These variables have a value, and are considered truthy.
//If you put a value in a condition, the code will always execute.
if (42) {
  console.log("truthy");
}
if ("some text") {
  console.log("truthy");
}
if (stringVar) {
  console.log("truthy");
}

//We also have "falsy" values! A condition with a falsy value will not execute.
if (0) {
  //Any code here can't execute. Other falsy values include null, undefined, and of course, false.
}
//You would never write those values directly in the condition. You would likely have another expression or variable there!

if (pigsAreFlying) {
    console.log("This won't execute right now...")
}

pigsAreFlying = true;

if (pigsAreFlying) {
    console.log("...they started flying again!!!")
}

//Even though the condition was falsy once, it changed to truthy. We might use this concept to check if a checkbox is filled,
//or if a textbox has any text. There are many reasons to put a potentially falsy value in a condition, this is just one!

//Let's move onto functions next!