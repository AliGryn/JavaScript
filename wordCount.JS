var phrase=prompt("Enter phrase")

function countWords(sentence){
	var array = []
	array = sentence.split(" ")
	return array.length
}

countWords(phrase)