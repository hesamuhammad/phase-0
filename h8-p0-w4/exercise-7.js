function sort(arr){
  var tmp = '';
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++){
      if (arr[i] < arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr
}

function urutkanAbjad(str) {
    // you can only write your code here!
    var result = '';
    var tmp = [];
    for (var i = 0; i < str.length; i++){
      tmp.push(str[i]);
    }
    var sortArr = sort(tmp);

    for (var j = 0; j < tmp.length; j++){
      result += sortArr[j];
    }
    return result;
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'