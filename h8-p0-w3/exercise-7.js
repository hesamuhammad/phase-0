function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var count = 1; // word minimum
    for (i = 0; i < kalimat.length; i++){
        if (kalimat[i] === ' ' || kalimat[i] === '-') {
            count++;
        }
    }
    return count;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5