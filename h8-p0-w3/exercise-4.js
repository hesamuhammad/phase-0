function dataHandling2(input){
    //line 1
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA Internasional Metro")
    console.log(input)

    //line 2
    var splitedDate = input[3].split('/')

    switch (splitedDate[1]) {
        case '01':
            console.log('Januari');
            break;
        case '02':
            console.log('Februari');
            break;
        case '03':
            console.log('Maret');
            break;
        case '04':
            console.log('April');
            break;
        case '05':
            console.log('Mei');
            break;
        case '06':
            console.log('Juni');
            break;
        case '07':
            console.log('Juli');
            break;
        case '08':
            console.log('Agustu');
            break;
        case '09':
            console.log('September');
            break;
        case '10':
            console.log('Oktober');
            break;
        case '11':
            console.log('November');
            break;
        case '12':
            console.log('Desember');
            break;
        default:
            console.log('Invalid Input');
            break;
    }

    //line 3
    var newSpiltedDate = [];
    for(i = 0; i < splitedDate.length; i++){
        newSpiltedDate[i] = Number(splitedDate[i]);
    }

    newSpiltedDate.sort(function(a, b){
        if (a > b) return -1;
        if (a < b) return 1;
        else return 0;
    })

    var newSpiltedDateString = [];
    for (j = 0; j < newSpiltedDate.length; j++){
        newSpiltedDateString[j] = newSpiltedDate[j];
        
    }
    console.log(newSpiltedDateString);

    //line 4
    console.log(splitedDate.join('-'))

    //line 5
    var sliced = '';

    if (typeof input[1] == 'string'){
        sliced = input[1].slice(0,15);
    } else{
        sliced = 'input invalid'
    }
    console.log(sliced);
}

var input = [
    "0001", 
    "Roman Alamsyah ", 
    "Bandar Lampung", 
    "21/05/1989", 
    "Membaca"];

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */