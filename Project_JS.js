var fn = prompt("Enter your First Name")
var ln = prompt("Enter your Last Name")
var age = prompt(" How old are you?")
var height = prompt("How tall are you in centimeters?")
var petName = prompt("What is the name of your pet?")
if (fn[0] == ln[0]) {
  if (age >= 26 && age <= 30) {
    if (height >= 175) {
      if (petName[petName.length - 1] == "y") {
        alert("Thank You for the Information")
        console.log("Welcome Comrade! You've passed the Spy Test");
      }
    }
  }
} else {

  alert("Thank You for the Information")
  console.log("Sorry, nothing to see here.")
}
