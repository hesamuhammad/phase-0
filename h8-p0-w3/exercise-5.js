function palindrome(kata) {
    // you can only write your code here!
    // var reverseWord = '';
    // for (var i = kata.length - 1; i >= 0; i--){
    //     reverseWord += kata[i];
    // }

    // if (reverseWord === kata)
    //     return true
    // else
    //     return false

    var reverseWord = '';
    for (var i = kata.length - 1; i >= 0; i--){
        reverseWord += kata[i];
    }

    if (reverseWord === kata){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false