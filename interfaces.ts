// interface User {
// 	email : string;
// 	firstName : string;
// 	lastName : string;
// }

// function profile(user: User) : string {
// 	return `Welcome, ${user.firstName} ${user.lastName}`;
// } 

// var realUser = {
//  email: 'test@test.com',
//  firstName: 'Braden',
//  lastName: 'Sten'
// };

// console.log(profile(realUser));
// console.log(realUser.email);


interface User {
	email : string;
	firstNamev? : string;
	lastName? : string;
}

function profile(user: User) : string {
	return `Welcome, ${user.email}`;
} 

var realUser = {
 email: 'test@test.com',
};

console.log(profile(realUser));
