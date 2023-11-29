var number = 6;
var anotherNumber = 4;
var firstPart = "Josie";
var secondPart = " is very cool, I promise";
var nothingIsHere;

//I declared some variables above. Lets use them to learn about basic operators!
//We can add two variables by using the + operator.
console.log(number + anotherNumber);
//This should console log 10, which is the result of 6+4.

//The + operator works with strings as well!
console.log(firstPart + secondPart);
//This console logs "Josie is very cool, I promise", which is both strings together.
//If you console log secondPart + firstPart, the result will be " is very cool, I promiseJosie".
//This order doesn't matter when adding numbers, but it does with strings!

//The -, *, and / operators subtract, multiply, and divide numbers.
console.log(number - anotherNumber); //logs 2
console.log(number * anotherNumber); //logs 24
console.log(number / anotherNumber); //logs 1.5

//The = operator assigns value to variables. We used it before when defining variables, but we can also use it to reassign values.
anotherNumber = 10;
//Here we set an already existing variable, anotherNumber, to a new value.
//If we console log number + anotherNumber again, we'll get a different result.
console.log(number + anotherNumber); //logs 16

//We can use this to reassign value to any variable.
//Since Javascript's is what we call an "untyped language", we can reassign values to be different types than they were before!
anotherNumber = "I'm a string now.";
console.log(anotherNumber);

//While this is possible, it's best practice to keep types consistent. Mixing data types can end up with odd results.
//Let's change this back to a number.
anotherNumber = 4;

//We can check whether variables are equal by using the === operator.
console.log(number === 6); //logs true
console.log(number === firstPart); //logs false

// The === operator checks both value and type. Both have to match to be true.
console.log(1 === 1); //logs true
console.log(1 === "1"); //logs false

//Using == instead of === will only check the value, and not the type!
console.log(1 == "1"); //logs true
//This operator is not used as often, since types are usually kept consistent.

//We can also check if values are NOT equal! 
console.log(number !== anotherNumber) //logs true

//And we can check whether a value exists at all!
console.log(!nothingIsHere) //logs true

//These are the basics, the foundation we can use to to learn more complicated and broad concepts.
//If you don't fully understand, that's okay! Make sure you grasp it a bit, and then let's move on.
//Some of these concepts will only click when you use them elsewhere. And we can always come back if it doesn't click!

//Next up, conditionals!