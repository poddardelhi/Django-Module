var player1 = prompt("Player One Enter Your Name; you will be blue");
var player1Color = 'rgb(116, 222, 232)';

var player2 = prompt("Player Two Enter your Name; you'll be Red by default");
var player2Color = 'rgb(244, 46, 46)';

var game = true;

// Change Color function
function changeColor(rowIndex, ColIndex, color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

// report color
function returnColor(rowIndex, ColIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(col) {
  var colorReport = returnColor(5, col);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row, col);
    if (colorReport === 'rgb(128,128,128)') {
      return row;
    }
  }
}
// Check for Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatch(returnColor(row, col), returnColor(row, col + 1), returnColor(row, col + 2), returnColor(row, col + 3))) {
        console.log('horiz');
        reportWin(row, col);
        return true;
      } else {
        continue;
      }
    }
  }
}
  //checing Vertocla checks
  function verticalWinCheck() {
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 3; row++) {
        if (colorMatch(returnColor(row, col), returnColor(row + 1, col), returnColor(row + 2, col), returnColor(row + 3, col))) {
          console.log('vertical');
          reportWin(row, col);
          return true;
        } else {
          continue;
        }
      }
    }
  }
    // checking diagonal checks
    function diagonalWinCheck() {
      for (var col = 0; col < 5; col++) {
        for (var row = 0; row < 7; row++) {
          if (colorMatch(returnColor(row, col), returnColor(row + 1, col + 1), returnColor(row + 2, col + 2), returnColor(row + 3, col + 3))) {
            console.log('diag');
            reportWin(row, col);
            return true;
          } else if (colorMatch(returnColor(row, col), returnColor(row - 1, col + 1), returnColor(row - 2, col + 2), returnColor(row - 3, col + 3))) {
            console.log('diag');
            reportWin(row, col);
            return true;
          } else {
            continue;
          }
        }
      }
    }

    // matching 4 button colors
    function colorMatch(one, two, three, four) {
      return (one === two && one === three && one === four && one !== 'rgb(128,128,128)' && one !== undefined);
    }


    // start with player one
    var currentPlayer = 1;
    var currentName = player1;
    var currentColor = player1Color;

    $('h3').text(player1 + ":It is your turn,pls pick colum");

    $('.board button').on('click', function() {
      // get the column
      var col = $(this).closest('td').index();

      //check bottom available
      var bottomAvail = checkBottom(col);

      //drop chip at the bottom
      changeColor(bottomAvail, col, currentColor);

      if (horizontalWinCheck() || verticalWinCheck()|| diagonalWinCheck()){
        $('h1').text(currentName+ "You have won!")
        $('h3').fadeOut('fast');
        $('h2').fadeout('fast');
      }
      currentPlayer = currentPlayer * -1 ;

      // Re-Check who the current Player is.
      if (currentPlayer === 1) {
        currentName = player1;
        $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
        currentColor = player1Color;
      }else {
        currentName = player2
        $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
        currentColor = player2Color;
    }
  })
