function compare(a,b){
    let age1 = a.age;
    let age2 = b.age;
    comparison=0;
    if(age2>age1){
        comparison=1;
    }else{
        comparison=-1;
    }
    return comparison;
}



let findTheOldest = function(arrayOfObjects) {
    arrayOfObjects.forEach(item => {
        let end = item.yearOfDeath;
        if(!item.yearOfDeath){
            end = new Date().getFullYear();
        }
        item.age = end - item.yearOfBirth;})

    arrayOfObjects.sort(compare);
    let oldest = arrayOfObjects[0];
    return oldest.name;

    
}

module.exports = findTheOldest
