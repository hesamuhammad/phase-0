function targetTerdekat(arr) {
    
    // 'o' position
    for (i = 0; i < arr.length; i++){
      if (arr[i] === 'o'){
        var oPosition = i;
      }
    }

    // 'x' position
    var xPosition = [];
    var xIndex = 0;
    for (var j = 0; j < arr.length; j++){
      if (arr [j] === 'x'){
        xPosition[xIndex] = j;
        xIndex++;
      }
    }
    
    // result
    if (xPosition.length !== 0){
      for (var k = 0; k < xPosition.length; k++){
      var nearestTarget = Math.abs(xPosition[0] - oPosition);

      if (nearestTarget > Math.abs(xPosition[k] - oPosition))
        nearestTarget = Math.abs(xPosition[k] - oPosition);
      }
    } else {
      nearestTarget = 0;
    }
    
    return nearestTarget;
  }

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2