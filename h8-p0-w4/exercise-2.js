function fpb(angka1, angka2) {
    // you can only write your code here!
    var factor1 = [];
    var index1 = 0;
    var factor2 = [];
    var index2 = 0;

    //angka1
    for (var i = 1; i < angka1; i++){
      if (angka1 % i === 0){
        factor1[index1] = i;
        index1++;
      }
    }
    
    //angka2
    for (var j = 1; j < angka2; j++){
      if (angka2 % j === 0){
        factor2[index2] = j;
        index2++
      }
    }

    var sameFactors = [];
    var indexSameFactors = 0;

    for (var k = 0; k < factor1.length; k++){
      for (var l = 0; l < factor2.length; l++){
        if (factor1[k] === factor2[l]){
          sameFactors[indexSameFactors] = factor1[k];
          indexSameFactors++
        }
      }
    }

    //angka terbesar

    var fpb = sameFactors[0];

    for (var m = 0; m < sameFactors.length - 1; m++){
      if (sameFactors[m] < sameFactors[m + 1]){
        fpb = sameFactors[m + 1];
      }
    }

    return fpb;
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1