function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var rate = 2000;
    var result = [];
    
    for (var i = 0; i < arrPenumpang.length; i++){
      var obj = {};
      passenger = arrPenumpang[i];

      for (var j = 0; j < rute.length; j++){
        if (rute[j] === passenger[1]){
          var departure = j;
        } else if (rute[j] === passenger[2]){
            var arrival = j;
        }
      }
    
      var distance = Math.abs(arrival - departure);

      obj.penumpang = passenger[0];
      obj.naikDari = passenger[1];
      obj.tujuan = passenger[2];
      obj.bayar = distance * rate;

      result.push(obj);
      }
      return result;

  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]