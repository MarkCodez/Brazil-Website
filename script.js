/*javascript for ungoals - Mark E*/
$(document).ready(function() {
	// button to reveal text
	$('#revealBtn').click(function() {
		$('.UNgoals1').fadeToggle();
		$('.UNgoals2').fadeToggle();
		$('.UNgoals3').fadeToggle();
	});

	// interactive images for each subtitle
	$('.eduGraphImg').click(function() {// education
		$('.eduImg').fadeToggle();
		$('.eduGraphImg').css('display', 'none');
	});
	$('.eduImg').click(function() {
		$('.eduGraphImg').fadeToggle();
		$('.eduImg').css('display', 'none');
	});
	$('.povertyImg').click(function() {//poverty
		$('.wealthImg').fadeToggle();
		$('.povertyImg').css('display', 'none');
	});
	$('.wealthImg').click(function() {
		$('.povertyImg').fadeToggle();
		$('.wealthImg').css('display', 'none');
	});

	$('.housingImg').click(function() {//housing
		$('.housePrice').fadeToggle();
		$('.housingImg').css('display', 'none');
	});
	$('.housePrice').click(function() {
		$('.housingImg').fadeToggle();
		$('.housePrice').css('display', 'none');
	});

	$('.crimeImg').click(function() {//crime
		$('.crimeRates').fadeToggle();
		$('.crimeImg').css('display', 'none');
	});
	$('.crimeRates').click(function() {
		$('.crimeImg').fadeToggle();
		$('.crimeRates').css('display', 'none');
	});
});

/*end of ungoals javascript - Mark E*/