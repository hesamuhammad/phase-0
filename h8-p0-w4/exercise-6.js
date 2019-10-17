function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var lowestDigit = 0
    for (var i = 0; i < angka; i++){
      for (var j = angka; j >= 0; j--){
        if (i * j === angka){
          var digit = String(i).length + String(j).length;
          if (i === 1){
            lowestDigit = digit;
          }
          if (digit < lowestDigit){
            lowestDigit = digit;
          }
        }
      }
    }
    return lowestDigit;
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2