//Let's start by console logging "Hello, world!"
console.log("Hello, world!");
//console.log() is a function that is built into, or native, to Javascript. We'll be using it often to debug code or keep track of our progress.

//Let's go over some variable types.
//What's a variable?
var numberVar = 1;

//A variable is a declared piece of data. Above, we defined a variable named numberVar with the assigned value of 1.
//Here's a breakdown:
//- The "var" keyword tells the script that we are now going to define a variable.
//- The name "numberVar" is the name we will use to call this variable later in our code. 
//  We can put anything we want as the name, just be sure to remember it!
//- The "=", or equal sign, tells the script we want to sent the variable's value. Here, we set the value to be 1.

//Let's try console logging the variable we made!
console.log(numberVar);
//When we run our script, we should see the value, 1, logged in our console.

//On line 5, I mentioned variable types. What exactly does that mean?
//Our variable numberVar is the number type! Seems strightforward enough. 

//This variable is the string type. A string is a text sequence that appears in quotes or double quotes. 
//The first thing we did in this file was console.log() a string!
var stringVar = "Any text can go here!";

//This variable is the boolean type. The value will either be true or false, and does not need to have quotes around it, just like numbers.
var booleanVar = true;

//This variable is an array type variable. It is a list of multiple values that don't have to be the same type!
//The list of values is surrounded by straight brackets, and the values are separated by commas.
var arrayVar = [8, "Josie", 42, false, "bumblebee"];

//The last variable type is an object. This object type is very broad. Everything in Javascript is an object!
//Think of objects as rectangles, and the other types as squares. All squares are rectangles, just as all numbers, strings, etc are objects.
//If that confuses you, don't worry. We'll come back to this concept over and over as we learn.
//For now, here's a great example of a simple object. It contains a lot of information, surrounded by curly brackets.
//Each line in the curly brackets has a key and value pair. For example, the key "name" has a set value of "Brandon".
var objectVar = {
    name: "Brandon",
    hair: "black",
    eyes: 2,
}

//The object type and the array type seem similar, and they are! But there are some differences we'll go over a little later.
//For now, let's move on to operators!