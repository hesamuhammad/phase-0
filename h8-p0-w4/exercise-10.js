function changeMe(arr) {
    // you can only write your code here!
    var number = 1;

    if (arr.length === 0) {
      console.log('');
    } else {
      for (var i = 0; i < arr.length; i++){
        var obj = {};
        obj.firstName = [i][0];
        obj.lastName = [i][1];
        obj.gender = [i][2];

        if (arr[i][3] !== undefined){
          obj.age = new Date().getFullYear() - arr[i][3];
        } else {
          obj.age = 'Invalid Birth Year'
        }

        console.log(obj);
        number++
      }
    }
}
  
  
  // TEST CASES
  changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""