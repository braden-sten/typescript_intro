// Function declaration - hoisting
function fullName(first, last) {
    return first + " " + last;
}
//Function expression - has to be defined before being called
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Braden', 'Sten'));
console.log(otherFullName('Braden', 'Sten'));
console.log(thirdFullName('Braden', 'Sten'));
//# sourceMappingURL=function_declarations_vs_expressions.js.map