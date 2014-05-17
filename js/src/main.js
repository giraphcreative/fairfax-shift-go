

// set heights for things
var set_heights = function() {
	// select the full height divs
	var full_height_divs = $(".header");

	// matchMedia
	if ( matchMedia( "only screen and (min-width: 768px)" ).matches ) {

		// set full height divs
		full_height_divs.height( $(window).height() );

	} else {

		// set the full height divs to auto on small screens.
		full_height_divs.height( "auto" );

	}

}


// onload
$(function(){
	
	// set the heights on load..
	set_heights();

	// and on resize
	$(window).resize( set_heights );

	$(".half").fitVids();

});

