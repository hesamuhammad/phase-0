/*
  /////////////
  pyramidNumber
  /////////////

  pyramidNumber adalah suatu program untuk menampilkan piramida.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
*/
var max = 5; // silahkan beri nilai bebas

// code here
for(var i = 0; i < max ; i++){
  var tmp = ""
  
  for(var j = 0; j<i+1; j++){
    tmp+=(i+1)
  }

  console.log(tmp)
}

// code here
