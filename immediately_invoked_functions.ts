var names : string[] = ['Braden', 'Whitney', 'Lisa'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);