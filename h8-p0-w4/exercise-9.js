function checkAB(num) {
    // you can only write your code here!
    var aPosition = [];
    var bPosition = [];

    for (var i = 0; i < num.length; i++){
      if (num[i] === 'a'){
        aPosition.push(i);
      } else if (num[i] === 'b'){
        bPosition.push(i);
      }
    }

    if (aPosition.length === 0 || bPosition.length === 0) return false;

    for (var j = 0; j < aPosition.length; j++){
      for (var k = 0; k < bPosition.length; k++){
        if (Math.abs(aPosition[j] - bPosition[k]) === 4){
          return true;
        }
      }
    }
    
    return false;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false