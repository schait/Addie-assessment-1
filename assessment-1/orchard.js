///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// CODE HERE
let answers = []
for (var i = 0; i < fujiAcres.length; i++){
const totalAcres = fujiAcres.reduce((acc, curr) =>
  acc + curr, 0) 
{
console.log(totalAcres);}

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// CODE HERE
let answer2 = []
for (let i = 0 ; i < fujiAcres.length ; i++){console.log(fujiAcres[i] + galaAcres[i] + pinkAcres[i])}
  
if (totalAcres = fujiAcres[i] + galaAcres[i] + pinkAcres;
  let (averageDailyAcres = totalAcres / fujiAcres.length)
  {
    console.log(averageDailyAcres);
  }
// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// CODE HERE
let answer3 = []
let num = 0;
  let sum = 0;
while (n> 0) { sum += n; n--;
              
              {
  console.log(# - averageDailyAcres)
}
// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

// CODE HERE

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

int fujiTons = fujiAcres * 6.5;
int galaTons = galaAcres * 6.5;
int pinkTons = pinkAcres * 6.5;
 system.out.println(fujiTons); system.out.println(galaTons); system.out.println(pinkTons);
              {consol.log(fujiTons); consol.log(galaTons); consol.log(pinkTo
                                      
              

// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

  int fujiPounds = fujiTons * 2000;    
  int galaPounds = galaTons * 2000;
   int pinkPounds = pinkTons * 2000;
               system.out.println(fujiPounds); system.out.println(galaPounds); 
system.out.println(pinkPounds);
 totalPounds = fujiTons + galaTons + pinkTons;
console.log(totalPounds);
               // PROBLEM 6
               


// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

// CODE HERE

// let fujiProfit =
// let galaProfit =
// let pinkProfit =

let fujip = fujiPrice * fujiPounds;
let galaP = galaPrice * galaPounds;
let pinP = pinkPrice * pinkPounds;
let total = fujip + galaP + pinP;
              
               system.out.println(fujiProfit); system.out.println(galaProfit); 
system.out.prinln(pinkProfit);

counsole.log(fujiProfit); console.log(galaProfit); console.log(pinkProfit);

  

// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
let totalProfit = fujiProfit + galaProfit + pinkProfit;
  if (totaProfit > 0) {
 console.log(totalProfit);