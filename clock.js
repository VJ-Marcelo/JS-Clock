$(document).ready(function() {

	function displayCurrentTime() {

		var currentTime = new Date();

		var hours = currentTime.getHours();

		var minutes = currentTime.getMinutes();

		var seconds = currentTime.getSeconds();

		var meridiem = " AM";

		if (hours > 12) {
			hours = hours - 12;
			meridiem = " PM";
		}
		if (hours === 0) {
			hours = 12;
		}

		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (hours < 10) {
			hours = "0" + hours;
		}

		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + meridiem;

	}
		// This for the medium extra credit part
	function displayCurrentDate() {

		var currentDate = new Date();

		var day = currentDate.getDay();

		var date = currentDate.getDate();

		var month = currentDate.getMonth();

		var year = currentDate.getFullYear();

		// Pretty similar to the instructions given for the first part
		if (day == 0) {
			day = "Sunday";
		}

		else if (day == 1) {
			day = "Monday";
		}

		else if (day == 2) {
			day = "Tuesday";
		}

		else if (day == 3) {
			day = "Wednesday";
		}

		else if (day == 4) {
			day = "Thursday";
		}

		else if (day == 5) {
			day = "Friday";
		}

		else if (day == 6) {
			day = "Saturday";
		}

		// Again, same thing like in the instructions
		if (date < 10) {
			date = "0" + date;
		}

		if (month == 0) {
			month = "January";
		}

		else if (month == 1) {
			month = "February";
		}

		else if (month == 2) {
			month = "March";
		}

		else if (month == 3) {
			month = "April";
		}

		else if (month == 4) {
			month = "May";
		}

		else if (month == 5) {
			month = "June";
		}

		else if (month == 6) {
			month = "July";
		}

		else if (month == 7) {
			month = "August";
		}

		else if (month == 8) {
			month = "September";
		}

		else if (month == 9) {
			month = "October";
		}

		else if (month == 10) {
			month = "November";
		}

		else if (month == 11) {
			month = "December";
		}

		// Similar to the code to show time but just for date
		var dateTodayDiv = document.getElementById('date');
		dateTodayDiv.innerText = day + ", " + month + " " + date + ", " + year;

	}

	displayCurrentTime();
	setInterval(displayCurrentTime, 1000);

	displayCurrentDate();
	setInterval(displayCurrentTime, 1000);

});