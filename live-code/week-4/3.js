/**
 * ==========
 * Bubble Tea
 * ==========
 * 
 * Ceritanya Bella mau beli bubble tea.
 * 
 * Ini adalah list bubble tea yang bisa dibeli
 * beserta harganya:
 * 
 * @listBoba = [
 *         ['Xing Fu Tang', 38000],
 *         ['OneZo', 53500],
 *         ['KOI The', 36000],
 *         ['Chatime', 25000],
 *         ['Kokumi', 42000],
 *         ['Bubble Station Milk', 13000]
 *     ]
 * 
 * Bella berniat membeli bubble tea yang ada di list
 * tadi secara berurutan, mulai dari Xing Fu Tang,
 * sampai ke Bubble Station Milk.
 * Uang jajan Bella terbatas, dan berkurang jika membeli
 * bubble tea, jadi mungkin tidak bisa membeli semuanya.
 * 
 * Jika Bella bisa membeli bubble tea nya (masih cukup uang),
 * catat merk bubble tea nya di array 'Terbeli'
 * Jika tidak bisa dibeli (tidak cukup uang),
 * catat merk bubble tea nya di array 'Lain Kali'
 * 
 * Selesai berbelanja,
 * catat juga jumlah uang yang digunakan di array 'Terbeli'
 * dan jumlah uang yang tersisa di array 'Lain Kali'
 * 
 * Jadi jika uang jajan Bella 100.000 rupiah, maka 
 * hasil output akan seperti ini:
 * [
 *     ['Terbeli', 91500, 'Xing Fu Tang', 'OneZo'],
 *     ['Lain Kali', 8500, 'KOI The', 'Chatime', 'Kokumi', 'Bubble Station Milk']
 * ]
 * 
 * Nah, jika uang jajan Bella 200.000 rupiah, maka
 * hasil output akan seperti ini:
 * [
 *     ['Terbeli', 194500, 'Xing Fu Tang', 'OneZo', 'KOI The', 'Chatime', 'Kokumi'],
 *     ['Lain Kali', 5500, 'Bubble Station Milk']
 * ]
 * 
 * Rules:
 * 1. Dilarang menggunakan built-in function selain push dan unshift.
 */

function beliBoba(uangJajan) {
  var listBoba = [
    ['Xing Fu Tang', 38000],
    ['OneZo', 53500],
    ['KOI The', 36000],
    ['Chatime', 25000],
    ['Kokumi', 42000],
    ['Bubble Station Milk', 13000]
  ]
  // Write your code here
  var terbeli = [];
  var lainKali = [];
  var result = [];
  var dibayar = 0;

  for (var i = 0; i < listBoba.length; i++){
    if (uangJajan >= listBoba[i][1]){
      terbeli.push(listBoba[i][0]);
      uangJajan -= listBoba[i][1];
    } else {
      lainKali.push(listBoba[i][0]);
    }
    for (var j = 0; j < terbeli.length; j++){
      if (terbeli[j] === listBoba[i][0]){
        dibayar += listBoba[i][1]
      }
    }
  } 
  terbeli.unshift('Terbeli', dibayar)
  lainKali.unshift('Lain Kali', uangJajan)
  result.push(terbeli, lainKali);
  return result;
}

console.log(beliBoba(100000))
// [
//   ['Terbeli', 91500, 'Xing Fu Tang', 'OneZo'],
//   ['Lain Kali', 8500, 'KOI The', 'Chatime', 'Kokumi', 'Bubble Station Milk']
// ]

console.log(beliBoba(200000))
// [
//   ['Terbeli', 194500, 'Xing Fu Tang', 'OneZo', 'KOI The', 'Chatime', 'Kokumi'],
//   ['Lain Kali', 5500, 'Bubble Station Milk']
// ]