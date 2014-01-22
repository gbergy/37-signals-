$(document).ready(function(){
	$('#basecamp').hover(function() {
		$('#bcblurb').show();
		$('#arrowleft').show();
		$('#mainblurb').hide();
		},function(){
		$('#bcblurb').hide();
		$('#arrowleft').hide();
		$('#mainblurb').show();
	});
	
	$('#highrise').hover(function() {
		$('#hrblurb').show();
		$('#arrowmiddle').show();
		$('#mainblurb').hide();
		},function() {
		$('#hrblurb').hide();
		$('#arrowmiddle').hide();
		$('#mainblurb').show();
	});
	
	$('#campfire').hover(function() {
		$('#cfblurb').show();
		$('#arrowright').show();
		$('#mainblurb').hide();
		},function() {
		$('#cfblurb').hide();
		$('#arrowright').hide();
		$('#mainblurb').show();
	});

});


	





