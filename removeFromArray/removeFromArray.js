const removeFromArray = function(array) {
    for(let i=0;i<arguments.length;i++){
        if(!(array.includes(arguments[i]))){
            continue
        } else{
            array.splice(array.indexOf(arguments[i]),1)

        }
    }
    return array
 
}

module.exports = removeFromArray