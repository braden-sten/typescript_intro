// Function declaration - hoisting
function fullName(first : string, last : string) : string {
	return first + " " + last;
}

//Function expression - has to be defined before being called
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last :string) {
	return first + " " + last;
}

console.log(fullName('Braden', 'Sten'));
console.log(otherFullName('Braden', 'Sten'));
console.log(thirdFullName('Braden', 'Sten'));