// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

var roster = []

// ADD A NEW STUDENT
function addNew() {
  var addName = prompt("Enter the name to be added?")
  roster.push(addName)
  display()
}

// REMOVE STUDENT
function remove() {
  var remName = prompt("Enter the name to be removed?")
  var index = roster.indexOf(remName)
  if (index > -1) {
    roster.splice(index, 1)
  }
}
// DISPLAY ROSTER


function display() {
  console.log(roster);
}

// Start by asking if they want to use the web app
var myVar = prompt("Do you want to use the Web App ?")
if (myVar = "Yes") {

  while (input !== "QUIT") {
    var input = prompt("What action would you like to do ADD,REMOVE,DISPLAY or QUIT ?")
    if (input == "ADD") {

      addNew()
    } else if (input == "REMOVE") {

      remove()

    } else if (input == "DISPLAY") {
      display()
    } else if (input === "QUIT") {
      break;

    }
  }
}
