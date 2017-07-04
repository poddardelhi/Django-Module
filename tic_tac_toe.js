// grabbing button
var restart = document.querySelector("#b");
// grabbing all squares
var squares = document.querySelectorAll("td");

// function that clears all the squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = " ";
  }
}
restart.addEventListener('click',clearBoard);

//Check the marker

function marker(){
  if (this.textContent===''){
    this.textContent='x';
  }
  else if (this.textContent==='x') {
    this.textContent='o';
  }
  else {
    this.textContent='';
  }
}

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',marker)
}


// var restart = document.querySelector('#b');
//
// // Grab all the squares
// var squares = document.querySelectorAll("td");
//
//
// // Clear Squares Function
// function clearBoard() {
//   for (var i = 0; i < squares.length; i++) {
//       squares[i].textContent = '';
//   }
//
// }
// restart.addEventListener('click',clearBoard)
