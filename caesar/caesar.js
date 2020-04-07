function getNewChar(char, step){
    let letters = "abcdefghijklmnopqrstuvwxyz";
    const lettersReversed = letters.split("").reverse().join("")
    const mod=26;
    char = char.toLowerCase()
    if (!letters.includes(char)) return;
    let index=null;
    let newIndex=null;
    if(step<0){
        index = lettersReversed.indexOf(char)
        newIndex = (index+Math.abs(step))%(mod);
        return lettersReversed[newIndex];
    }else{
        index = letters.indexOf(char);
        newIndex = (index+ step)%(mod);
        return letters[newIndex];
    }
    
}

const caesar = function(string,step) {
    let newString = "";
    for(let i=0;i<string.length;i++){
        if(!getNewChar(string[i],step)){
            newString+=string[i];
        }else{
            if(string[i]==string[i].toUpperCase()){
                let char = string[i].toLowerCase();
                let newChar = getNewChar(char,step);
                newString += newChar.toUpperCase();
                
            }else{
                let char = string[i];
                let newChar = getNewChar(char,step);
                newString += newChar;
            }
        }
    }
    return newString;


}

console.log(caesar("Hello, World!", -29));
module.exports = caesar;
