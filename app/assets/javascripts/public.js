//= require gko/externals/jquery.easing.1.3
//= require gko/externals/jquery.imagesloaded
//= require gko/externals/jquery.elastislide
//= require gko/externals/jquery.elastidegallery


jQuery(document).ready(function ($) {
	if($('.images:first').length > 0) {
		Gallery.init($('.images:first'));
	}
});