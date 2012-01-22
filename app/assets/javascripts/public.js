//= require gko/externals/jquery.elastidegallery
//= require jquery.mousewheel.js
//= require jquery.jscrollpane.min.js

$(document).ready(function() { 

	/////////////////////////////////////////////////
  init_scrollpane = function() {
	
		scrollpaneTag.wrap("<div id='scrollpane-wrapper'></div>");
		$("<a href='#' id='scrollpane-tab' class='open'><span></span></a>").prependTo($("#scrollpane-wrapper"))
		.bind('click',
			function(e) {
				var el = $(this);
				if (el.hasClass('open')) {
					$("#scrollpane-wrapper").stop().animate({ right: -320}, 400);
				} else {
					$("#scrollpane-wrapper").stop().animate({ right: 0 }, 400);
				}
				el.toggleClass("open");
				e.preventDefault();
	    });;  
	
		scrollpaneTag.jScrollPane({
			showArrows: true,
			autoReinitialise: true
		});
		scrollpaneApi = scrollpaneTag.data('jsp');
  }

	var scrollpaneTag = $('.page_content:first'),
			scrollpaneApi;
 
  if($('body').hasClass('mobile')) {
	}
	else {
		if($('.images:first').length > 0) {
			Gallery.init($('.images:first'));
		}
		init_scrollpane();
	}
	
});