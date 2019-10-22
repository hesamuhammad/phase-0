/** 6m03s
 * ================
 * Balanced Letters
 * ================
 * 
 * [Description]
 * isBalanced merupakan sebuah function yang mengecek apakah jumlah huruf yang diterima sebagai input berjumlah sama.
 * 
 * [Example]
 * @input = abcde
 * karena masing-masing karakter (a-e) hanya muncul sekali, maka:
 * @output = true
 * 
 * @input = abcdeabcde
 * karena masing-masing karakter (a-e) muncul dua kali, maka:
 * @output = true
 * 
 * @input = abcba
 * huruf a & b muncul 2x, namun huruf c hanya muncul sekali, maka:
 * @output = false
 * 
 * [Rules]
 * 1. Dilarang menggunakan regex
 * 2. Dilarang menggunakan built-in function: map, filter, reduce, forEach
 * 3. Dilarang menggunakan built-in function: sort
 * 4. Dilarang menggunakan built-in function: split, slice, splice, join, reverse
 * 5. Dilarang menggunakan built-in function: indexOf, lastIndexOf, includes, some, every, find
 */

function isBalanced(str) {
    // Write your code here
    var obj = {
      a: 0,
      b: 0,
      c: 0,
      d: 0,
      e: 0
    }
    var hasil = []
    for (const key in obj) {
      for (let i = 0; i < str.length; i++) {
        if (key == str[i]) {
          obj[str[i]] += 1
        }
      }
      hasil.push(obj[key])
    }
    var result = [];
    for (let i = 0; i < hasil.length; i++) {
      if (result.length === 0) {
        result.push([hasil[i]])
      } else {
        var check = false
        for (let j = 0; j < result.length; j++) {
          if (hasil[i] === result[j][0]) {
            check = true
            result[j].push(hasil[i])
          }
        }
        if (check === false) {
          result.push([hasil[i]])
        }
      }
    }
    if (result.length !== 1) {
      return false
    }
    return true
  }
  
  console.log(isBalanced('abcdefghijkl'))
  // true
  console.log(isBalanced('aabbccddeeff'))
  // true
  console.log(isBalanced('abcdedcba'))
  // false
  console.log(isBalanced('hfsjdfngkso'))
  // false
  console.log(isBalanced('pqqwlearmssipqqwlezoxpjaozvxgcfpqqwlearvjasybinoxpdwfbgchhzvxgcfvybrntmzyjdmtkutzykuoinarmtxpjlpqqwlassidwfbgchhjdkuearsimtzdwfbgchhjdkulezvxpqqwlearmssipqqwlezoxpjaozvxgcfpqqwlearvjasybinoxpdwfbgchhzvxgcfvybrntmzyjdmtkutzykuoinarmtxpjlpqqwlassidwfbgchhjdkuearsimtzdwfbgchhjdkulezvxgcfvybrntykuoinoxpjassidwfbgchhjdkulekuoinoyerntmkulezvxgcfvybrntmmgcfvybrntykuoinoxpjassidwfbgchhjdkulekuoinoyerntmkulezvxgcfvybrntmm'))
  // true