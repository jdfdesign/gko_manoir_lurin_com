//= require gko/jquery.elastidegallery 
//= require jquery.mousewheel.js
//= require jquery.jscrollpane.min.js

$(document).ready(function() { 
	/////////////////////////////////////////////////
	var scrollpaneTag = $('.page_content:first'),
		scrollpaneActive = false,
		scrollPaneTab,
		scrollpaneApi,
		scrollpaneWrapper;
	
	/////////////////////////////////////////////////
	remove_scrollpane = function() {
		scrollpaneApi.destroy();
		scrollPaneTab.remove();
		scrollpaneTag.unwrap();
		scrollpaneTag.css({
			'position': 'relative',
			'max-width': 'none'
		});
		scrollpaneActive = false;
	}
	/////////////////////////////////////////////////
	toggle_scrollpane = function() {
		if (scrollPaneTab.hasClass('open')) {
			scrollpaneWrapper.stop().animate({ right: -320}, 400);
		} else {
			scrollpaneWrapper.stop().animate({ right: 0 }, 400);
		}
		scrollPaneTab.toggleClass("open");
		return false;
	}
	/////////////////////////////////////////////////
	init_scrollpane = function() {
		scrollpaneApi = scrollpaneTag.wrap("<div id='scrollpane-wrapper' />").jScrollPane({
			showArrows: true,
			autoReinitialise: false
		}).data('jsp');	
		scrollpaneWrapper = $("#scrollpane-wrapper");
		$("<a href='#' id='scrollpane-tab' class='open'><span></span></a>").prependTo(scrollpaneWrapper);
		scrollPaneTab = $("#scrollpane-tab");
		scrollPaneTab.on('click', toggle_scrollpane);
		scrollpaneActive = true;
	}

	/////////////////////////////////////////////////
	
	console.log(screen.width)
	
	if(screen.width > 820 ) {
		if(f_viewport_wh().w > 819 ) {
			init_scrollpane();
		}
		$(window).on("throttledresize", function() {
			if(f_viewport_wh().w > 820 && !scrollpaneActive ) {
				init_scrollpane();
			} else if(scrollpaneActive) {
				remove_scrollpane();
			}
		});
	}
	
//	if($('body').hasClass('mobile')) {
	
//	}
//	else {
		if($('.images:first').length > 0) {
			Gallery.init($('.images:first'));
		}
//	}

	
});