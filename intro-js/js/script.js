var names = ["Souraya", "Laetitia", "Joe"];

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
} 
/*

Arrays 
var array = new Array();
array[0] = "Souraya";
array[1] = "Laetitia";
array[2] =  function(name) {
console.log("Hello" + name);
};

console.log("Hello" + array[1]);
/*



var sum = 0; 
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum = sum + 1;
}

console.log("sum of 0 through 9 is " + sum);
*/ 


/*var string = "Hello";
string = string + " World";
console.log(string + "!");




/*  var message = "in global"; 
console.log("global: message = " + message);
// global:message = in global 

var a = function() {
var message = "inside a";
console.log("a: message = " + message);
 
function (b) { 
console.log("b: message =" + message)
};

 //a: message = inside a 
 
 a(); 


/*  function getAverage (a,b) {

	var average = (a + b) /2; //local variable
	console.log(average);
	return average;
}

var myResult = getAverage(7,8); //global variable


function logResult() {
	console.log("the average is " + myResult + " inside the function");
}

logResult();

/*
	
var links = document.getElementsbyTagName("a");

for (i = 0; i < links.x; i++) {

	links[i].className = "link-" + i;
} 




		/* Break and continue
	function nameofFunction(a,b) {

	var var1 = (a + b) / 2;
	console.log(var1); 
	return var1;
}

	var var2 = nameofFunction(6,6);
	console.log("the average is " + var2);
	



		/* Break and continue

					EXAMPLE 1

	for (i = 0; i < 10; i++) {
	
	console.log(i);

	if(i === 7){

		break;
	}
} 

console.log("I have broken out of the loop");

					EXAMPLE 2

for (i = 0; i < 10; i++) { 

if(i === 5 || i ===3) { 

 	continue;
 }

 	console.log(i);

 	if(i === 7) { 
 		break; 
 	}
 }

 console.log("I have broken out of the loop");





							/* while loops
var age = 5;

while (age < 10) { 
	console.log("Your age is less than 10");
	age++;
	}

document.write("you are now over 10");
*/ 

							/* Logical operators 

/* >= <= greater than && = and || or === equals 
var myAge = 15; 

if (myAge < 18 || myAge > 30) { 
document.write("You ain't coming");

} else { 
document.write("Your coming!")}  
*/


							/* if else statement

var myAge = 19; 

if (myAge > 30) {

	document.write("you are over 30!");

} else if (myAge > 20){
	document.write("you are over 20!");

} else if (myAge > 10){
	document.write("you are over 10!");

} else {
	document.write("you are not over 10!"); 
}
*/