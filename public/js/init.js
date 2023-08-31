//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "8 May 2023 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	