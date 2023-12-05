//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 
var myName = "Addie";

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE
var faveNum = 8; 
//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE
var lovesCode = true;
let lovesCode = true;
//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE
if (faveNum === 13) {console.log("lucky 13!")} 
  else {console.log("not lucky13")}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out the numbers from 1 through 5.
*/

//CODE HERE
const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++)
  {console.log(nums[i]);}