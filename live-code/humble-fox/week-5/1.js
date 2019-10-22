/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikkan nilai string yang merupakan jumlah terbanyak dan terdikit.

[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah andre

[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/

function eMoneySplit(stringData) {
    // code below here
    if(stringData === ''){
      return 'tidak ada catatan EMoney';
    }
    // split coma and colon
    var splitComa = stringData.split(",");
    var name = [];
    var money = [];
    for(var i = 0; i < splitComa.length;i++){
      name.push(splitComa[i].split(':')[0]);
      money.push(splitComa[i].split(':')[1]);
    }
    // for min and max money
    var min = 0;
    var max = 0;
    for(var j = 0; j < money.length; j++){
      if(parseInt(money[j]) < parseInt(money[min]))min = j;
      if(parseInt(money[j]) > parseInt(money[max]))max = j;
    }
    return 'terbanyak adalah ' + name[max] + ' dan terdikit adalah ' + name[min];
  }
  
  /** 
   PSEUDOCODE
  
   SET 'string data' to value
   IF empty or undefined
      RETURN 'tidak ada catatan EMoney'
   
  */
  
  console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
  // terbanyak adalah bagas dan terdikit adalah ali
  console.log(eMoneySplit('andre:50000'))
  // terbanyak adalah andre dan terdikit adalah andre
  console.log(eMoneySplit(''))
  // tidak ada catatan eMoney
  