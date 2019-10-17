function angkaPalindrome(num) {
    // you can only write your code here!
    num++

    var string = String(num);
    var reversedString = '';

    for (i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    }

    if (string === reversedString)
        return Number(string);
    else 
        return angkaPalindrome(num);

  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001