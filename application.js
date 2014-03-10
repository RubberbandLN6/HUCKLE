$(document).ready(function() {

var number = Math.floor((Math.random()*100)+1);
var myNumber = $("#myNumber").val(); 

$('#Submit').click(function() {

	if (myNumber == number)
	{
		alert ("You got the number!");
	}
	else if (myNumber > number)
	{
		alert ("You went too far!");
	}
	else if (myNumber < number)
	{
		alert ("Keep going!");
	}
	else 
	{
		alert ("Input a number please!");
	}

	});
});
