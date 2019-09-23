// 1. Melakukan Looping Menggunakan While

console.log('LOOPING PERTAMA')
var count1 = 0;
while (count1 < 20){
    count1 += 2;
    console.log(count1 + ' - I love coding')
}

console.log('LOOPING KEDUA')
var count2 = 22;
while (count2 > 2) {
    count2 -= 2 ;
    console.log(count2 + ' - I will become fullstack developer')
}

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for(i = 1; i <= 20; i++){
    console.log(i + ' - I love coding')
}

console.log('LOOPING KEDUA')
for(i = 20; i > 0; i--){
    console.log(i + ' - I will become fullstack developer')
}
// 3. Angka Ganjil dan Genap

for(i = 1; i <= 100; i++){
    if (i % 2 === 0){
        console.log('GENAP')
    } else {
        console.log('GANJIL')
    }
}

//contoh - ganjil genap
//counter sekarang = 1,
//output
"GANJIL"
//counter sekarang = 2,
//output
"GENAP"
// dan seterusnya :)

for(i = 1; i <= 100; i += 2){
    if (i % 3 === 0)
    console.log(i + ' KELIPATAN 3')
}

//contoh - untuk pertambahan counter 2
//counter sekarang = 1,
//output
""
//counter sekarang = 3,
//output
"3 KELIPATAN 3"
// dan seterusnya :)

for(i = 1; i <= 100; i += 5){
    if (i % 6 === 0)
    console.log(i + ' KELIPATAN 6')
}

//contoh - untuk pertambahan counter 5
//counter sekarang = 1,
//output
""
//counter sekarang = 6,
//output
"6 KELIPATAN 6"
// dan seterusnya :)

for(i = 1; i <= 100; i += 9){
    if (i % 10 === 0)
    console.log(i + ' KELIPATAN 10')
}

//contoh - untuk pertambahan counter 9
//counter sekarang = 1,
//output
""
//counter sekarang = 10,
//output
"10 KELIPATAN 10"
// dan seterusnya :)