function groupAnimals(animals) {
  // you can only write your code here!
  var tmp;
  for (var i = 0; i < animals.length; i++){
    for (var j = 0; j < animals.length; j++){
      if (animals[i][0] < animals [j][0]){
        tmp = animals[j];
        animals[j] = animals[i];
        animals[i] = tmp;
      }
    }
  }
  var result = [[]];
  var index = 0;

  result[0][0] = animals [0];

  for (var k = 1; k < animals.length; k++){
    if (animals[k][0] === result[index][0][0]){
      result[index][result[index].length] = animals[k];
    }
    else {
      index++;
      result[index] = [animals[k]];
    }
  }
  return result;
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]