
var words=prompt("Enter a word or phrase")


function reverseWords(words){
	var reverse = []
	reverse = words.split("").reverse().join("")
	return reverse
}

reverseWords(words)