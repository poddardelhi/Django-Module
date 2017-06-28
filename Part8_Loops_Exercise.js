/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
var counter = 0
while (counter < 5) {
  console.log("Hello")
  counter += 1

}

// For Loop

for (var i = 0; i < counter; i++) {
  console.log("Hello");
}

/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// For Loop
for (var i = 1; i <= 25; i++) {
  if (!(i % 2 == 0)) {
    console.log(+i);
  }
}

// +ETHOD TWO
// While Loop
var myVar = 1
while (myVar <= 25) {
  if (!(myVar % 2 == 0)) {
    console.log(+myVar)
  }
  myVar +=1
}
