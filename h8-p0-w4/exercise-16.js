function graduates (students) {
    // Code disini
    var tmpGroup = [];
    for (var i = 0; i < students.length; i++){
        for (var j = 0; j <= tmpGroup.length; j++){
          if (students[i].score > 75){
            if (tmpGroup[j] === undefined){
            tmpGroup[j] = [];
            tmpGroup[j].push(students[i]);
            break;
          } else if (tmpGroup[j][0].class === students[i].class){
            tmpGroup[j].push(students[i]);
              break;
          }
        }
      }
    }

    var result = {};
    for (var k = 0; k < tmpGroup.length; k++){
      var batch = tmpGroup[k][0].class;
      for (var l = 0; l < tmpGroup[k].length; l++){
        delete tmpGroup[k][l].class;
      }
      result[batch] = tmpGroup[k];
    }
    return result 
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}