jQuery(function() {

	let my_switch = false;

	$('#my_button').click(function () {

		if ( my_switch == false ) {
			my_switch = true;

			$(this).html('Click for FREE TRIP!').removeClass('btn-primary').addClass('btn-success');
			$('#prize').html('You won a free cruise to Alaska!')
			$('#my_image').attr('src', 'images/alaska.png');
			$('#mini').attr('src', 'images/boat.png');


			//$('.body').css("background-image", "url('../images.alaska.png')");
		} else {
			my_switch = false;

			$(this).html('Click for FREE CRUISE!').removeClass('btn-success').addClass('btn-primary');
			$('#prize').html('You won a free trip to Hawaii!')
			$('#my_image').attr('src', 'images/hawaii.png');
			$('#mini').attr('src', 'images/plane.png');

			//$('.body').css("background-image", "url('../images/hawaii.png')");
		}

		// if ( $('.square.alt').hasClass('red') ) {
		// 	$('.square.alt').removeClass('red');
		// } else {
		// 	$('.square.alt').addClass('red');
		// }




	});

});
