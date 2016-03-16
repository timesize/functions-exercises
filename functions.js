function combineWords(word1, word2) {
    // TODO: Place your code here
    console.log(word1 + " " + word2);
    return word1 + " " + word2;
}

combineWords('dog', 'house');
// displays 'doghouse'

//number 2
function repeatPhrase(phrase, n) {
    // TODO: Place your code here
    for (var i = 1; i <= n; i++) {
        console.log (phrase);
    }
}
repeatPhrase ("Hello", 5);


//number 3
function toTheNthPower(number, power) {
    var result = number;
    for (var i = 1; i < power; i++){
    result = (result*number);
      console.log(result);
    }
}

toTheNthPower(4, 5);
// displays 1024

//number 4
var myname = "Nathan"
//set default name
function greetMe(myname){
    var phrase = "hi " + myname;
    console.log(prase);
    return phrase;
}
console.log(myname);

//number 5
function pythagoreanTheorem(a, b) {
    // TODO: Place your code here
    var cSquared = ((a * a) + (b * b));
    return Math.sqrt(cSquared);
}

pythagoreanTheorem(3, 4);
// should display 5;

//number 6
function isXEvenlyDivisibleByY(x, y) {
    // TODO: Place your code here
    if (x % y === 0);
    return "Yes!"
}

isXEvenlyDivisibleByY(99, 3);
// displays true

function countVowels(word) {
    // TODO: Place your code here
    var grabVowels = 0;
    var string = str.toString();

    for (var i = ); i <= string.length - 1; i ++) {

	if (string.charAt(i) == "a") || string.charAt(i) == "e" || (string.charAt(i) == "i") || string.charAt(i) == "o" || (string.charAt(i) == "u") || string.charAt(i) == "y");
		countVowels += 1;
}
}
return countVowels;
}
countVowels("stealing")

//number 8
function printTriangle(length) {
	for(var i = 1; i <= length; i++) {

		var row = '';

		for(var j = 0; j < i; j++) {
			row += '*';
		}

		console.log(tier);
	}
}


//number 9
function printPyramid(length) {
	for(var i = 1; i <= length; i++) {
		var tier = '';

		for(var j = length - i; j > 0; j--) {
			tier += ' ';
		}
		for(var k = 0; k < i; k++) {
			tier += '* ';
		}
		console.log(tier);
	}
}
