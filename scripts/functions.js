//So far, we have writen code from top to bottom, and it executes in that order.
//More often than not, code will have functions!

function logPeppeloni() {
  console.log(
    "ahh the pepeloni, pepeloni. you know the pepeloni? the nooo one. i always, i always order the, the domino. domino pepeloni and without pepeloni. i always order the pepeloni and without pepeloni. pepeloni! i like pepeloni, yeah. i always, i always order the, the cheese- cheese pan. ahh how can i explain? i can explain by my drawing! i always order like the cheese pan that it has cheese on here, this part, the ear. ear of pizza. and then, i order- wh- when i order pepeloni, the ear- it always have a pepeloni on h- on a top, but i pick up these... away! cause i don't eat it. and then i eat the cheese pan pizza. okay? you understand? understandable! pepeloni! yes."
  );
}

//Alright, that's a lot text to log. Above, we defined a function called logPeppeloni()
//Just like a variables use the var keyword, functions use the funtion keyword to tell the code we're about to define a function.
//This way of defining a function doesn't have an =, instead it opens a set of curly brackets, like the if statement!
//But unlike the if statement, this won't automatically run if we run the script.
//We have to call the function for it to run, just like we have to call a variable to use it.

logPeppeloni();

//Once we call it, it runs! And all we have to do to run it over and over is to call it's name over and over.
//Now we dont have to copy and paste all that text every single time. Phew!

logPeppeloni();
logPeppeloni();
logPeppeloni();

//Alright, enough of that. Feel free to comment that out if it's too much.
//So what's up with the parentheses? Variables didn't have that.
//The parentheses are where we pass our arguments! Arguments are data that the function does things with.
//The logPeppeloni function didn't have any arguments, so the parentheses are empty.
//Lets define a function that takes arguments.

function timeToArgue(argOne, argTwo) {
  console.log("======================");
  console.log(argOne);
  console.log(argTwo);
  console.log("======================");
}

//We can put in as many arguments as we want, and we can name them whatever we want. 
//They're basically variables that can only be used within the function!
//When we call the function, we need to feed it the arguments it needs to run.
//The timeToArgue function takes two arguments, so we need to feed it two pieces of data when we call it.

timeToArgue("That's silly!", "I disagree!!");

//We fed it two strings by putting them in the parentheses when we called the function! 
//We could put whatever we want as the arguments when we call the function.

timeToArgue(1, "Howdy!")
timeToArgue("Conjunction junction!", undefined)
timeToArgue(42, 58)

//Wait, how does the function know when to log what?
//This function has two arguments, which was decided on line 31 when we put two argument names when we defined the function.
//When you call the function, the first value that you feed it will always be assigned to the first argument that was defined in the parenthases.
//In this case, the first value you feed the function will always be named argOne.
//The second value you feed it will be named argTwo.

//Lets experiment with this a little. Define a function that takes 3 arguments, but give them names that are out of order!