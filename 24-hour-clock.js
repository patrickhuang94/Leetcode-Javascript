//Given inputs a, b, c, and d, output the largest possible clock in 24-hour format
//For example, 1 7 1 9 should return 19:17; 2 3 0 0 should return 23:00

var twentyFourHour = function(a, b, c, d) {
	var string = "" + a + b + c + d; //1 7 1 9 -> "1719"
	var i = 0;
	var largest;
	var first, second, third, fourth;

	while (i < string.length) {
		//Go through the string and find the largest integer <= 2 for first index
		if (string.charAt(i) <= 2) {
			
		}
	}
}