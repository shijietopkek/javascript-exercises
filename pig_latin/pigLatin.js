




function pigLatin(string){
	let vowels = 'aeiou';
	index=0;
	for(let i=0;i<string.length;i++){
		if(!vowels.includes(string[i])){
			index+=1;
		}else if(string[i]=='u' && string[i-1]=='q'){
			index+=1;
		}else{
			break;
		}
	}
	
	return string.slice(index)+string.slice(0,index)+'ay';
}






function translate(sentence) {
	let newSentence = "";
	let words = sentence.split(" ")
	for(let i=0; i< words.length;i++){
		words[i] = pigLatin(words[i]);
	}
	newSentence = words.join(" ");
	return newSentence;
	
}

module.exports = {
	translate
}

