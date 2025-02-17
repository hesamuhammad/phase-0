//Logic Challenge - Most Frequent Largest Numbers

function sorting(arrNumber) {
    // code di sini
    for (var i = 0; i < arrNumber.length; i++){
      var tmp;

      for (var j = 0; j < arrNumber.length; j++){
        if (arrNumber[i] < arrNumber[j]){
          tmp = arrNumber[i];
          arrNumber[i] = arrNumber[j];
          arrNumber[j] = tmp;
        }
      }
    }
    
    return arrNumber;
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if (!arrNumber.length){
      return '';
    }
    
    var highestNumber = arrNumber[arrNumber.length - 1];

    var numberOfApperance = 0;

    for (var i = 0; i < arrNumber.length; i++){
      if (arrNumber[i] === highestNumber){
        numberOfApperance++
      }
    }

    return 'angka paling besar adalah ' + highestNumber + ' dan jumlah kemunculan sebanyak ' + numberOfApperance + ' kali';
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''