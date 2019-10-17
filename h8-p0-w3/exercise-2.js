
function reverseWord(word){
    // var str = '';
    // for (var i = word.length - 1; i >= 0; i--){
    //     str += word[i]
    // }
    // return str
    var str = ''
    for (var i = word.length - 1; i > 0; i--){
        str += word[i];
    }
    return str;
}

console.log(reverseWord('"hello world!"'))

