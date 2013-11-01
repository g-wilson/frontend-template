var SITE = (function ($) {
	// sitePublic object returned by the main object
	// Methods and objects part of this can be accessed by other modules
	var sitePublic = {};

	// Settings // Public
	sitePublic.config = {
		// Responsive breakpoints - try and match these to those in main.less
		'bpHeight': 600,
		'bpSmall': 420,
		'bpMedium': 768,
		'bpLarge': 990,
		'bpCollapse': 768,
		'bpListingsCollapse': 580
	};

	// Runs on load // Public
	sitePublic.init = function () {

		// Hack to enable :active on touch devices
		document.addEventListener("touchstart", function () { }, true);
		// Disable 300ms touch delay
		FastClick.attach(document.body);

	};


  return sitePublic;
})(jQuery);
$(document).ready(function () { SITE.init(); });