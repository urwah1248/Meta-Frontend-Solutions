/*Task 1: Code a function declaration
You need to code a function declaration named addTwoNums, which accepts numbers
 a and b and console logs a + b.*/

 function addTwoNums(a, b){
    console.log(a+b);
 }

/*  Task 2: Invoke the addTwoNums function with a number and a string
You need to invoke the addTwoNums using the following arguments: 5 and "5".*/

addTwoNums(5, "5")

/*Task 3: Update the addTwoNums function with a try...catch block
Add the try and catch blocks inside the function definition's body. For now, just
 make sure that the console log of a + b is inside the try block. 
 Additionally, the catch block should catch an error named err and, inside the 
 body of the catch block, you need to console log the err value.*/
 
 function addTwoNum(a, b){
    try{
        console.log(a+b)
    }
    catch(err){
        console.log(err)
    }
 }

 addTwoNum(5, "5")

 /*Task 4: If the passed-in arguments are not numbers, throw an error
If either of the arguments passed to the addTwoNums are not numbers, you'll throw
 an error.

Specifically, code a conditional with the following logic:

if the typeof the a parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError,
 pass a custom error message of 'the first argument is not a number'.

else if the typeof the b parameter is not equal to 'number', throw a new ReferenceError. Inside the ReferenceError, pass a custom error message of 'the second argument is not a number'.

else, console log a + b  */
function addTwoNumss(a, b){
    try{
        if(typeof(a)||typeof(b) != Number){
            throw ReferenceError('one of the arguments is not a number')
        }
        else{
            console.log(a+b)}
    }
    catch(err){
        console.log("Error!", err)
    }
 }

 addTwoNumss(5, "5")
