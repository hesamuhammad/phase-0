/**
 * ===================
 * Tic Tac Toe Checker
 * ===================
 * 
 * Buatlah sebuah fungsi untuk mengecek suatu papan TicTacToe dan mencari siapakah pemenangnya (jika ada).
 * Jika tidak ada pemenang, maka hasilnya adalah DRAW.
 * Pemenang ditentukan dari karakter O atau X yang muncul berurutan dan membentuk garis secara:
 * 1. Horizontal
 * 2. Vertikal
 * 3. Diagonal.
 * Dan akan dinyatakan seri (draw) ketika tidak ada yang berhasil
 * membuat garis dalam papan tersebut.
 * 
 * X WIN:
 * [[x,o,x],
 *  [x,x,o],
 *  [o,o,x]]
 * 
 *  O WIN:
 * [[o,o,x],
 *  [x,o,x],
 *  [x,x,o]]
 * 
 *  DRAW:
 *  [[x,x,o],
 *   [o,o,x],
 *   [x,o,x]]
 * 
 *   O WIN:
 *  [[o,o,x],
 *   [x,x,o],
 *   [o,o,o]]
 * 
 *   X WIN:
 *  [[x,o,x],
 *   [o,o,x],
 *   [o,x,x]]
 * 
 *   DRAW:
 *  [[o,x,o],
 *   [x,x,o],
 *   [x,o,x]]
 * 
 *   O WIN:
 *   [[x,x,o],
 *    [o,o,x],
 *    [o,x,x]]
 * 
 * RULES:
 * - Dilarang menggunakan built-in functions kecuali push dan unshift.
 * - Boleh membuat function lain selain yang ada di skeleton code.
 */

function cariPemenang(board) {
  // Write your code here
  var str = "";
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      str += board[j][i];
    }
  }
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      str += board[i][j]   
    }
  }
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (i === j) {
        str += board[i][j]
      }
    }
  }
  str += board[2][0] + board[0][2] + board[1][0]
  // console.log(str)
  for (var i = 0; i < str.length; i += 3) {
    if (str[i] === str[i + 1] && str[i + 1] === str[i + 2]) {
      return str[i].toUpperCase()+ " WIN"
    }
  }
  return `DRAW`
}

console.log(cariPemenang([['x', 'o', 'x'], ['x', 'x', 'o'], ['o', 'o', 'x']])); //X WIN
console.log(cariPemenang([['o', 'o', 'x'], ['x', 'o', 'x'], ['x', 'x', 'o']])); //O WIN
console.log(cariPemenang([['x', 'x', 'o'], ['o', 'o', 'x'], ['x', 'o', 'x']])); //DRAW
console.log(cariPemenang([['o', 'o', 'x'], ['x', 'x', 'o'], ['o', 'o', 'o']])); //O WIN
console.log(cariPemenang([['x', 'o', 'x'], ['o', 'o', 'x'], ['o', 'x', 'x']])); //X WIN
console.log(cariPemenang([['o', 'x', 'o'], ['x', 'x', 'o'], ['x', 'o', 'x']])); //DRAW
console.log(cariPemenang([['x', 'x', 'o'], ['o', 'o', 'x'], ['o', 'x', 'x']])); //O WIN