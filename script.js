/*let myNumber = 10;

console.log(parseInt("1.656"));

console.log(parseInt("3ghkl"));

console.log(parseInt("fhghj3"));

console.log(parseFloat("1.4567"));

console.log(typeof prompt('Your old')); // Весь час String

console.dir(window.String);

// вираховка

let textString = "Lorem ipsum dolor sit"

console.log("Text length is ", textString.length); // рахує з 0
console.log(textString.charAt(20));

let mathWord = "sit";
console.log( textString.match(mathWord) );

const greeting = '    Hello!     ';
console.log(greeting.trim()); // rigth | left
// Split
const str = 'The quick brown fox jumps over the lazy dog'
	
const words = str.split(' ');
console.log(words[3]);

const strCopy = str.split(' ');
console.log(strCopy);

const mySubStr = 'Taras';
console.log(mySubStr.substr(0, 2));
console.log(mySubStr.substr(3));*/

let user = {
	userName: 'Дмитро',
	userCity: 'Львів',
	userAge: 1
}

let stringTemplate = `hello my name: ${ user.userName }
i live in: ${ user.userCity } 
i am: ${user.userAge} year old
`

document.write( stringTemplate );


alert('Ростік \nлох')