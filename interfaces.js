// interface User {
// 	email : string;
// 	firstName : string;
// 	lastName : string;
// }
function profile(user) {
    return "Welcome, " + user.email;
}
var realUser = {
    email: 'test@test.com'
};
console.log(profile(realUser));
//# sourceMappingURL=interfaces.js.map