 //Looping a Triangle//

for (var number = '#'; number <= '#######'; number += '#')
 console.log(number);

//FizzBuzz//

for (fizzBuzz = 1; fizzBuzz  <= 100; fizzBuzz += 1) {
  var alt1 = "";
  if (fizzBuzz % 3 == 0)
      alt1 += "Fizz";
    var alt2 = "";
    if (fizzBuzz % 5 == 0)
      alt2 += "Buzz";
    console.log(alt1 || alt2 || fizzBuzz); 
   }

//Chess Board//

var chessBoard = "";
var boardSize = 10;
for (var width = 0; width < boardSize; width++) {
  for (var height = 0; height < boardSize; height++) {
    if ((width + height) % 2 == 0)
        chessBoard += " ";
      else
        chessBoard += "#";
      }
        chessBoard += "\n";
    }
console.log(chessBoard);
