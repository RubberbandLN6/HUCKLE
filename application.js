$(document).ready(function() {

var number = Math.floor((Math.random()*100)+1);
	console.log(number);

$('#Submit').click(function(e) {
e.preventDefault();
var myNumber = $("#myNumber").val(); 
var response = "";

	if (myNumber == number)
	{
		response = "You got the number!";
	}
	else if (myNumber > number)
	{
		response = "You went too far!";
	}
	else if (myNumber < number)
	{
		response = "Keep going!";
	}
	else 
	{
		response = "Input a number please!";
	}
$("#response").html(response);

	});
$('#newGame').click(function() {
number = Math.floor((Math.random()*100)+1);
	console.log(number);
$("#myNumber").val("");
$('#response').html(""); 
});
});
