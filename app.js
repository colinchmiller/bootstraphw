$(document).ready(function(){
	//This is not even registering in the console log for click dismissal
	// $('#alertcity').on('click', '.dismissbutton', function(){
	// 	console.log("are you even working, bro?");
	// });
	$('#winner').on('click', '.someButton', function(){
		$(this).parent().addClass('alert-success');
		$(this).parent().append('<p>Success!</p>');
		console.log("Success alert added.");
	});

	$('#professor').on('click', '.someButton', function(){
		$(this).parent().addClass('alert-info');
		$(this).parent().append('<p>Information!</p>');
		console.log("Information alert added.");
	})

	$('#teacher').on('click', '.someButton', function(){
		$(this).parent().addClass('alert-warning');
		$(this).parent().append('<p>Warning!</p>');
		console.log("Warning alert added.");
	})

	$('#defeat').on('click', '.someButton', function(){
		$(this).parent().addClass('alert-danger');
		$(this).parent().append('<p>You Lose!</p>');
		console.log("Danger alert added.");
	})

	$('#dismodio').on('click', '#dismissbutton', function() {
		$(this).parent().slideUp();
		console.log("Dismiss button removed.");
	})
		// $(this).parent().remove();
		// //console.log("test for function");
		// $('.loadinfo').append('<div id="winner" class= "alert alert-success" role="alert"></div>');
		// var $el=$('#winner);
		// $el.append('<p>Success!</p>');






});