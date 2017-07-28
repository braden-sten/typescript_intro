// Boolean - true or false
let paidAccount : boolean = true;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Braden Sten";

// Array
var ages : number[] = [33, 32, 14, 48];

// Tuple
let player : [number, string];
player = [12, "John Stockton"];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any
var apiData : any[] = [123, "Braden", true, false, 321, "Sten"];

// Void
function printOut(msg: string) : void {
	console.log(msg);
}