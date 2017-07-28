// Function expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Braden', 'Sten'));
//Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Braden', "Sten");
//# sourceMappingURL=immediately_invoked_function_args.js.map