const palindromes = function(string) {
    let stringChars = string.split('');
    let letters="abcdefghijklmnopqrstuvwxyz"
    for(let i = 0;i<stringChars.length;i++){
        stringChars[i] = stringChars[i].toLowerCase();
        if (!letters.includes(stringChars[i])){
            stringChars.splice(stringChars.indexOf(stringChars[i]), 1);
        }

    }
    let newString = stringChars.join('');
    let newStringReversed = stringChars.reverse().join("");
    return newString==newStringReversed;

}
module.exports = palindromes
