var showMobileMenu = function() {
	$menu = $( '.nav' );
	$btnMobileMenu = $( '.mobile_button' );

	$menuIsOpen = false;

	console.log( $btnMobileMenu );

	$btnMobileMenu.click(function( event ) {
		if ( !$menuIsOpen ) {
			$menu.stop().slideDown( 200, function() {
				$menuIsOpen = true;
			});
		} else {
			$menu.stop().slideUp( 200, function() {
				$menuIsOpen = false;
			});
		}
	});
};

var animations = function() {
	//Header
	$( '.logo' ).addClass( 'animated bounceInLeft' );
	$( '.mobile_button, .nav' ).addClass( 'animated bounceInRight' );

	$( '.slide_content, .slide_footer, .features_row .picture, .features_row .text' ).css( 'opacity', 0 );
	setTimeout( function() {
		//Slider
		$( '.slide_content' ).addClass( 'animated bounceIn' );
		setTimeout( function() {
			$( '.slide_footer' ).addClass( 'animated fadeIn' );
			setTimeout( function() {
				$( '.features_row .picture' ).css( 'opacity', 1 ).addClass( 'animated flipInX' );
				$( '.features_row .text' ).css( 'opacity', 1 ).addClass( 'animated slideInUp' );
			}, 500);
		}, 500);
	}, 1000);
};

$(function() {
	showMobileMenu();
	animations();
});