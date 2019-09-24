// 1. Menyusun Barisan Bintang

var rows1 = 5 ; // input the number of rows
for (i = 0; i < rows1; i++){
console.log('*')
}

// do loops to display asterisks in the console.

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5 ; // input the number of rows
var tmp = '';
for (i = 0; i < rows2; i++){
    tmp = '';
    for (j = 0; j < rows2; j++){
        tmp += '*';
    }
    console.log(tmp)
    }

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5 ; // input the number of rows
var tmp = '';
for (i = 0; i < rows3; i++){
    tmp = '';
    for (j = 0; j < i + 1; j++){
        tmp += '*'
    }
    console.log(tmp)
    }
// do loops to display asterisks in the console.