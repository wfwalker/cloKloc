
function zeroPad(anInt) {
	if (anInt == 0) {
		return "00";
	} else if (anInt < 10) {
		return "0" + anInt;
	} else {
		return "" + anInt;
	}
}

function updateClock() {
	// var theNow = new Date("December 17, 1995 14:41:00");
	var theNow = new Date();
	var theNowString = zeroPad(theNow.getHours()) + ":" + zeroPad(theNow.getMinutes()) + ":" + zeroPad(theNow.getSeconds());

	$('.spinner').html(theNowString);
	$('.stationary').html(theNowString);

	if (theNowString.split("").reverse().join("") == theNowString) {
		console.log("PALINDROME!");
		$('.stationary').addClass('alert');
	} else {
		$('.stationary').removeClass('alert');
	}
	window.setTimeout(updateClock, 1000);
}

function findAllPalindromes() {
	for (var h = 0; h < 24; h++) {
		for (var m = 0; m < 60; m++) {
			for (var s = 0; s < 60; s++) {
				var candidateString = zeroPad(h) + ":" + zeroPad(m) + ":" + zeroPad(s);
				if (candidateString.split("").reverse().join("") == candidateString) {
					console.log(candidateString);
				}
			}
		}
	}
}

$(document).ready(function() {
	findAllPalindromes();
	updateClock();
});